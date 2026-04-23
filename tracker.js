/**
 * ═══════════════════════════════════════════════════════════════
 * TRACKER - Main application logic and initialization
 * ═══════════════════════════════════════════════════════════════
 */

let PHASES = []; // Will be populated with actual data
let handleKeyboardShortcuts = () => {};

/**
 * Initialize the tracker application
 */
function initTracker() {
  // Load phases data (will be added from original file)
  loadPhasesData();
  
  // Initialize storage
  Storage.init();
  
  // Render UI
  UI.init(PHASES);
  
  // Restore progress from localStorage
  restoreProgress();
  
  // Setup event listeners
  setupEventListeners();
  
  // Initialize keyboard shortcuts
  setupKeyboardShortcuts();
  
  console.log('✅ Tracker initialized with', PHASES.length, 'phases');
}

/**
 * Load phases data from original structure
 */
function loadPhasesData() {
  // This function reads from the original tech_mastery_tracker.html PHASES data
  // We'll inject the actual phase data here or fetch from HTML
  if (typeof window.PHASES_DATA !== 'undefined') {
    PHASES = window.PHASES_DATA;
  } else {
    // Fallback: create minimal structure
    PHASES = createMinimalPhases();
  }
}

/**
 * Create minimal phase structure (for testing)
 */
function createMinimalPhases() {
  return [
    {
      id: 1,
      label: 'Phase 1',
      title: 'Absolute Foundations',
      weeks: '1–6',
      duration: '6 weeks',
      color: '#6378ff',
      emoji: '🌱',
      desc: 'Build unbreakable fundamentals.',
      chips: [{ text: 'Python', color: '#a5b4fc' }],
      weeks_data: []
    }
  ];
}

/**
 * Restore progress from localStorage
 */
function restoreProgress() {
  const progress = Storage.getProgress();
  if (!progress) return;

  // Restore completed days
  const completedDays = Storage.getCompletedDays();
  Object.keys(completedDays).forEach(dayId => {
    const element = document.querySelector(`[data-day-id="${dayId}"]`);
    if (element) {
      const checkbox = element.querySelector('.day-check');
      checkbox.classList.add('done');
    }
  });

  // Update overall progress
  if (progress.completedTasks && progress.totalTasks) {
    UI.updateProgress(progress.completedTasks, progress.totalTasks);
  }

  // Restore theme
  const theme = Storage.getTheme();
  Storage.applyTheme(theme);

  // Restore current phase tab
  if (progress.currentPhase) {
    const tab = document.querySelector(`[data-phase-id="${progress.currentPhase}"]`);
    if (tab) tab.click();
  }

  Utils.log('Progress restored', progress);
}

/**
 * Setup global event listeners
 */
function setupEventListeners() {
  // Save progress on day completion
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('day-check')) {
      updateAllProgress();
      Storage.setProgress({});
    }
  });

  // Handle keyboard shortcuts
  document.addEventListener('keydown', handleKeyboardShortcuts);

  // Auto-save progress periodically
  setInterval(() => {
    updateAllProgress();
  }, 30000); // Every 30 seconds
}

/**
 * Update all progress metrics
 */
function updateAllProgress() {
  const allDayChecks = document.querySelectorAll('.day-check');
  const completedCount = document.querySelectorAll('.day-check.done').length;
  const totalCount = allDayChecks.length;

  UI.updateProgress(completedCount, totalCount);

  // Calculate total hours
  const completedDays = document.querySelectorAll('.day-item .day-check.done');
  let totalHours = 0;
  completedDays.forEach(checkbox => {
    const dayItem = checkbox.closest('.day-item');
    const hoursElement = dayItem.querySelector('.day-hours');
    if (hoursElement) {
      totalHours += Utils.parseHours(hoursElement.textContent);
    }
  });
  UI.updateHoursLogged(totalHours);

  // Update progress label
  const progressLabel = document.getElementById('progressLabel');
  if (progressLabel && PHASES.length > 0) {
    const currentPhase = PHASES.find(p => {
      const activePanel = document.querySelector('.tab-panel.active');
      return activePanel && activePanel.id === `panel-${p.id}`;
    }) || PHASES[0];
    
    progressLabel.textContent = `Week 1 of 78 • Phase ${currentPhase.id}: ${currentPhase.title}`;
  }

  // Update header progress
  const headerProgress = document.getElementById('headerProgress');
  if (headerProgress) {
    const percent = Utils.calcPercentage(completedCount, totalCount);
    headerProgress.textContent = `${percent}% Complete`;
  }
}

