# Food Turtle Kiosk 🐢

A full-stack self-checkout kiosk built for learning, real hardware, and fun.

![Food Turtle](https://via.placeholder.com/800x400/00A86B/FFFFFF?text=Food+Turtle+Kiosk)  
_(coming soon)_

## Tech Stack

| Layer      | Technology                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------------- |
| Frontend   | React + TypeScript + Create React App                                                          |
| Backend    | Express + Node.js                                                                              |
| Database   | SQLite (file-based)                                                                            |
| Testing    | Jest + React Testing Library + Cypress                                                         |
| Formatting | Prettier                                                                                       |
| Logging    | Winston + daily rotation                                                                       |
| Design     | [Figma Design System →](https://www.figma.com/design/qwMwvmQSeJwQMM4YLqHtfX/Food-Turtle-Kiosk) |

## Quick Start (one command!)

```bash
git clone https://github.com/EdmondDillonPhillips/foodturtle.git
cd foodturtle

# Copy env files (never commit real .env!)
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env

npm install
npm run dev
```
