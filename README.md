# 📊 Test Assignment — Layout and Interface Development

This is my implementation of the **Dashboard** and **Account** screens based on the provided UI screenshots.  
The goal was to build a clean, responsive, and interactive UI using **Angular**, breaking down the layout into reusable components and managing state effectively.

---

## 🚀 Live Demo

👉 [Deployed Application](#) — *Replace with your live hosting link*

---

## 📂 Repository

👉 [GitHub Repository](#) — *Replace with your repository link*

---

## ✅ Features Implemented

### 📌 Dashboard
- **Navigation Bar** with active tab highlighting.
- **Work Queue** block with tabs and a table.
- **Portfolio Goals** block with progress indicators.
- **Quick Actions** block with buttons.
- **Market Intelligence** block with news items.
- **My Accounts** table with filters, triage, statuses, and color indicators.
- **State Management:** Implemented with **NgRX** (Store + Effects) for handling the Dashboard data flow.

### 📌 Account Page
- **Header** with account name and details.
- **Performance Metrics**, **Policies**, **Account Status & Compliance**, **Winnability** (with mock graphs and recommendations).
- **Communication** section with interactive reply buttons (*used instead of icon interactivity*).
- **Policies Table** at the bottom.

---

## ⚙️ Technologies Used

- **Framework:** [Angular](https://angular.io/) `v19`
- **State Management:** [NgRX](https://ngrx.io/) used for the Dashboard
- **Component Library:** Angular Material
- **Language:** TypeScript, SCSS
- **Server-Side Rendering:** Configured with Angular SSR (optional)
- **Build Tooling:** Angular CLI

---

## 🔍 Interactivity & Responsiveness

- Tab switching and active state highlighting.
- Reply buttons in the **Communication** block are interactive.
- Layout is responsive for **desktop** and **tablet** breakpoints.

---

## 🤖 AI Tools Used

- **GPT** (ChatGPT) — used for generating boilerplate code, converting UI ideas to components, and assisting with structure planning.

---

## ⚠️ Notes

- Icons interactivity (e.g., tooltips on icon click) was replaced with reply buttons interactivity in the **Communication** section to focus on core functionality within the deadline.
- No unit or E2E tests were implemented for this version.

---

## 📜 How to Run Locally

```bash
# Clone the repo
git clone <YOUR_REPO_URL>
cd test-app

# Install dependencies
npm install

# Run locally
npm start
