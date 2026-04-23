# Tech Mastery Tracker - Refactored Version

> A day-by-day learning tracker for engineers going from zero to $150K+ in 18 months

## 🎯 What's New in This Version

This refactored version modernizes the codebase with:

✨ **Code Organization**
- Modular CSS split into logical files (base, layout, components, animations, responsive, theme)
- Modular JavaScript with clear separation of concerns (utils, storage, ui, tracker)
- Cleaner HTML with semantic structure and ARIA labels
- Better maintainability and scalability

📱 **Enhanced Responsiveness**
- Mobile-first design with optimized breakpoints
- Touch-friendly interactions
- Improved layouts for tablets and small phones
- Landscape and portrait optimizations

💾 **Data Persistence**
- LocalStorage integration for automatic progress saving
- Import/Export functionality (JSON, CSV)
- Auto-save every 30 seconds
- Streak tracking

🎨 **Theme Support**
- Dark/Light mode toggle
- System preference detection
- Custom theme variants
- High contrast mode support
- Respects `prefers-reduced-motion`

⌨️ **Accessibility**
- Full keyboard navigation
- ARIA labels and roles
- Screen reader support
- Focus indicators
- Semantic HTML

🚀 **Performance Optimizations**
- CSS animations respect user preferences
- Debounced scroll and resize handlers
- Efficient DOM updates
- Lazy-loaded content patterns

## 📁 Project Structure

```
project-root/
├── index.html              # Main HTML (clean, semantic)
├── base.css               # Core styles, variables, resets
├── layout.css             # Grid, containers, header layouts
├── components.css         # Cards, buttons, badges, forms
├── animations.css         # Keyframes, transitions
├── responsive.css         # Mobile/tablet/desktop breakpoints
├── theme.css              # Dark/light themes, accessibility
├── utils.js               # Utility functions (calc, parse, format)
├── storage.js             # LocalStorage management
├── ui.js                  # DOM manipulation, rendering
├── tracker.js             # Main app logic, initialization
├── tech_mastery_tracker.html  # Original file (legacy)
└── README.md              # This file
```

## 🚀 Getting Started

### Option 1: Use Refactored Version (Recommended)
Simply open `index.html` in your browser. All styles and scripts are loaded automatically.

### Option 2: Use Original Version
Open `tech_mastery_tracker.html` for the original single-file version.

### Running Locally
```bash
# No build required! Just serve the files:
python -m http.server 8000
# or
npx http-server
```

Visit `http://localhost:8000`

## 💾 Features

### Progress Tracking
- ✅ Mark days as completed
- 📊 Real-time progress calculation
- 🔥 Streak tracking
- ⏱️ Hours logged visualization
- 📈 Weekly and phase progress bars

### Data Management
```javascript
// Download progress as JSON
Storage.downloadProgress()

// Export as CSV
tracker.exportData()

// Import from previous export
Storage.importProgress(data)

// Clear all data (with confirmation)
tracker.clearProgress()
```

### Keyboard Shortcuts
- `Ctrl+S` - Download progress
- `Ctrl+E` - Export data
- `Ctrl+L` - Clear progress (with confirmation)
- `Shift+Tab` - Previous phase
- `Tab` - Next phase

### Theme Support
```javascript
// Toggle theme
Storage.setTheme('light') // or 'dark'

// Get current theme
const theme = Storage.getTheme()

// Apply theme immediately
Storage.applyTheme('light')
```

## 🎨 Customization

### Change Color Scheme
Edit CSS variables in `base.css`:
```css
:root {
  --accent-blue: #6378ff;
  --accent-cyan: #00d4ff;
  --accent-violet: #a855f7;
  /* ... etc */
}
```

### Add New Phases
Modify the PHASES data structure in `tracker.js` or inject from HTML:
```javascript
PHASES = [
  {
    id: 1,
    label: 'Phase 1',
    title: 'Foundations',
    weeks_data: [/* ... */]
  }
]
```

### Customize Tricks
Edit the `tricks` array in `ui.js`:
```javascript
const tricks = [
  { icon: '🧠', title: 'Your Trick', desc: 'Description' }
]
```

## 📊 API Reference

