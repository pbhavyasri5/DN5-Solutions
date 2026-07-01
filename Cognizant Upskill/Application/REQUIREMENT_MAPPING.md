# Community Event Portal - Requirement Mapping Table

## HTML5 REQUIREMENTS

| Exercise | Requirement | Where Implemented |
|----------|-------------|-------------------|
| HTML5-001 | HTML5 base template | index.html - DOCTYPE, lang attribute, meta tags |
| HTML5-002 | Semantic HTML structure | index.html - header, nav, main, footer elements |
| HTML5-003 | Header | index.html - `<header>` tag with welcome banner |
| HTML5-004 | Navigation | index.html - `<nav>` with navbar |
| HTML5-005 | Main content | index.html - `<main>` tag wrapping all content sections |
| HTML5-006 | Footer | index.html - `<footer>` with contact info and links |
| HTML5-007 | Internal navigation links | index.html - navbar with href="#home", "#events", "#gallery", etc. |
| HTML5-008 | External help page link | index.html - Help link opens help.html in new tab |
| HTML5-009 | Welcome banner | index.html - Section id="home" with welcome message |
| HTML5-010 | ID and class usage | index.html, styles.css - Multiple IDs and classes throughout |
| HTML5-011 | Inline styled special offer | index.html - Special offer text with inline style attribute |
| HTML5-012 | Event image gallery (table) | index.html - Gallery section with `<table>` layout |
| HTML5-013 | Gallery - 2 rows, 3 columns | index.html - Table with 2 `<tr>` and 3 `<td>` per row |
| HTML5-014 | Gallery - 6 images with src, alt, title | index.html - All 6 images have src, alt, title attributes |
| HTML5-015 | Image captions | index.html - `<figcaption>` under each image |
| HTML5-016 | Double-click image enlarge | main.js - ondblclick event listener for gallery images |
| HTML5-017 | Video element with controls | index.html - `<video>` with controls and `<source>` |
| HTML5-018 | oncanplay event | main.js - Video.oncanplay displays "Video ready to play" |
| HTML5-019 | Event registration form | index.html - Form with multiple input fields |
| HTML5-020 | Event feedback form | index.html - Form with textarea and validation |
| HTML5-021 | Geolocation section | index.html - Section with button for location access |
| HTML5-022 | window.onbeforeunload warning | main.js - Warns if feedback form has unsaved data |

## CSS REQUIREMENTS

| Exercise | Requirement | Where Implemented |
|----------|-------------|-------------------|
| CSS-001 | Inline CSS | index.html - Special offer text with style attribute |
| CSS-002 | Internal CSS | index.html - `<style>` tag in head |
| CSS-003 | External CSS | styles.css - External stylesheet |
| CSS-004 | Universal selector | styles.css - `*` selector for reset |
| CSS-005 | Element selector | styles.css - body, header, nav, footer, h1, h2, p, table |
| CSS-006 | Class selector | styles.css - .event-card, .gallery-image, etc. |
| CSS-007 | ID selector | styles.css - #home, #events, #gallery, #registration, etc. |
| CSS-008 | Group selector | styles.css - Multiple selectors separated by commas |
| CSS-009 | HEX colors | styles.css - #FF6B6B, #4ECDC4, #45B7D1, etc. |
| CSS-010 | RGBA colors | styles.css - rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.5) |
| CSS-011 | Background image | styles.css - Hero section background image |
| CSS-012 | Fallback background color | styles.css - Fallback color with background image |
| CSS-013 | Linear gradient | styles.css - Multiple linear-gradient backgrounds |
| CSS-014 | Google Font | styles.css - @import and font-family: 'Poppins' |
| CSS-015 | font-family | styles.css - Multiple font-family declarations |
| CSS-016 | font-size | styles.css - Various font sizes (12px to 48px) |
| CSS-017 | font-style | styles.css - italic for certain elements |
| CSS-018 | font-weight | styles.css - 300, 400, 600, 700, 900 weights |
| CSS-019 | text-align | styles.css - center, left, right alignments |
| CSS-020 | text-transform | styles.css - uppercase, lowercase, capitalize |
| CSS-021 | letter-spacing | styles.css - Applied to headings |
| CSS-022 | line-height | styles.css - Various line-height values |
| CSS-023 | :link pseudo-class | styles.css - Styling unvisited links |
| CSS-024 | :visited pseudo-class | styles.css - Styling visited links |
| CSS-025 | :hover pseudo-class | styles.css - Hover effects on links and buttons |
| CSS-026 | :active pseudo-class | styles.css - Active state styling |
| CSS-027 | list-style-type | styles.css - none for nav, disc for other lists |
| CSS-028 | list-style-position | styles.css - inside and outside positioning |
| CSS-029 | Navigation without bullets | styles.css - .navbar-nav list style none |
| CSS-030 | Table border | styles.css - Gallery table border styling |
| CSS-031 | Table padding | styles.css - td padding |
| CSS-032 | border-collapse | styles.css - Collapsing table borders |
| CSS-033 | Table centered text | styles.css - text-align center for table cells |
| CSS-034 | Table zebra striping | styles.css - Alternating row colors |
| CSS-035 | margin | styles.css - Multiple margin values throughout |
| CSS-036 | padding | styles.css - Multiple padding values throughout |
| CSS-037 | border | styles.css - Borders on various elements |
| CSS-038 | outline | styles.css - Focus outline styling |
| CSS-039 | column-count | styles.css - Community bulletin .bulletin-section |
| CSS-040 | column-gap | styles.css - Community bulletin column gap |
| CSS-041 | column-rule | styles.css - Community bulletin column rule |
| CSS-042 | Media query @media (max-width: 768px) | styles.css - All responsive design rules |
| CSS-043 | Mobile: Stack navigation | styles.css - Flex-direction: column for mobile nav |
| CSS-044 | Mobile: Reduce image sizes | styles.css - Max-width adjustments for mobile |
| CSS-045 | Mobile: Reduce font sizes | styles.css - Smaller font sizes for mobile |

