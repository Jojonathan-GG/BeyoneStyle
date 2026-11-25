# 🚀 BeyoneStyle - E-Commerce Platform Development Roadmap & To-Do List

> **Project Concept**: Premium Sustainable Fashion & Lifestyle E-Commerce Platform inspired by InfinityFX (~90% feature parity, custom brand identity).
> **Target Tooling**: OpenCode AI Dev Environment, Next.js App Router, Modern Stack.

---

## 🛠️ 1. Tech Stack & Top GitHub Skills Requirements

Proyek ini memanfaatkan *top skills* standar industri open-source terkini yang paling banyak diminati di GitHub:

* **Framework Core**: Next.js 14/15 (App Router, Server Actions, React Server Components)
* **Language**: TypeScript (Strict Type Safety)
* **Styling & UI**: Tailwind CSS v3/v4, Shadcn UI, Radix UI Primitives, Lucide Icons
* **Animation & FX Engine**: Framer Motion, GSAP, Canvas / Three.js (untuk visual 3D hero produk)
* **State Management**: Zustand (Client state & Cart state), TanStack Query v5 (Server state)
* **Database & ORM**: PostgreSQL (Supabase / Neon DB), Prisma ORM / Drizzle ORM
* **Authentication**: NextAuth.js (Auth.js v5) atau Clerk
* **Payment Gateway**: Stripe API (Global) + Midtrans / Xendit (Lokal Integration option)
* **Search & Filter**: Algolia / Meilisearch / PostgreSQL Full-Text Search
* **File Storage**: Cloudinary / AWS S3 / Supabase Storage (Optimized WebP/AVIF images)
* **DevOps & Tooling**: OpenCode, Docker, GitHub Actions CI/CD, Vercel Deployment

---

## 💻 2. OpenCode Workflow Configuration & Rules

Tambahkan file aturan konteks untuk OpenCode di direktori utama proyek (`.opencode/rules.md`):

- [ ] Standardize TypeScript interfaces and strictly avoid `any`.
- [ ] Use React Server Components (RSC) by default; add `'use client'` only when state/interactive handlers are required.
- [ ] Implement mobile-first responsive styling with Tailwind CSS.
- [ ] Keep animations fluid (60 FPS) and avoid layout shifts (CLS < 0.1).
- [ ] Write modular components under `@/components/{ui,features,layouts}`.

---

## 📝 3. Comprehensive Task Breakdown (To-Do List)

### Phase 1: Project Initialization & Infrastructure
- [ ] **1.1 Next.js Setup**
  - [ ] Initialize Next.js project with TypeScript, Tailwind CSS, and App Router.
  - [ ] Set up path aliases (`@/*`).
  - [ ] Configure ESLint, Prettier, and Git hooks (Husky + lint-staged).
- [ ] **1.2 Design Tokens & Theme Setup**
  - [x] Define dark-first editorial token palette (surfaces `#0d0d0d` / `#141413` / `#1b1b19`, ink `#f4f4ef`, hairlines `#2a2a25` / `#3d3d36`); neon accent deferred.
  - [x] Set up custom typography (Plus Jakarta Sans display / Inter text, tabular numerals for prices).
  - [ ] Install Shadcn UI base components (`Button`, `Dialog`, `Sheet`, `DropdownMenu`, `Drawer`).

---

### Phase 2: Database Schema & Authentication
- [ ] **2.1 Database Modeling (Prisma ORM)**
  - [ ] `User` & `Account` (OAuth Google/GitHub + Credentials).
  - [ ] `Product`, `Category`, `ProductVariant` (Size, Color, Stock SKU).
  - [ ] `Cart` & `CartItem`.
  - [ ] `Order`, `OrderItem`, `PaymentTransaction`.
  - [ ] `Review` & `Rating`.
  - [ ] Run initial migration and set up seed data script (`prisma/seed.ts`).
- [ ] **2.2 Authentication Flow**
  - [ ] Implement NextAuth v5 with social login & magic links.
  - [ ] Create user profile page, order history, and saved address book.
  - [ ] Implement Protected Routes & Middleware for Admin and User roles.

---

### Phase 3: Core UI/UX & Layout Architecture (InfinityFX Aesthetic)
- [ ] **3.1 Global Header & Navigation**
  - [x] Transparent Glassmorphism Navbar with blur effect (`backdrop-blur-md`).
  - [ ] Mega-menu / Flyout category dropdown.
  - [ ] Real-time Cart badge indicator & quick search bar trigger.
  - [x] Mobile responsive drawer menu with smooth transitions.
- [ ] **3.2 Dynamic Hero Section**
  - [ ] Full-screen aesthetic hero with high-res video backdrop / WebGL fluid animation.
  - [ ] Interactive product highlight carousel with smooth cursor drag.
  - [x] Micro-ticker banner for eco-friendly badges (Fair Trade, Organic, Recycled).
- [ ] **3.3 Footer & Brand Statements**
  - [x] InfinityFX-style minimalist multi-column footer.
  - [x] Newsletter subscription form with instant validation & toast notification.
  - [x] Sustainability disclosures and compliance badges.

---

### Phase 4: Product Catalog & Discovery Engine
- [ ] **4.1 Product Grid & Listing Page (`/shop`)**
  - [x] Responsive multi-column grid with hover image scale.
  - [x] Lazy loading through `next/image`.
  - [ ] Quick view modal preview for fast browsing.
