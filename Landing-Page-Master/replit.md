# Ebook Landing Page - Aprende Inglés Desde Cero

## Overview

A landing page for selling an English language learning ebook targeted at the Colombian market. The page is entirely in Spanish and accepts payments through Wompi Colombia.

## Current State

- **Frontend**: Complete landing page with Hero, Benefits, Testimonials, and Pricing sections
- **Backend**: Wompi payment integration, secure download system with token verification
- **Database**: PostgreSQL with purchases and testimonials tables
- **Payment Flow**: Checkout → Wompi → Payment Callback → Thank You page with download

## Features

1. **Landing Page**: Modern, responsive design with white/yellow/light blue color scheme
2. **Checkout**: Form for name and email, redirects to Wompi for payment
3. **Thank You Page**: Only accessible with valid payment token, contains download button
4. **Secure Downloads**: Token-based verification, only approved payments can download

## Architecture

### Frontend (React + TypeScript)
- `/` - Landing page with all sections
- `/checkout` - Checkout form
- `/pago/callback` - Payment verification callback
- `/gracias?token=xxx` - Thank you page with download

### Backend (Express)
- `POST /api/checkout` - Create purchase and redirect to Wompi
- `GET /api/payment/verify` - Verify payment status with Wompi
- `POST /api/webhooks/wompi` - Webhook for payment status updates
- `GET /api/download/verify` - Verify download token
- `GET /api/download/:token` - Download the ebook PDF
- `GET /api/testimonials` - Get testimonials list

### Database Schema
- `purchases` - Stores purchase info, payment status, download tokens
- `testimonials` - Customer testimonials (seeded with sample data)

## Required Environment Variables

For Wompi to work, you need to set:
- `WOMPI_PUBLIC_KEY` - Your Wompi public key
- `WOMPI_PRIVATE_KEY` - Your Wompi private/secret key
- `WOMPI_EVENTS_KEY` - Wompi webhook events key (for signature validation)
- `WOMPI_SANDBOX` - Set to "true" for sandbox mode

## Ebook Setup

Place your PDF ebook in: `uploads/ebook.pdf`

The download will use the filename "Aprende-Ingles-Desde-Cero.pdf"

## User Preferences

- Language: Spanish (Colombian market)
- Currency: COP (Colombian Pesos)
- Price: $35,000 COP
- Colors: White, Yellow, Light Blue
- Payment Provider: Wompi Colombia

## Testimonials Settings

Only 3 testimonials are displayed:

1. **María García** (Bogotá) - "Siempre pensé que los idiomas no eran lo mío..."
2. **Alvaro Ramirez** (Manizales) - "He tenido la oportunidad de tener clases con el profesor y lo que enseña no es lo de siempre, así he visto resultados reales" - Has actual photo (image_1770073608461.png)
3. **Laura Martínez** (Cali) - "Lo mejor es que puedo estudiar a mi propio ritmo..."

Note: Alvaro Ramirez has a real photo displayed instead of initials.

## Recent Changes

- Initial implementation (Feb 2026)
- Landing page with all sections
- Wompi payment integration
- Secure download token system
- PostgreSQL storage for purchases
