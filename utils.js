/**
 * ═══════════════════════════════════════════════════════════════
 * UTILS - Utility functions for common operations
 * ═══════════════════════════════════════════════════════════════
 */

const Utils = {
  /**
   * Calculate percentage based on completed and total items
   */
  calcPercentage(completed, total) {
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  },

  /**
   * Format hours string (e.g., "5h" -> 5)
   */
  parseHours(hoursStr) {
    const match = hoursStr.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  },

  /**
   * Get phase color by phase ID
   */
  getPhaseColor(phaseId) {
    const colors = {
      1: '#6378ff', 2: '#00d4ff', 3: '#a855f7',
      4: '#10b981', 5: '#f59e0b', 6: '#ef4444'
    };
    return colors[phaseId] || '#6378ff';
  },

  /**
   * Get phase emoji by phase ID
   */
  getPhaseEmoji(phaseId) {
    const emojis = {
      1: '🌱', 2: '☁️', 3: '🤖',
      4: '⚙️', 5: '🚀', 6: '🏆'
    };
    return emojis[phaseId] || '📚';
  },

  /**
   * Debounce function execution
   */
  debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  },

  /**
   * Format week number and phase info
   */
  formatWeekLabel(weekNum, phaseLabel) {
    return `Week ${weekNum} of 78 • ${phaseLabel}`;
  },

  /**
   * Calculate total hours logged
   */
  calculateTotalHours(completedDaysData) {
    return completedDaysData.reduce((total, day) => {
      return total + Utils.parseHours(day.hours);
    }, 0);
  },

  /**
   * Check if day is completed
   */
  isDayCompleted(dayId) {
    const element = document.querySelector(`[data-day-id="${dayId}"]`);
    return element ? element.classList.contains('done') : false;
  },

  /**
   * Toggle element visibility
   */
  toggleVisibility(element, isVisible) {
    if (isVisible) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  },

  /**
   * Show toast notification
   */
  showToast(message, duration = 2000) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  },

  /**
   * Format number with commas
   */
  formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  /**
   * Get week info by week number
   */
  getWeekInfo(weekNum) {
    const phaseBoundaries = [
      { phase: 1, startWeek: 1, endWeek: 6 },
      { phase: 2, startWeek: 7, endWeek: 11 },
      { phase: 3, startWeek: 12, endWeek: 17 },
      { phase: 4, startWeek: 18, endWeek: 22 },
      { phase: 5, startWeek: 23, endWeek: 26 },
      { phase: 6, startWeek: 27, endWeek: 36 }
    ];
    
    return phaseBoundaries.find(p => weekNum >= p.startWeek && weekNum <= p.endWeek);
  },

  /**
   * Smooth scroll to element
   */
  scrollToElement(selector, offset = 100) {
    const element = document.querySelector(selector);
    if (element) {
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  },

  /**
   * Copy text to clipboard
   */
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      Utils.showToast('✅ Copied to clipboard!');
      return true;
    } catch {
      Utils.showToast('❌ Failed to copy');
      return false;
    }
  },

  /**
   * Generate unique ID
   */
  generateId(prefix = 'id') {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  },

  /**
   * Parse URL query parameters
   */
  getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  },

  /**
   * Log message with timestamp (development)
   */
  log(message, data = null) {
    if (window.DEBUG_MODE) {
      console.log(`[${new Date().toLocaleTimeString()}] ${message}`, data || '');
    }
  }
};
