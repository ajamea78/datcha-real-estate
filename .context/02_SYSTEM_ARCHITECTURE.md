# System Architecture & Technical Specifications

## 1. Stack Overview
- **Framework**: Next.js 16.4.0 (App Router, Turbopack, React 19)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/turbopack`) with CSS Custom Properties
- **Typography**: 
  - Display / Editorial: `Cormorant Garamond` (Google Fonts / `next/font/google`)
  - Body / UI / Numbers: `Jost` or `Montserrat` (Clean geometric sans)
- **Animations**: CSS Transitions + Framer Motion (for smooth scroll reveals)
- **Lead Capture**: 
  - Server Action / Route Handler via **Resend** (email delivery)
  - Direct WhatsApp Contact Floating Action Button (`https://wa.me/...`)
- **Hosting / CI/CD**: Vercel (Production branch: `main`, Preview/Review branch: `staging`)

## 2. Page & Section Topology (Single-Page Anchor Flow)
```
/ (Root)
 ├── Sticky Navbar (Brand Logo, Anchor Links, Theme Toggle, Consultation CTA, Mobile Drawer)
 ├── #hero (Full-bleed drone ocean video loop, dark overlay, display headline, dual CTA, scroll indicator)
 ├── #stats (500+ Deals, 15+ Years, 5 Locations, 4 Languages)
 ├── #destinations (Interactive showcase: Hurghada, El Gouna, Sahl Hasheesh, Makadi Bay, Soma Bay)
 ├── #spotlights (Curated architectural preview cards: El Gouna Penthouse, Sahl Hasheesh Land, Makadi Villa)
 ├── #services (5 Asset Classes: Land, Apartments, Villas, Commercial, Offices)
 ├── #why-us (4 Trust Pillars: Local Expertise, Transparent Terms, Multilingual Advisory, Legal Protection)
 ├── #testimonials (Multilingual client proof: Russian, British, Egyptian investors)
 ├── #contact (Interactive Lead Inquiry Form + Direct Contact Details + Supported Languages)
 └── Footer (Branding, Legal Disclaimer, Navigation, Socials)
```

## 3. Lead Ingestion Flow
```
User Submits Form -> Client Validation -> Server Action / API Route -> Resend API -> Brokerage Inbox
                                                                 -> Confirmation State to User
Optional Direct Path -> WhatsApp FAB -> Instant Chat with Multilingual Broker
```
