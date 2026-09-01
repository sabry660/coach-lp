# Captain Ahmed Mostafa - AFIT METHOD Website

Official elite fitness and nutrition coaching landing page for Captain Ahmed Mostafa. This React-based website showcases personalized training programs, sports nutrition services, and proven client transformations.

## Features

- Responsive design optimized for desktop, tablet, and mobile devices
- Interactive before/after transformation sliders
- Lightbox gallery for training facility images
- Accordion-style FAQ section
- Multi-tier pricing display with coaching plans
- Contact form with WhatsApp integration
- Social media integration (Instagram, Facebook, TikTok)
- Certificate modal for credentials display
- SEO-optimized with Schema.org structured data
- Dark theme with red accent colors matching brand identity

## Technologies Used

- React 19.0.1
- TypeScript 5.8.2
- Vite 6.2.3
- Tailwind CSS 4.1.14
- Lucide React 0.546.0 (icons)
- Motion 12.23.24 (animations)
- Express 4.21.2 (server)

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Installation

1. Clone the repository or download the project files
2. Navigate to the project directory:
   ```bash
   cd captain-ahmed-mostafa-_-afit-method
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

Build the application for production:
```bash
npm run build
```

The optimized files will be generated in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── BeforeAfterSlider.tsx    # Interactive transformation comparison
│   ├── CertificateModal.tsx     # Credential display modal
│   ├── Certifications.tsx       # Certifications section
│   ├── ContactForm.tsx          # Contact form with WhatsApp integration
│   ├── Faq.tsx                  # FAQ accordion section
│   ├── Footer.tsx               # Site footer with navigation
│   ├── Gallery.tsx              # Image gallery with lightbox
│   ├── Hero.tsx                 # Landing hero section
│   ├── LightboxModal.tsx        # Image lightbox modal
│   ├── Navbar.tsx               # Navigation bar
│   ├── Pricing.tsx              # Pricing tiers section
│   ├── Story.tsx                # About section
│   ├── Testimonials.tsx         # Client testimonials
│   └── Transformations.tsx      # Client transformations showcase
├── data/
│   └── coachData.ts             # Content data (certifications, pricing, etc.)
├── main.tsx                     # Application entry point
├── types.ts                     # TypeScript type definitions
└── App.tsx                      # Main application component
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory (optional):
```
GEMINI_API_KEY=your_api_key_here
```

### Coach Settings

Update coach information in `src/data/coachData.ts`:
- `defaultSettings`: Contact information and social media links
- `certificationsData`: Professional credentials
- `transformationsData`: Client transformation stories
- `pricingTiersData`: Coaching program pricing
- `testimonialsData`: Client reviews
- `faqData`: Frequently asked questions

## Customization

### Branding

- Logo: Replace `/public/logo.svg` with your brand logo
- Colors: Modify Tailwind CSS color values in components (primary: `#E30613`)
- Fonts: Update Google Fonts in `index.html`

### Content

All text content is stored in `src/data/coachData.ts` for easy editing without touching component files.

## SEO Optimization

The website includes comprehensive SEO features:
- Meta tags for search engines and social media
- Open Graph tags for Facebook/LinkedIn sharing
- Twitter Card tags for Twitter sharing
- Schema.org structured data for rich snippets
- Canonical URLs
- Robots meta tags

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy

### Netlify

1. Connect your repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy

### Traditional Hosting

1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to handle client-side routing (if needed)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run clean` - Remove build artifacts
- `npm run lint` - Run TypeScript type checking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The site is optimized for performance with:
- Code splitting
- Image lazy loading
- CSS optimization
- Minimal JavaScript bundle size
- Efficient component rendering

## Security

- Input validation on forms
- HTTPS recommended for production
- Secure external link handling
- No sensitive data exposure in client-side code

## Support

For support or inquiries about the coaching programs:
- Email: coach.ahmedmostafa@afitmethod.com
- WhatsApp: +20 100 000 0000
- Instagram: @ahmedmostafa_afit

## License

This project is proprietary software. All rights reserved to Captain Ahmed Mostafa - AFIT METHOD.

## Credits

- Design and Development: AFIT METHOD Team
- Coach: Captain Ahmed Mostafa
- Technologies: React, TypeScript, Tailwind CSS, Vite
