# IT Hardware Requisition Portal

An internal Next.js application for staff to browse hardware catalogs, submit requisition requests, and track provisioning status. Built for the Module 3 CodeOps Capstone.

## Features
- **Server-Rendered Catalog:** Hardware items are fetched securely on the server for optimal performance (Day 37).
- **Interactive Search:** Client-side SWR integration for real-time catalog filtering (Day 41).
- **Protected Routes:** Middleware proxy enforces authentication for viewing and submitting requests (Day 42).
- **Submission Protection:** Form buttons disable during pending requests to prevent duplicate orders (Day 48).
- **SEO Optimized:** Dynamic metadata, sitemap, and robots.txt configured (Days 43 & 44).

## Local Development
```bash
npm install
npm run dev