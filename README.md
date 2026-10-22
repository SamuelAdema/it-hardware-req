# IT Hardware Requisition Portal

**Live Demo:** [View Deployed Application](https://it-hardware-req.vercel.app/)

## Overview
An internal portal designed for department staff to securely browse standardized IT equipment, submit requisition requests, and track provisioning status. Built as the comprehensive Capstone Project for the CodeOps Module 3 curriculum, this application demonstrates modern full-stack Next.js architecture.

## Core Technical Features
- **Server-Side Rendering (SSR):** The hardware catalog leverages Server Components to fetch data securely on the backend, ensuring optimal first-paint performance and SEO visibility (Day 37).
- **Real-Time Client Fetching:** Integrates `SWR` for instant client-side search filtering, utilizing server-fetched `fallbackData` to eliminate blank loading states (Day 41).
- **Edge Security & Authentication:** Utilizes Next.js middleware (Proxy) to protect private routes (`/requisitions`). Employs Server Actions to issue secure, `httpOnly` session cookies (Day 42).
- **Custom API Route Handlers:** Implements native Next.js API endpoints (`GET /api/hardware` and `POST /api/requisitions`) with strict server-side validation (Day 39).
- **Mutation & Event Protection:** Form submissions manage React state to disable interaction during pending network requests, effectively preventing duplicate hardware orders (Day 48).
- **SEO & Asset Optimization:** Configured with dynamic page metadata, automated `sitemap.xml`, `robots.txt`, and layout-shift-free typography using `next/font/google` (Days 43 & 44).

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Library:** React
- **Styling:** Tailwind CSS
- **Data Fetching:** SWR & Native Fetch API

## Local Development
Clone the repository and install dependencies to run the portal locally:

```bash
npm install
npm run dev