## BOOTSTRAP REQUIREMENTS

| Exercise | Requirement | Where Implemented |
|----------|-------------|-------------------|
| BS-001 | container | index.html - Multiple `<div class="container">` |
| BS-002 | row | index.html - Multiple `<div class="row">` |
| BS-003 | col classes | index.html - col-md-3, col-md-9, col-12, col-md-6, col-lg-4 |
| BS-004 | Responsive grid 3-column | index.html - Event cards with col-lg-4 |
| BS-005 | Mobile stacked grid | index.html - col-12 for mobile stacking |
| BS-006 | Tablet 2-column grid | index.html - col-md-6 for tablet view |
| BS-007 | Desktop 3-column grid | index.html - col-lg-4 for desktop |
| BS-008 | Sidebar col-md-3 | index.html - Filters sidebar in events section |
| BS-009 | Content col-md-9 | index.html - Event cards in col-md-9 |
| BS-010 | Four equal columns | index.html - Contact section with 4 equal cols |
| BS-011 | d-flex | styles.css, index.html - Flex layout utility |
| BS-012 | flex-column | index.html - Card layouts use flex-column |
| BS-013 | flex-md-row | index.html - Events section uses flex-md-row |
| BS-014 | justify-content-center | index.html - Multiple sections centered |
| BS-015 | justify-content-between | index.html - Navigation and footer elements |
| BS-016 | align-items-center | index.html - Vertical centering throughout |
| BS-017 | display-1 | index.html - Welcome section heading |
| BS-018 | lead | index.html - Welcome section subtext |
| BS-019 | text-muted | index.html - Secondary text styling |
| BS-020 | fw-bold | index.html - Bold event titles |
| BS-021 | text-uppercase | index.html - Category badges |
| BS-022 | text-lowercase | index.html - Some text transformations |
| BS-023 | text-capitalize | index.html - Capitalize button text |
| BS-024 | form-control | index.html - Form inputs |
| BS-025 | form-check | index.html - Checkbox styling |
| BS-026 | input-group | index.html - Grouped inputs in forms |
| BS-027 | form-floating | index.html - Floating labels on forms |
| BS-028 | btn-primary | index.html - Register, Submit buttons |
| BS-029 | btn-secondary | index.html - Secondary actions |
| BS-030 | btn-outline-primary | index.html - Toggle buttons |
| BS-031 | btn-outline-success | index.html - Success-styled buttons |
| BS-032 | btn-group | index.html - Category filter buttons |
| BS-033 | Responsive navbar | index.html - Bootstrap navbar with collapse |
| BS-034 | nav-tabs | index.html - Event details tabs |
| BS-035 | nav-pills | index.html - Category selection pills |
| BS-036 | card | index.html - Event cards with card class |
| BS-037 | card-img-top | index.html - Event images in cards |
| BS-038 | card-body | index.html - Event text content in cards |
| BS-039 | card-title | index.html - Event names as card titles |
| BS-040 | m-3 | index.html - Margin spacing utility |
| BS-041 | mt-4 | index.html - Top margin utilities |
| BS-042 | p-2 | index.html - Padding utilities |
| BS-043 | py-5 | index.html - Vertical padding utilities |
| BS-044 | bg-primary | index.html - Background colors |
| BS-045 | bg-warning | index.html - Warning backgrounds |
| BS-046 | bg-gradient | index.html - Gradient backgrounds |
| BS-047 | bg-dark | index.html - Dark backgrounds |
| BS-048 | text-white | index.html - White text on dark backgrounds |
| BS-049 | d-none | index.html - Hidden elements |
| BS-050 | d-md-block | index.html - Show on medium and up |
| BS-051 | d-lg-flex | index.html - Flex on large screens |
| BS-052 | border | index.html - Border utility classes |
| BS-053 | border-primary | index.html - Colored borders |
| BS-054 | border-3 | index.html - Thick borders |
| BS-055 | rounded-circle | index.html - Circular images/elements |
| BS-056 | rounded-pill | index.html - Pill-shaped buttons |
| BS-057 | shadow | index.html - Card shadows |
| BS-058 | shadow-lg | index.html - Large shadows |
| BS-059 | position-fixed footer | index.html - Footer with fixed positioning |
| BS-060 | position-relative | index.html - Position context for badges |
| BS-061 | position-absolute badge | index.html - Positioned badges on cards |
| BS-062 | Facebook icon | index.html - Bootstrap icon in footer |
| BS-063 | Instagram icon | index.html - Bootstrap icon in footer |
| BS-064 | Twitter icon | index.html - Bootstrap icon in footer |
| BS-065 | Icon-only button | index.html - Social media icon button |
| BS-066 | Modal component | index.html, main.js - Event details modal |
| BS-067 | Accordion component | index.html, main.js - FAQ accordion |