### Storage Module
```javascript
Storage.init()                    // Initialize storage
Storage.setProgress(data)         // Save progress
Storage.getProgress()             // Get progress
Storage.setDayCompleted(id, bool) // Mark day done
Storage.getCompletedDays()        // Get all completed days
Storage.setTheme(theme)           // Change theme
Storage.exportProgress()           // Export data
Storage.importProgress(data)      // Import data
Storage.downloadProgress()        // Download as JSON
Storage.getStorageSize()          // Get storage size
```

### UI Module
```javascript
UI.init(phases)                   // Initialize UI
UI.updateProgress(completed, total)
UI.updateStreak()
UI.updateHoursLogged(hours)
UI.switchPhase(phaseId)
UI.toggleDay(event, checkbox)
UI.renderPhaseContent(phases)
```

### Utils Module
```javascript
Utils.calcPercentage(completed, total)
Utils.parseHours(hoursStr)        // "5h" -> 5
Utils.getPhaseColor(phaseId)
Utils.formatWeekLabel(weekNum, phaseLabel)
Utils.showToast(message, duration)
Utils.debounce(func, delay)
Utils.copyToClipboard(text)
Utils.generateId(prefix)
```

## 🔒 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome  | ✅ Full | Latest versions |
| Firefox | ✅ Full | Latest versions |
| Safari  | ✅ Full | iOS 13+ |
| Edge    | ✅ Full | Latest versions |
| IE 11   | ❌ No   | Use original version |

### Required Features
- ES6+ (Arrow functions, const/let, Destructuring)
- CSS Grid & Flexbox
- CSS Custom Properties
- LocalStorage API
- Fetch API (for future features)

## 🎯 Migration from Original

The refactored version is **100% compatible** with the original. All data transfers seamlessly:

1. **Data is preserved** - LocalStorage works across both versions
2. **Visual design unchanged** - Same look and feel
3. **No breaking changes** - All features work identically
4. **Backward compatible** - Original file still works

### Manual Migration
```javascript
// Export from either version
const data = Storage.exportProgress()

// Import to the other version
Storage.importProgress(data)
```

## 🚧 Upcoming Features

Phase 2 improvements (in progress):
- 📊 Analytics dashboard with charts
- 🎨 Custom theme builder
- 🔔 Desktop notifications
- 📱 PWA (Progressive Web App)
- 🌍 Multi-language support
- 🤝 Collaboration features
- 📧 Email progress reports

## 🐛 Troubleshooting

### Progress not saving?
```javascript
// Check storage status
console.log(Storage.getProgress())

// Force save
Storage.setProgress({ /* data */ })

// Check browser storage limit
console.log(Storage.getStorageSize())
```

### Styles not loading?
- Ensure all CSS files are in the same directory as `index.html`
- Check browser console for 404 errors
- Clear browser cache (Ctrl+Shift+Delete)

### LocalStorage disabled?
- Private/Incognito mode doesn't support LocalStorage
- Some browsers restrict it in certain contexts
- Fallback to in-memory storage (data lost on refresh)

## 📝 File Descriptions

| File | Purpose | Lines |
|------|---------|-------|
| base.css | CSS variables, resets, typography | 180 |
| layout.css | Header, containers, hero section | 200 |
| components.css | Cards, buttons, modals, forms | 350 |
| animations.css | Keyframes, transitions, interactions | 450 |
| responsive.css | Mobile breakpoints, print styles | 350 |
| theme.css | Dark/light modes, accessibility | 250 |
| utils.js | 20 utility functions | 200 |
| storage.js | LocalStorage API wrapper | 250 |
| ui.js | DOM rendering and updates | 400 |
| tracker.js | Main logic and initialization | 300 |

**Total:** ~2,930 lines of organized, well-commented code

## 🤝 Contributing

Want to improve this project? Areas needing help:
- [ ] Add unit tests
- [ ] Improve mobile UX
- [ ] Add animations Polish
- [ ] Create design system docs
- [ ] Optimize bundle size
- [ ] Add analytics integration
- [ ] Create mobile app version

## 📄 License

MIT License - Feel free to use, modify, and distribute

## 🙏 Credits

- **Original Design**: @creator
- **Refactor**: Code modernization and modularization
- **Data**: 10,000+ job description analysis

## 📞 Support

- 📖 Read the code - it's self-documented
- 🐛 Found a bug? Check browser console for errors
- 💡 Have a feature idea? Open an issue
- 🤔 Questions? Check the API reference above

---

**Happy Learning!** Remember: Consistency beats intensity. 30 hours/week for 18 months will change your life. 🚀
