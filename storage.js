/**
 * ═══════════════════════════════════════════════════════════════
 * STORAGE - LocalStorage management for data persistence
 * ═══════════════════════════════════════════════════════════════
 */

const Storage = {
  // Storage keys
  KEYS: {
    PROGRESS: 'tracker_progress',
    SETTINGS: 'tracker_settings',
    LAST_UPDATED: 'tracker_last_updated',
    THEME: 'tracker_theme',
    COMPLETED_DAYS: 'tracker_completed_days',
    STREAK: 'tracker_streak'
  },

  /**
   * Initialize storage with default values
   */
  init() {
    if (!this.exists(this.KEYS.PROGRESS)) {
      this.setProgress({
        completedTasks: 0,
        totalTasks: 0,
        progressPercentage: 0,
        completedWeeks: {},
        streak: 0
      });
    }

    if (!this.exists(this.KEYS.SETTINGS)) {
      this.setSettings({
        theme: this.getSystemTheme(),
        notifications: true,
        autoSave: true
      });
    }
  },

  /**
   * Get system theme preference
   */
  getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  },

  /**
   * Save progress data
   */
  setProgress(data) {
    const progress = {
      ...this.getProgress(),
      ...data,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(progress));
    localStorage.setItem(this.KEYS.LAST_UPDATED, new Date().toISOString());
    Utils.log('Progress saved', progress);
  },

  /**
   * Get progress data
   */
  getProgress() {
    const data = localStorage.getItem(this.KEYS.PROGRESS);
    return data ? JSON.parse(data) : null;
  },

  /**
   * Save individual day completion
   */
  setDayCompleted(dayId, completed = true) {
    const completedDays = this.getCompletedDays();
    if (completed) {
      completedDays[dayId] = new Date().toISOString();
    } else {
      delete completedDays[dayId];
    }
    localStorage.setItem(this.KEYS.COMPLETED_DAYS, JSON.stringify(completedDays));
    this.updateStreak();
  },

  /**
   * Get completed days
   */
  getCompletedDays() {
    const data = localStorage.getItem(this.KEYS.COMPLETED_DAYS);
    return data ? JSON.parse(data) : {};
  },

  /**
   * Check if day is completed
   */
  isDayCompleted(dayId) {
    const completedDays = this.getCompletedDays();
    return dayId in completedDays;
  },

  /**
   * Update streak based on completed days
   */
  updateStreak() {
    const completedDays = this.getCompletedDays();
    let streak = 0;
    let checkDate = new Date();

    while (true) {
      const dateStr = checkDate.toISOString().split('T')[0];
      const found = Object.values(completedDays).some(timestamp => {
        return timestamp.startsWith(dateStr);
      });

      if (found) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    localStorage.setItem(this.KEYS.STREAK, JSON.stringify(streak));
    return streak;
  },

  /**
   * Get current streak
   */
  getStreak() {
    const data = localStorage.getItem(this.KEYS.STREAK);
    return data ? JSON.parse(data) : 0;
  },

  /**
   * Save settings
   */
  setSettings(settings) {
    const current = this.getSettings();
    const merged = { ...current, ...settings };
    localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(merged));
    Utils.log('Settings saved', merged);
  },

  /**
   * Get settings
   */
  getSettings() {
    const data = localStorage.getItem(this.KEYS.SETTINGS);
    return data ? JSON.parse(data) : {};
  },

  /**
   * Set theme preference
   */
  setTheme(theme) {
    this.setSettings({ theme });
    this.applyTheme(theme);
  },

  /**
   * Apply theme to document
   */
  applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  },

  /**
   * Get theme
   */
  getTheme() {
    const settings = this.getSettings();
    return settings.theme || this.getSystemTheme();
  },

  /**
   * Check if item exists in storage
   */
  exists(key) {
    return localStorage.getItem(key) !== null;
  },

  /**
   * Clear specific key
   */
  clear(key) {
    localStorage.removeItem(key);
    Utils.log('Cleared storage key', key);
  },

  /**
   * Clear all tracker data
   */
  clearAll() {
    Object.values(this.KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
    Utils.log('All tracker data cleared');
  },

  /**
   * Export progress as JSON
   */
  exportProgress() {
    const progress = this.getProgress();
    const completedDays = this.getCompletedDays();
    const settings = this.getSettings();
    
    return {
      progress,
      completedDays,
      settings,
      exportedAt: new Date().toISOString()
    };
  },

  /**
   * Import progress from JSON
   */
  importProgress(data) {
    try {
      if (data.progress) this.setProgress(data.progress);
      if (data.completedDays) {
        localStorage.setItem(this.KEYS.COMPLETED_DAYS, JSON.stringify(data.completedDays));
      }
      if (data.settings) this.setSettings(data.settings);
      Utils.log('Progress imported successfully');
      return true;
    } catch (error) {
      console.error('Import failed:', error);
      Utils.showToast('❌ Failed to import progress');
      return false;
    }
  },

  /**
   * Download progress as JSON file
   */
  downloadProgress(filename = 'tracker-progress.json') {
    const data = this.exportProgress();
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
    Utils.showToast('✅ Progress downloaded');
  },

  /**
   * Get storage size (estimated)
   */
  getStorageSize() {
    let size = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        size += localStorage[key].length + key.length;
      }
    }
    return (size / 1024).toFixed(2) + ' KB';
  },

  /**
   * Initialize storage on load
   */
  onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }
};

// Auto-initialize storage
Storage.onReady(() => {
  Storage.init();
  Storage.applyTheme(Storage.getTheme());
});