/**
 * Setup keyboard shortcuts
 */
function setupKeyboardShortcuts() {
  // Implement standard shortcuts
  const shortcuts = {
    's': () => Storage.downloadProgress(), // Ctrl+S to download
    'h': () => showHelp(), // ? to show help
    'e': () => exportData(), // Ctrl+E to export
    'l': () => clearProgress() // Ctrl+L to clear (with confirmation)
  };

  handleKeyboardShortcuts = (e) => {
    const char = String.fromCharCode(e.which).toLowerCase();
    
    if ((e.ctrlKey || e.metaKey) && shortcuts[char]) {
      e.preventDefault();
      shortcuts[char]();
    }

    // Tab navigation between phases
    if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      const activeTabs = document.querySelector('.tab-btn.active');
      const allTabs = document.querySelectorAll('.tab-btn');
      const currentIndex = Array.from(allTabs).indexOf(activeTabs);
      const nextIndex = (currentIndex - 1 + allTabs.length) % allTabs.length;
      allTabs[nextIndex].click();
    }
  };

  window.handleKeyboardShortcuts = handleKeyboardShortcuts;
}

/**
 * Show help/shortcuts
 */
function showHelp() {
  const helpText = `
  📚 Tech Mastery Tracker - Keyboard Shortcuts
  
  Ctrl+S - Download progress as JSON
  Ctrl+E - Export progress data
  Ctrl+L - Clear all progress (with confirmation)
  Shift+Tab - Previous phase
  Tab - Next phase
  `;
  
  alert(helpText);
}

/**
 * Export progress data
 */
function exportData() {
  const format = prompt('Export as: (j)son or (c)sv?', 'j');
  
  if (format === 'c') {
    exportAsCSV();
  } else {
    Storage.downloadProgress();
  }
}

/**
 * Export progress as CSV
 */
function exportAsCSV() {
  const completedDays = Storage.getCompletedDays();
  let csv = 'Day ID,Completed Date,Status\n';
  
  Object.entries(completedDays).forEach(([dayId, timestamp]) => {
    csv += `"${dayId}","${timestamp}","completed"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'tracker-progress.csv';
  link.click();
  URL.revokeObjectURL(url);
  
  Utils.showToast('✅ Progress exported as CSV');
}

/**
 * Clear all progress (with confirmation)
 */
function clearProgress() {
  if (confirm('⚠️ Clear all progress data? This cannot be undone.')) {
    Storage.clearAll();
    Storage.init();
    location.reload();
    Utils.showToast('🗑️ Progress cleared');
  }
}

/**
 * Autosave notification
 */
function showAutoSaveNotification() {
  const lastUpdated = Storage.getProgress()?.lastUpdated;
  if (lastUpdated) {
    const date = new Date(lastUpdated);
    console.log('Last auto-saved:', date.toLocaleTimeString());
  }
}

/**
 * Initialize when DOM is ready
 */
document.addEventListener('DOMContentLoaded', initTracker);

/**
 * Handle beforeunload to save progress
 */
window.addEventListener('beforeunload', () => {
  updateAllProgress();
  Storage.setProgress({});
});

// Export functions for testing
window.Tracker = {
  updateProgress: updateAllProgress,
  clearProgress: clearProgress,
  exportData: exportData,
  showHelp: showHelp,
  Storage: Storage,
  Utils: Utils
};