- [ ] **4.2 Filter & Sorting System**
  - [ ] Dynamic multi-facet filter panel (Category, Price range slider, Size, Color swatch, Sustainability tags).
  - [ ] URL State Synchronization (Search params using Next.js `useSearchParams`).
  - [ ] Sorting functionality (Newest, Price Low-to-High, Popularity).
- [ ] **4.3 Product Detail Page (`/shop/[slug]`)**
  - [ ] Image gallery with zoom preview and thumbnail slider.
  - [ ] Variant selector (Dynamic stock availability checker).
  - [ ] Interactive Size Guide modal.
  - [x] Accordion sections for Details & care, Sizing, and Delivery.
  - [x] Related products grid.

---

### Phase 5: Interactive Features & Animations (The 10% Custom BeyoneStyle Identity)
- [ ] **5.1 Smooth Page Transitions & Micro-Interactions**
  - [ ] Implement Framer Motion page entrance transitions.
  - [ ] Custom magnetic buttons & custom interactive cursor.
  - [ ] Scroll-triggered animations (Framer Motion / Intersection Observer).
- [ ] **5.2 Interactive Lookbook / Stylist Gallery**
  - [ ] Hotspot feature: Tagged products on full-bleed lifestyle images.
  - [ ] "Shop the Look" bundle add-to-cart mechanism.

---

### Phase 6: Cart, Checkout & Payment Gateway
- [ ] **6.1 Sliding Mini-Cart Drawer**
  - [ ] Slide-over cart powered by Zustand state management.
  - [ ] Quantity updater, item remover, promo code field.
  - [ ] Free shipping progress bar calculator.
- [ ] **6.2 Checkout Pipeline**
  - [ ] Multi-step form (Shipping -> Payment -> Review).
  - [ ] Stripe Elements integration for secure card payments.
  - [ ] Support local payments (Midtrans / Xendit integration for QRIS & Virtual Accounts).
  - [ ] Webhook receiver (`/api/webhooks/stripe`) for instant order confirmation and stock update.
- [ ] **6.3 Order Confirmation Page**
  - [ ] Dynamic receipt generator.
  - [ ] Order tracking number link and confirmation email dispatch via Resend / SendGrid.

---

### Phase 7: Admin Dashboard (`/admin`)
- [ ] **7.1 Analytics & Overview**
  - [ ] Dashboard key metrics (Total Revenue, Orders, Active Users, Inventory Alert).
  - [ ] Recharts / Tremor interactive revenue charts.
- [ ] **7.2 Content & Inventory Management**
  - [ ] CRUD interface for Products, Variants, and Categories.
  - [ ] Drag-and-drop image upload to Cloudinary / S3.
  - [ ] Order fulfillment status switcher (Pending, Processing, Shipped, Delivered).

---

### Phase 8: Performance, SEO & Security Optimization
- [ ] **8.1 SEO & Meta**
  - [ ] Dynamic OpenGraph images (`@vercel/og`).
  - [ ] Automated `sitemap.xml` and `robots.txt` generation.
  - [ ] Structured Schema.org JSON-LD data for products.
- [ ] **8.2 Performance Tuning**
  - [ ] Next.js `Image` optimization (`WebP`/`AVIF` formats).
  - [ ] Dynamic imports & code splitting for heavy animation libraries.
  - [ ] Achieve Lighthouse score > 90 across Performance, Accessibility, and SEO.
- [ ] **8.3 Security Best Practices**
  - [ ] Rate limiting on API routes using Redis / Upstash.
  - [ ] Input sanitization with Zod schemas.
  - [ ] CSP (Content Security Policy) headers setup in `next.config.js`.

---

## 🤖 4. OpenCode Prompt Execution Guide

Gunakan perintah prompt berikut di OpenCode saat memproses setiap fase:

### Prompt 1: Initial Setup
```text
@OpenCode Please set up the initial Next.js 14 project structure for BeyoneStyle with TypeScript, Tailwind CSS, and Shadcn UI. Configure path aliases, set up the theme colors (#0d0d0d dark background and modern typography), and build a baseline layout with a glassmorphism header navigation inspired by high-end e-commerce sites like InfinityFX.
```

### Prompt 2: Database & Prisma Setup
```text
@OpenCode Write a complete schema.prisma file for BeyoneStyle e-commerce. Include models for User, Account, Product, ProductVariant (size, color, stock), Category, Cart, CartItem, Order, OrderItem, and Review. Ensure relational integrity and indexing for search performance.
```

### Prompt 3: Product Detail & Animations
```text
@OpenCode Create an interactive Product Detail Page component in `@/app/product/[slug]/page.tsx`. Include an animated image gallery, variant selector with active stock state, accordion for product details, dynamic size guide, and smooth Framer Motion micro-interactions.
```

---

## 📌 Status Summary

- [ ] **Phase 1**: Setup & Infrastructure `[In Progress]`
- [ ] **Phase 2**: Database & Auth `[Not Started]`
- [ ] **Phase 3**: Aesthetic UI Architecture `[In Progress]`
- [ ] **Phase 4**: Product Catalog `[In Progress]`
- [ ] **Phase 5**: Animations & Lookbook `[Not Started]`
- [ ] **Phase 6**: Cart & Stripe Payment `[Not Started]`
- [ ] **Phase 7**: Admin Dashboard `[Not Started]`
- [ ] **Phase 8**: SEO & Deployment `[Not Started]`

> **2026-11-25 note**: the editorial storefront shell is live on
> `feat/typography-motion` — home, shop, product detail, atelier, journal,
> client care, privacy, terms, and 404, plus the per-letter scramble headline.
> Product reservation is email-based for now; cart, auth, database, payments,
> filters, and admin remain future phases.