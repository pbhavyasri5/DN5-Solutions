# Community Event Portal - Quick Start Guide

## 🚀 Getting Started

### 1. Open the Application
Simply open `index.html` in your web browser. No server or installation required!

```
- Chrome/Chromium
- Firefox  
- Safari
- Edge
```

### 2. Browse the Application

**Navigation Menu:**
- **Home** - Welcome section with special offer
- **Events** - View all events with category filters
- **Gallery** - Browse event images (double-click to enlarge)
- **Register** - Sign up for events
- **Feedback** - Share your experience
- **Video** - Watch promotional content
- **Location** - Find events near you
- **Contact** - Get in touch with us
- **Help** - Opens in new window with detailed instructions

### 3. Key Features to Try

#### Event Registration
1. Click "Register" in the navigation
2. Fill in your details
3. Select an event from the dropdown
4. Specify number of attendees
5. Click "Register Now"

#### Event Feedback
1. Scroll to "Feedback" section
2. Share your experience about an attended event
3. Type your feedback (the character counter shows progress)
4. Click "Submit Feedback"

#### Find Nearby Events
1. Go to "Location" section
2. Click "Find Nearby Events"
3. Allow browser to access your location
4. Your coordinates will be displayed

#### Event Gallery
1. Go to "Gallery" section
2. Double-click any image to enlarge it
3. Double-click again to close

#### Preferences
1. Use category filter buttons in Events section
2. Your preference is automatically saved
3. Next visit will restore your preference
4. Click "Clear Preferences" to reset

## 📁 Project Files

```
Community Event Portal/
│
├── index.html              # Main application (open this file!)
├── help.html               # Help page (opens in new tab)
├── styles.css              # All styling and responsive design
├── main.js                 # All interactive features
├── events.json             # Sample event data
│
├── images/                 # Event gallery images
│   ├── event1.svg         # Community Cleanup Drive
│   ├── event2.svg         # Food Festival
│   ├── event3.svg         # Tech Meetup
│   ├── event4.svg         # Music Night
│   ├── event5.svg         # Art Exhibition
│   └── event6.svg         # Sports Day
│
├── videos/                 # Promotional videos
│   └── community-event.mp4 # Placeholder (replace with real video)
│
├── README.md               # Full project documentation
├── REQUIREMENT_MAPPING.md  # Exercise requirement checklist
└── QUICK_START.md          # This file
```

## 🎯 What You Can Do

### View & Filter Events
- All 6 sample events displayed with full details
- Filter by category: Community, Food, Technology, Entertainment, Art, Sports
- Category selection is remembered for future visits

### Register for Events
- Fill out registration form
- Phone number validation on blur
- Select from dropdown list of all events
- Get confirmation when submitted

### Submit Feedback
- Rate events 1-5 stars
- Write detailed feedback (up to 500 characters)
- Real-time character counter
- Warning if you try to leave with unsaved feedback

### View Event Gallery
- Professional table layout with 6 images
- Double-click to enlarge any image
- Colorful captions describing each event

### Use Geolocation
- Click "Find Nearby Events" button
- Grant location permission when prompted
- See your latitude and longitude
- High accuracy location tracking

### Watch Video
- Video element with full controls
- "Video ready to play" message appears when loaded

## 💡 Technical Implementation

This project demonstrates all beginner concepts:

**HTML5**
- Semantic structure (header, nav, main, footer)
- Forms with validation
- Image gallery with table layout
- Video element with controls
- Geolocation section

**CSS3**
- Multiple selector types
- Color gradients and backgrounds
- Google Fonts integration
- Multi-column layouts
- Complete responsive design
- Pseudo-class styling (:hover, :active, :visited)

**Bootstrap 5**
- Responsive grid system
- Navigation bar with collapse
- Bootstrap cards
- Forms and buttons
- Modal dialogs
- Accordion components
- Icons from Bootstrap Icons

**JavaScript**
- Form handling and validation
- localStorage for preferences
- sessionStorage for temporary data
- Fetch API to load events.json
- Geolocation API
- DOM manipulation
- Event handlers (click, blur, keydown, dblclick)

**jQuery**
- Fade effects
- Event binding

## 🔧 Customization Tips

### Add More Events
1. Open `events.json`
2. Add new event object following the same format
3. Events will automatically display

Example:
```json
{
    "name": "Your Event Name",
    "date": "2024-08-01",
    "category": "Category Name",
    "location": "Location Address",
    "description": "Event description here"
}
```

### Change Colors
Edit the CSS variables in `styles.css`:
- Primary color: `#667eea`
- Accent color: `#FF6B6B`
- Secondary: `#4ECDC4`

### Replace Sample Images
1. Replace SVG files in `/images/` folder with your JPG/PNG images
2. Keep the same filenames (event1, event2, etc.)
3. Images display in gallery and event cards

### Replace Video
1. Replace `/videos/community-event.mp4` with your MP4 file
2. Ensure file is named `community-event.mp4`
3. Video will play in the Video section

## ❓ Troubleshooting

**Events not showing?**
- Make sure `events.json` is in the same folder as `index.html`
- Check browser console (F12) for errors
- Ensure JSON format is valid

**Styles not applying?**
- Verify `styles.css` is in the same folder
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh the page

**Help page not opening?**
- Ensure `help.html` is in the same folder
- Check browser popup settings

**Geolocation not working?**
- Grant location permission when prompted
- Check browser privacy settings
- Only works with HTTPS (or localhost for testing)

**Images not showing?**
- Check that `/images/` folder exists
- Verify all 6 event SVG files are present
- Replace SVG files with actual images if needed

## 📚 Learning Points

This project teaches:
- HTML5 semantic markup
- CSS3 styling and responsive design
- Bootstrap framework basics
- JavaScript fundamentals
- Form handling and validation
- API usage (Fetch, Geolocation)
- Local storage and session storage
- jQuery basics

## 🎓 Student Notes

This is a realistic beginner project that:
- Uses only HTML5, CSS3, Bootstrap 5, and JavaScript
- Avoids advanced patterns and frameworks
- Includes proper form validation
- Demonstrates localStorage usage
- Shows how to fetch and display dynamic data
- Implements responsive design
- Uses semantic HTML structure

Perfect for a portfolio or to demonstrate learning!

---

**Happy exploring! 🎉**
