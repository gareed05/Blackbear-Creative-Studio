<<<<<<< HEAD
# Blackbear-Creative-Studio
=======
# BlackBear Ads Landing Page

A responsive, conversion-focused landing page for a full-stack ads and media buying service targeting mid-sized home service businesses in Texas.

## 🎯 Features

- **Mobile-first responsive design** with Tailwind CSS
- **Conversion-optimized layout** with clear CTAs throughout
- **Calendly integration** for booking discovery calls
- **Social proof sections** with testimonials and client logos
- **3-step process explanation** (How It Works)
- **Services showcase** (Ad Creation, Media Buying, Lead Tracking)
- **Pricing teaser** with ROI calculator
- **Animated CTA buttons** with hover effects
- **Modern, professional design** optimized for home service businesses

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd BLACKBEAR
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Calendly Integration

Update the Calendly URL in these files:
- `src/components/Hero.jsx` (line 5)
- `src/components/CTA.jsx` (line 5)

Replace `'https://calendly.com/your-calendly-link'` with your actual Calendly URL.

### Content Updates

The landing page includes placeholder content that you can customize:

- **Company name**: Update "BlackBear Ads" throughout the components
- **Contact information**: Update email and phone in `Footer.jsx`
- **Testimonials**: Replace placeholder testimonials in `Testimonials.jsx`
- **Client logos**: Update client names in `SocialProof.jsx`
- **Pricing**: Adjust the $2,500/mo starting price in `Pricing.jsx`

### Styling

The design uses Tailwind CSS with custom colors defined in `tailwind.config.js`:
- Primary blue: `#3b82f6` (primary-600)
- Secondary yellow: `#eab308` (secondary-500)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation and mobile menu
│   ├── Hero.jsx           # Main headline and CTA
│   ├── SocialProof.jsx    # Client logos and stats
│   ├── HowItWorks.jsx     # 3-step process
│   ├── Services.jsx       # Service offerings
│   ├── Pricing.jsx        # Pricing teaser and ROI
│   ├── Testimonials.jsx   # Client testimonials
│   ├── CTA.jsx           # Final call-to-action
│   └── Footer.jsx        # Footer with contact info
├── App.jsx               # Main app component
├── main.jsx             # React entry point
└── index.css            # Tailwind CSS and custom styles
```

## 🎨 Design Features

- **Typography**: Inter font family for modern, professional look
- **Color Scheme**: Blue primary with yellow accents
- **Animations**: Subtle hover effects and button animations
- **Layout**: Clean, spacious design with proper visual hierarchy
- **Mobile Optimization**: Responsive design that works on all devices

## 📱 Mobile-First Design

The landing page is built with a mobile-first approach:
- Responsive navigation with hamburger menu
- Optimized typography scaling
- Touch-friendly buttons and CTAs
- Proper spacing for mobile devices

## 🎯 Conversion Optimization

- **Multiple CTAs** throughout the page
- **Social proof** with testimonials and stats
- **Urgency messaging** ("Limited Availability")
- **Clear value proposition** in headlines
- **Trust indicators** (Texas-based, proven results)
- **Risk reversal** (free consultation, no commitment)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` package
- **Traditional hosting**: Upload the `dist` folder to your web server

## 📞 Support

For questions or customization help, contact:
- Email: hello@blackbearads.com
- Phone: (512) 555-0123

## 📄 License

This project is created for BlackBear Ads. All rights reserved.

---

**Ready to start booking more jobs?** [Book Your Free Strategy Call](#cta) 
>>>>>>> 7d52f4b (Initial project commit)
