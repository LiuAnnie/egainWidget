# eGain Interactive Guidance Widget

A customizable interactive guidance widget built with Vue.js 3 for HR question handling. This widget provides a seamless, user-friendly interface for collecting information through a series of questions and providing personalized solutions.

## Features

- **Flexible Presentation Modes**:
  - Single question mode: Questions appear one at a time (default)
  - Multiple questions mode: All questions appear at once after the initial problem description
- **Multiple Question Types**:
  - Text enumeration (dropdown)
  - Image enumeration (with icons)
  - Text box input
  - Numerical input
- **Answer Management**:
  - Review all answers at the end of the session
  - Edit previous answers with the pencil icon
  - Save or cancel changes to answers
- **Feedback System**:
  - Provide thumbs up/down feedback on solutions
  - Complete the session with a "Done" button
- **Responsive Design**:
  - Adapts to different screen sizes and devices
  - Mobile-friendly interface
- **Dark Mode Support**:
  - Automatically follows system preferences
  - Can be manually configured
- **Customizable Styling**:
  - Colors, fonts, and logo can be customized
  - Consistent branding across the widget

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/LiuAnnie/vue-widget.git
   cd vue-widget
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   - http://localhost:5173 (default Vite port)
   - or http://localhost:3000 (if using vite.config.dev.js)

3. The application will be running in development mode with hot-reload enabled.

## Testing the Application

1. Start with the initial question:
   - Enter your HR question or request in the text area
   - Click "Continue" to proceed

2. Answer the sequence of questions:
   - Select your HR question type
   - Choose your preferred communication style
   - Enter your company email
   - Provide your employee ID

3. Review your answers:
   - All answers can be edited using the pencil icon
   - Click "Save" to update an answer
   - Click "Cancel" to discard changes

4. Submit feedback:
   - Use thumbs up/down to rate the solution
   - Click "Done" to complete the session

## Customization

The widget can be customized through configuration options:

```javascript
const widget = new VueWidget({
  target: '#widget-container',
  config: {
    // Logo for the widget header
    logo: '/images/logo.svg',
    
    // Color scheme
    colors: {
      primary: '#470FF4',
      secondary: '#89AAE6',
      background: '#EBFFED',
      text: '#2E3532',
      accent: '#2F242C'
    },
    
    // Font settings
    fonts: {
      primary: 'Arial, sans-serif',
      sizes: {
        heading: '24px',
        subheading: '18px',
        body: '16px'
      }
    },
    
    // Presentation mode: 'single' or 'multiple'
    presentation: 'single' // Set to 'single' for one question at a time, 'multiple' for all questions at once
  },
  headerText: 'MyHR',
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
});
```

### Presentation Modes

The widget supports two presentation modes:

1. **Single Mode** (default):
   - Questions appear one at a time
   - User must answer each question before proceeding
   - Provides a focused, step-by-step experience

2. **Multiple Mode**:
   - All questions appear at once after the initial problem description
   - User can answer questions in any order
   - Submit button becomes enabled when all questions are answered
   - Provides a comprehensive view of all required information

## Building for Production

1. Build the application:
   ```bash
   npm run build
   ```
   This will generate the following files in the `public/dist` directory:
   - `vue-widget.umd.js` - UMD bundle for direct browser use
   - `vue-widget.es.js` - ES module bundle
   - `style.css` - Compiled styles

## Deployment

### GitHub Pages Deployment

1. Ensure you have two branches:
   - `main` - for source code
   - `gh-pages` - for built files

2. Build and deploy to GitHub Pages:
   ```bash
   # Build the project
   npm run build

   # Switch to gh-pages branch
   git checkout gh-pages

   # Add all changes
   git add .

   # Commit changes
   git commit -m "Update built files"

   # Push to GitHub Pages
   git push origin gh-pages
   ```

3. Your widget will be available at:
   `https://[your-username].github.io/vue-widget/`

### Embedding the Widget in Other Projects

1. Include the required files in your HTML:
   ```html
   <!-- Load Vue.js first -->
   <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
   
   <!-- Load widget styles -->
   <link rel="stylesheet" href="path/to/style.css">
   
   <!-- Load widget script -->
   <script src="path/to/vue-widget.umd.js"></script>
   ```

2. Add a container for the widget:
   ```html
   <div id="widget-container"></div>
   ```

3. Initialize the widget:
   ```html
   <script>
     // Wait for both Vue and the widget script to load
     function initializeWidget() {
       if (typeof Vue === 'undefined') {
         console.error('Vue is not loaded');
         return;
       }
       if (typeof VueWidget === 'undefined') {
         console.error('VueWidget is not loaded');
         return;
       }

       try {
         const widget = new VueWidget({
           target: '#widget-container',
           config: {
             logo: '/images/logo.svg',
             colors: {
               primary: '#470FF4',
               secondary: '#89AAE6',
               background: '#EBFFED',
               text: '#2E3532',
               accent: '#2F242C'
             },
             presentation: 'single', // or 'multiple'
             fonts: {
               primary: 'Arial, sans-serif',
               sizes: {
                 heading: '24px',
                 subheading: '18px',
                 body: '16px'
               }
             }
           },
           headerText: 'HR Assistant',
           isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
         });

         widget.mount();
       } catch (error) {
         console.error('Error initializing widget:', error);
       }
     }

     // Initialize when the page loads
     if (document.readyState === 'loading') {
       document.addEventListener('DOMContentLoaded', initializeWidget);
     } else {
       initializeWidget();
     }
   </script>
   ```

## Troubleshooting

### Common Issues

1. Images not loading:
   - Ensure image paths are relative (e.g., `./images/logo.svg`)
   - Check that images are in the correct directory (`public/images/`)

2. Widget not displaying:
   - Verify that `widget.mount()` is called after initialization
   - Check browser console for error messages
   - Ensure all required files are loaded

3. Styling issues:
   - Confirm that `style.css` is properly loaded
   - Check that the container element exists in the DOM

4. Presentation mode not working:
   - Verify that the `presentation` property is set correctly in the config
   - Valid values are 'single' or 'multiple'

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.