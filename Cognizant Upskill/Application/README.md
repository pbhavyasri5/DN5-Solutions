# Community Event Portal

A beginner-level web application for discovering and registering for local community events.

## Project Structure

```
project/
├── index.html              # Main application page
├── help.html               # Help and support page
├── styles.css              # External CSS stylesheet
├── main.js                 # JavaScript functionality
├── events.json             # Sample event data
├── images/                 # Event gallery images (SVG placeholders)
│   ├── event1.svg
│   ├── event2.svg
│   ├── event3.svg
│   ├── event4.svg
│   ├── event5.svg
│   └── event6.svg
└── videos/                 # Promotional videos
    └── community-event.mp4 # Placeholder for video file
```

## Features

### Core Functionality
- **View Events**: Browse upcoming community events with details
- **Event Filtering**: Filter events by category
- **Event Registration**: Register for events with personal information
- **Event Feedback**: Submit feedback and ratings for attended events
- **Gallery**: View images from past events with zoom functionality
- **Location Services**: Find nearby events using geolocation
- **Preferences**: Save and restore event category preferences

### Technical Features
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Form Validation**: Phone number validation and character counting
- **Data Persistence**: localStorage and sessionStorage usage
- **Dynamic Content**: Events loaded from JSON and displayed dynamically
- **Bootstrap Integration**: Complete Bootstrap 5 implementation
- **jQuery Effects**: Fade-in/fade-out animations
- **Geolocation**: Request and display user coordinates

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (Vanilla)
- jQuery
- Bootstrap Icons

## Getting Started

1. Open `index.html` in a web browser
2. Browse available events in the Events section
3. Use filters to find events by category
4. Click "View Details" on any event to see more information
5. Register for events using the Registration form
6. Submit feedback about attended events
7. Use the Location button to find events near you
8. Check the Help page for detailed instructions

## Sample Events

The application includes 6 sample events:

1. Community Cleanup Drive - Community
2. Food Festival - Food
3. Tech Meetup - Technology
4. Music Night - Entertainment
5. Art Exhibition - Art
6. Sports Day - Sports

## Notes for Developers

- This project demonstrates beginner-level HTML5, CSS3, Bootstrap, and JavaScript concepts
- No backend or database is required - events are stored in events.json
- Images are currently SVG placeholders - replace with actual JPG/PNG files for production
- Video placeholder is included - replace with actual MP4 file for working demo
- All form data is stored in session/local storage only

## Features Implemented

### HTML5
- Semantic HTML structure (header, nav, main, footer)
- Forms with various input types
- Video element with controls
- Image gallery with table layout
- Geolocation section

### CSS3
- Multiple selector types (element, class, ID, group)
- Color and gradient backgrounds
- Google Font integration
- Responsive design with media queries
- Box model styling
- Multi-column layout
- Link pseudo-classes

### Bootstrap 5
- Responsive grid system
- Navbar with collapse
- Cards component
- Forms and buttons
- Modal dialog
- Accordion component
- Flex utilities
- Spacing utilities
- Bootstrap Icons

### JavaScript
- Variables and operators
- Functions and function calls
- Array methods (map, filter, push)
- Object manipulation
- DOM manipulation with querySelector, createElement, appendChild
- Event handling (click, change, blur, dblclick, keydown)
- Form validation
- localStorage and sessionStorage
- Geolocation API
- Fetch API with promises
- Try-catch error handling

### jQuery
- Event handlers (click)
- Effects (fadeIn, fadeOut)

## Customization

To customize this application:

1. **Add Events**: Edit `events.json` to add or modify events
2. **Change Colors**: Update color variables in `styles.css`
3. **Modify Layout**: Edit Bootstrap grid classes in `index.html`
4. **Add Features**: Extend functionality in `main.js`

## Browser Support

- Chrome/Chromium
- Firefox
- Safari
- Edge

Requires modern browser with ES6 support and Geolocation API.

## License

This is a student project created for educational purposes.