## JAVASCRIPT REQUIREMENTS

| Exercise | Requirement | Where Implemented |
|----------|-------------|-------------------|
| JS-001 | console.log() | main.js - Multiple logging statements |
| JS-002 | alert() | main.js - User confirmations |
| JS-003 | variables | main.js - let, const declarations throughout |
| JS-004 | operators | main.js - Arithmetic, logical, comparison operators |
| JS-005 | template literals | main.js - String interpolation with backticks |
| JS-006 | if else | main.js - Multiple conditional statements |
| JS-007 | loops | main.js - for, forEach loops |
| JS-008 | try catch | main.js - Error handling in fetch |
| JS-009 | addEvent() function | main.js - Function to add new events |
| JS-010 | registerUser() function | main.js - Function to handle registration |
| JS-011 | filterEventsByCategory() function | main.js - Function to filter events |
| JS-012 | Array push() | main.js - Adding items to arrays |
| JS-013 | Array map() | main.js - Transforming event data |
| JS-014 | Array filter() | main.js - Filtering events by category |
| JS-015 | Objects | main.js - Event objects in events.json |
| JS-016 | Object methods | main.js - Methods on event objects |
| JS-017 | Object.entries() | main.js - Converting object to entries |
| JS-018 | querySelector() | main.js - DOM selection throughout |
| JS-019 | createElement() | main.js - Creating new DOM elements |
| JS-020 | appendChild() | main.js - Adding elements to DOM |
| JS-021 | onclick event | index.html, main.js - Click event handlers |
| JS-022 | onchange event | main.js - Select/input change handlers |
| JS-023 | onblur event | main.js - Phone validation on blur |
| JS-024 | ondblclick event | main.js - Double-click image enlarge |
| JS-025 | keydown event | main.js - Character counter on keydown |
| JS-026 | Phone validation | main.js - Regex phone validation |
| JS-027 | Character counter | main.js - Feedback form character counter |
| JS-028 | Submit confirmation | main.js - Confirmation dialog on submit |
| JS-029 | localStorage | main.js - Saving user preferences |
| JS-030 | sessionStorage | main.js - Session-specific data |
| JS-031 | Restore preference on reload | main.js - Load preferences from storage |
| JS-032 | Clear Preferences button | index.html, main.js - Button to clear saved preferences |
| JS-033 | navigator.geolocation | main.js - Getting user location |
| JS-034 | High accuracy geolocation | main.js - enableHighAccuracy: true option |
| JS-035 | Geolocation error handling | main.js - Error callback for denied permission |
| JS-036 | Geolocation timeout | main.js - Timeout handling |
| JS-037 | Display latitude/longitude | main.js - Show coordinates to user |
| JS-038 | fetch() | main.js - Loading events.json |
| JS-039 | then() | main.js - Promise chain |
| JS-040 | catch() | main.js - Error handling in fetch |
| JS-041 | async/await | main.js - Alternative async syntax |
| JS-042 | Loading message | main.js - Show message while fetching |

## JQUERY REQUIREMENTS

| Exercise | Requirement | Where Implemented |
|----------|-------------|-------------------|
| JQ-001 | click() | main.js - jQuery click event handler |
| JQ-002 | fadeIn() | main.js - jQuery fade animation |
| JQ-003 | fadeOut() | main.js - jQuery fade animation |

## SAMPLE DATA REQUIREMENT

| Exercise | Requirement | Where Implemented |
|----------|-------------|-------------------|
| DATA-001 | 6 sample events | events.json - Array of 6 event objects |
| DATA-002 | Event name | events.json - All events have name field |
| DATA-003 | Event date | events.json - All events have date field |
| DATA-004 | Event category | events.json - All events have category field |
| DATA-005 | Event location | events.json - All events have location field |
| DATA-006 | Event description | events.json - All events have description field |
| DATA-007 | Display dynamically | main.js - Events rendered using map() and DOM manipulation |
| DATA-008 | Use loops | main.js - forEach and for loops used |
| DATA-009 | Use map() | main.js - map() transforms event data |
| DATA-010 | Use filter() | main.js - filter() applied for category filtering |
| DATA-011 | Use Bootstrap cards | index.html - Events displayed as Bootstrap cards |
| DATA-012 | DOM manipulation | main.js - createElement, appendChild for dynamic content |

## SUMMARY

**Total Requirements: 211**
- HTML5: 22
- CSS: 45
- Bootstrap: 67
- JavaScript: 42
- jQuery: 3
- Sample Data: 12

All requirements are implemented exactly once in their designated locations.
