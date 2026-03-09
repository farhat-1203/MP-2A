# StyleCraft – AI Powered Fashion Customization Platform

**StyleCraft** is an AI-powered fashion e-commerce platform that allows users to explore, customize, and visualize fashion designs before purchasing. The platform combines **modern web technologies, cloud deployment, and AI-based image generation** to deliver a personalized shopping experience for users and designers.

The system enables customers to **describe outfits using natural language and generate visual designs**, bridging the gap between imagination and fashion reality.

---

# Problem Statement

Traditional fashion e-commerce platforms allow users to browse existing products but do not provide a way to **visualize custom fashion ideas** before purchasing.

Customers often face issues such as:
* Lack of personalized fashion options
* Difficulty visualizing custom designs
* Limited interaction between customers and designers
* Static product catalogs

**StyleCraft solves this problem by introducing AI-powered design generation and customizable fashion visualization.**

---

# Key Features

## AI Fashion Design Generation (Atelier)

The **Atelier** feature allows users to generate fashion designs using natural language descriptions.

Example prompt:

```
"A flowy lavender dress with lace sleeves"
```

The system generates a **visual representation of the outfit**, helping users preview their ideas before ordering.

---

## User Authentication System

Secure login and signup system that allows users to:
* Create accounts
* Login securely
* Access personal dashboards
* Manage orders and saved items

---

## Product Catalog Management

Products are organized by **designers and categories** allowing users to:
* Browse different fashion collections
* Filter by category, size, and price
* View product details

---

## Cart and Wishlist

Users can:
* Add items to cart
* Save products to wishlist
* Review selected items before checkout

---

## Admin / Designer Dashboard

Designers and admins can manage the platform through a dashboard that allows them to:
* Add new fashion products
* Manage inventory
* Track customer orders
* Monitor user activity

---

# System Architecture

```
Frontend (React + Tailwind CSS)
        |
Node.js Express Backend
        |
MongoDB Database
        |
AI Image Generation API
```

---

# Tech Stack

## Frontend
* React.js
* Tailwind CSS
* Axios
* React Router

---

## Backend
* Node.js
* Express.js
* REST APIs

---

## AI Integration
* Hugging Face Stable Diffusion API (for fashion image generation)

---

## Database

* MongoDB

---








# Project Screens

## Home Page
Displays featured fashion collections with responsive design.

---

## Product Listing Page

Shows products in a grid layout with filters such as:
* Category
* Price
* Size

---

## Atelier Section

Users enter fashion descriptions using natural language to generate designs.
Example:

```
"A black evening gown with silver embroidery"
```

---

## AI Output View

Displays the generated fashion image created by the AI model.

---

## Cart & Wishlist Page

Allows users to manage selected items before checkout.

---

## Admin / Designer Dashboard

Interface for managing:
* Products
* Orders
* Customers

---
