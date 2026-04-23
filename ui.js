/**
 * ═══════════════════════════════════════════════════════════════
 * UI - DOM manipulation and UI state management
 * ═══════════════════════════════════════════════════════════════
 */

const UI = {
  /**
   * Render progress bar and stats
   */
  updateProgress(completed, total) {
    const percentage = Utils.calcPercentage(completed, total);
    const progressBar = document.getElementById('progressBar');
    const progressPct = document.getElementById('progressPct');
    const completedTasks = document.getElementById('completedTasks');
    const totalTasks = document.getElementById('totalTasks');

    if (progressBar) progressBar.style.width = percentage + '%';
    if (progressPct) progressPct.textContent = percentage + '%';
    if (completedTasks) completedTasks.textContent = completed;
    if (totalTasks) totalTasks.textContent = total;

    Storage.setProgress({
      completedTasks: completed,
      totalTasks: total,
      progressPercentage: percentage
    });
  },

  /**
   * Update streak display
   */
  updateStreak() {
    const streak = Storage.getStreak();
    const streakElement = document.getElementById('streakCount');
    if (streakElement) {
      streakElement.textContent = streak;
    }
  },

  /**
   * Update hours logged
   */
  updateHoursLogged(hours) {
    const hoursElement = document.getElementById('hoursLogged');
    if (hoursElement) {
      hoursElement.textContent = hours;
    }
  },

  /**
   * Render phase tabs
   */
  renderTabs(phases) {
    const tabsWrap = document.getElementById('tabsWrap');
    if (!tabsWrap) return;

    tabsWrap.innerHTML = phases.map((phase, index) => `
      <button 
        class="tab-btn ${index === 0 ? 'active' : ''}" 
        data-phase-id="${phase.id}"
        aria-selected="${index === 0}"
        role="tab"
      >
        ${phase.emoji} ${phase.label}
      </button>
    `).join('');

    // Add event listeners
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => UI.switchPhase(e.target.dataset.phaseId));
    });
  },

  /**
   * Switch phase tab
   */
  switchPhase(phaseId) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });

    // Hide all panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    // Activate selected tab and panel
    document.querySelector(`[data-phase-id="${phaseId}"]`).classList.add('active');
    document.querySelector(`[data-phase-id="${phaseId}"]`).setAttribute('aria-selected', 'true');
    document.getElementById(`panel-${phaseId}`).classList.add('active');

    Storage.setProgress({ currentPhase: phaseId });
  },

  /**
   * Render phase content
   */
  renderPhaseContent(phases) {
    const container = document.getElementById('phaseContent');
    if (!container) return;

    container.innerHTML = phases.map(phase => `
      <div id="panel-${phase.id}" class="tab-panel ${phase.id === 1 ? 'active' : ''}">
        ${UI.renderPhaseHeader(phase)}
        ${UI.renderWeekCards(phase)}
      </div>
    `).join('');
  },

  /**
   * Render phase header
   */
  renderPhaseHeader(phase) {
    return `
      <div class="phase-header">
        <div class="phase-badge" style="background: ${phase.color}">${phase.emoji}</div>
        <div class="phase-meta">
          <h3>${phase.title}</h3>
          <p>${phase.desc}</p>
          <div class="phase-chips">
            ${phase.chips.map(chip => `
              <span class="phase-chip" style="background: ${chip.color}22; color: ${chip.color}">
                ${chip.text}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Render week cards
   */
  renderWeekCards(phase) {
    return `
      <div class="weeks-container">
        ${phase.weeks_data.map((week, index) => `
          <div class="week-card" data-week-num="${week.num}">
            <div class="week-header" onclick="UI.toggleWeek(this)">
              <div class="week-num" style="background: ${Utils.getPhaseColor(phase.id)}22; color: ${Utils.getPhaseColor(phase.id)}">
                W${week.num}
              </div>
              <div class="week-title">
                <h4>${week.title}</h4>
                <p>${week.subtitle}</p>
              </div>
              <div class="week-progress">
                <span class="week-pct" data-week-pct="${week.num}">0%</span>
                <div class="week-bar">
                  <div class="week-bar-fill" data-week-bar="${week.num}" style="background: ${Utils.getPhaseColor(phase.id)}; width: 0%"></div>
                </div>
              </div>
              <span class="chevron">›</span>
            </div>
            <div class="day-list">
              ${week.days.map((day, dayIndex) => `
                <div class="day-item" data-day-id="phase-${phase.id}-week-${week.num}-day-${dayIndex + 1}" data-week-num="${week.num}" data-phase-id="${phase.id}">
                  <div class="day-item-header">
                    <div class="day-check" onclick="UI.toggleDay(event, this)"></div>
                    <div class="day-content">
                      <div class="day-header-row">
                        <span class="day-label">Day ${dayIndex + 1}</span>
                        <span class="day-title">${day.title}</span>
                      </div>
                      <div class="day-tags">
                        ${day.tags.map(tag => `<span class="day-tag tag-${tag}">${tag}</span>`).join('')}
                      </div>
                      <div class="day-desc">${day.desc}</div>
                      ${day.trick ? `<div class="day-trick">${day.trick}</div>` : ''}
                    </div>
                    <span class="day-hours">${day.hours}</span>
                    <span class="day-chevron">›</span>
                  </div>
                  <div class="day-expand-panel">
                    <div class="expand-grid">
                      <div class="expand-section full">
                        <div class="expand-sec-title">📋 Details</div>
                        <p style="color: var(--text-secondary); font-size: 0.8rem; line-height: 1.6;">${day.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  /**
   * Toggle week expansion
   */
  toggleWeek(element) {
    const card = element.closest('.week-card');
    card.classList.toggle('open');
  },

  /**
   * Toggle day completion
   */
  toggleDay(event, checkbox) {
    event.stopPropagation();
    const dayItem = checkbox.closest('.day-item');
    const dayId = dayItem.dataset.dayId;
    
    checkbox.classList.toggle('done');
    dayItem.classList.toggle('open');
    
    const isCompleted = checkbox.classList.contains('done');
    Storage.setDayCompleted(dayId, isCompleted);
    
    UI.updateWeekProgress(dayItem.dataset.weekNum, dayItem.dataset.phaseId);
    Storage.updateStreak();
    UI.updateStreak();
  },

  /**
   * Update week progress
   */
  updateWeekProgress(weekNum, phaseId) {
    const dayItems = document.querySelectorAll(`[data-week-num="${weekNum}"][data-phase-id="${phaseId}"]`);
    const completedCount = document.querySelectorAll(`[data-week-num="${weekNum}"][data-phase-id="${phaseId}"] .day-check.done`).length;
    const totalCount = dayItems.length;
    const percentage = Utils.calcPercentage(completedCount, totalCount);

    // Update week progress bar
    const weekBar = document.querySelector(`[data-week-bar="${weekNum}"]`);
    const weekPct = document.querySelector(`[data-week-pct="${weekNum}"]`);
    if (weekBar) weekBar.style.width = percentage + '%';
    if (weekPct) weekPct.textContent = percentage + '%';
  },

  /**
   * Render tricks grid
   */
  renderTricks() {
    const tricks = [
      { icon: '🧠', title: 'Feynman Technique', desc: 'Explain in plain English as if teaching a 10-year-old. Instant gap detector.' },
      { icon: '🃏', title: 'Spaced Repetition (Anki)', desc: '10 min/day reviewing flashcards. Defeats the forgetting curve.' },
      { icon: '🔨', title: 'Build To Learn', desc: 'Every concept has a mini-project. No tutorial hell.' },
      { icon: '🔁', title: 'Interleaving', desc: 'Mix topics daily (code + theory + project). 25% better retention.' },
      { icon: '⏱️', title: 'Pomodoro 25/5', desc: '25 min deep work, 5 min break. Repeat 4×, then 30 min break.' },
      { icon: '🎯', title: 'Outcome-First Learning', desc: 'Know WHAT job you\'re building for. 3× faster learning.' }
    ];

    const tricksGrid = document.getElementById('tricksGrid');
    if (!tricksGrid) return;

    tricksGrid.innerHTML = tricks.map(trick => `
      <div class="trick-card">
        <div class="trick-icon">${trick.icon}</div>
        <h4>${trick.title}</h4>
        <p>${trick.desc}</p>
      </div>
    `).join('');
  },

  /**
   * Render salary milestones
   */
  renderMilestones(phases) {
    const milestones = [
      { phase: 1, salary: '$40K', time: '6 weeks', emoji: '🌱' },
      { phase: 2, salary: '$70K', time: '11 weeks', emoji: '☁️' },
      { phase: 3, salary: '$95K', time: '17 weeks', emoji: '🤖' },
      { phase: 4, salary: '$125K', time: '22 weeks', emoji: '⚙️' },
      { phase: 5, salary: '$150K', time: '26 weeks', emoji: '🚀' },
      { phase: 6, salary: '$200K+', time: '36 weeks', emoji: '🏆' }
    ];

    const grid = document.getElementById('milestoneGrid');
    if (!grid) return;

    grid.innerHTML = milestones.map((m, i) => `
      <div class="milestone ${i === 0 ? 'unlocked' : ''}">
        <div class="milestone-phase" style="color: ${Utils.getPhaseColor(m.phase)};">${m.emoji} Phase ${m.phase}</div>
        <div class="milestone-title">Full-Stack Engineer</div>
        <div class="milestone-salary">${m.salary}</div>
        <div class="milestone-time">↓ ${m.time}</div>
        ${i > 0 ? '<div class="milestone-lock">🔒</div>' : ''}
      </div>
    `).join('');
  },

  /**
   * Render skills grid
   */
  renderSkills() {
    const skills = {
      Languages: ['Python', 'TypeScript', 'SQL', 'JavaScript', 'Go', 'Bash'],
      'AI/ML': ['PyTorch', 'LLMs', 'LangChain', 'RAG', 'HuggingFace'],
      'Cloud/DevOps': ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      'Data Engineering': ['Apache Spark', 'Kafka', 'Airflow', 'dbt'],
      'Web/Backend': ['React', 'FastAPI', 'Node.js', 'GraphQL'],
      'Soft Skills': ['System Design', 'GitHub', 'Agile/Scrum']
    };

    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    grid.innerHTML = Object.entries(skills).map(([category, tags]) => `
      <div class="skill-category">
        <h4>${category}</h4>
        <div class="skill-tags">
          ${tags.map(tag => `<span class="skill-tag hot">${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');
  },

  /**
   * Initialize all UI elements
   */
  init(phases) {
    this.renderTabs(phases);
    this.renderPhaseContent(phases);
    this.renderTricks();
    this.renderMilestones(phases);
    this.renderSkills();
    this.setupThemeToggle();
    this.setupSaveButton();
  },

  /**
   * Setup theme toggle
   */
  setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
      const currentTheme = Storage.getTheme();
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      Storage.setTheme(newTheme);
      themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
    });

    // Set initial icon
    const theme = Storage.getTheme();
    themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
  },

  /**
   * Setup save button
   */
  setupSaveButton() {
    const saveBtn = document.getElementById('saveBtn');
    if (!saveBtn) return;

    saveBtn.addEventListener('click', () => {
      Storage.setProgress({});
      Utils.showToast('💾 Progress saved!');
    });
  }
};
