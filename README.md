# Broodl 🗓️🙂 — Daily Mood Tracker

**Broodl** is a web app that helps you track your mood every day of the year. Log how you feel today, then visualize patterns over time with a calendar-style view. It includes authentication and cloud persistence so each user’s entries are stored and loaded automatically.

Built with **Next.js (App Router)** + **Tailwind CSS** and backed by **Firebase Authentication + Firestore**.

---

## Features 🌟

- **Daily mood logging (1–5)**
  Quickly select today’s mood (e.g., *Sad* → *Elated*) and save it.
- **Calendar visualization**
  View mood intensity per day in a month grid (color/gradient-based).
- **Dashboard insights**
  Calculates simple rollups like total days logged and average mood.
- **User accounts**
  Email/password signup + login via Firebase Auth.
- **Cloud sync (Firestore)**
  Mood entries are written to and read from Firestore per-user.

---

## Tech Stack 🧰

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Firebase** (Auth + Firestore)

---

## Screenshots / Demo 🖼️

<img width="1512" height="821" alt="image" src="https://github.com/user-attachments/assets/7ca56665-6c4c-4bfd-afb8-676a6ab9f814" />
<img width="1512" height="821" alt="image" src="https://github.com/user-attachments/assets/aa7ad087-0dba-40b6-a2b5-68b83e68c6a5" />
<img width="1512" height="821" alt="image" src="https://github.com/user-attachments/assets/415da5e2-ff14-4b32-a7fb-c3efe8e7a71d" />

---

## How to Run ⚙️

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Firebase env vars

Create a `.env.local` file in the project root and add your Firebase credentials:

```bash
NEXT_PUBLIC_API_KEY="YOUR_API_KEY"
NEXT_PUBLIC_AUTH_DOMAIN="YOUR_PROJECT_ID.firebaseapp.com"
NEXT_PUBLIC_PROJECT_ID="YOUR_PROJECT_ID"
NEXT_PUBLIC_STORAGE_BUCKET="YOUR_PROJECT_ID.appspot.com"
NEXT_PUBLIC_MESSAGING_SENDER_ID="YOUR_SENDER_ID"
NEXT_PUBLIC_APP_ID="YOUR_APP_ID"
```

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Firebase Setup Notes 🔥

1. **Go to the Firebase Console.**
2. **Enable Authentication:**
   - Select *Sign-in method* → *Email/Password* → Enable.
3. **Create Firestore Database:**
   - Start in "Test Mode" or configure rules to allow authenticated read/write.

### Data Model

User mood entries are stored under `users/{uid}`. To keep the document size manageable and easy to query, data is nested by year, then month, then day.

**Structure:**

```json
{
  "2026": {
    "1": {
      "17": 4,
      "18": 5
    }
  }
}
```

---

## Project Structure 🗂️

```text
app/
├── page.js              # Home page
├── layout.js            # Global layout + metadata
└── dashboard/
    └── page.js          # Dashboard route (protected)

components/
├── Calendar.js          # Month grid mood visual
├── Dashboard.js         # Mood input + stats + Firestore writes
└── Login.js             # Auth UI (login/register toggle)

context/
└── AuthContext.js       # Auth state + user data loading

utils/
├── index.js             # Color gradients + demo mapping
└── firebase.js          # Firebase init (env-based)
```

---

## Development Scripts 🖥️

| Command              | Description                 |
| :------------------- | :-------------------------- |
| `npm run dev`        | Start development server    |
| `npm run build`      | Build for production        |
| `npm run start`      | Run production server       |
| `npm run lint`       | Run ESLint                  |
| `npm run format`     | Check Prettier formatting   |
| `npm run format:fix` | Fix Prettier formatting     |

---

## Learning Outcomes 🧠

- **Next.js App Router:** Built using reusable components and route-based layouts.
- **Firebase Integration:** Implemented authentication + user-scoped data with Firebase Auth and Firestore.
- **Data Modeling:** Designed a simple, extensible time-series data shape (year/month/day) and safely merged updates.

---

## Roadmap / Proposed Improvements 💭

- [ ] **Better analytics:** Streaks, mood trends, per-month averages, and comparisons.
- [ ] **Mood notes:** Optional text journal per day (with privacy controls).
- [ ] **Timezone-safe handling:** Ensure "today" boundaries are consistent across client devices.
- [ ] **UI/UX upgrades:** Improve accessibility, keyboard navigation, and mobile ergonomics.
- [ ] **Sharing/export:** Export data to CSV/JSON or generate printable summaries.

---

## Contributing 🤝

Issues and PRs are welcome. For major changes, please open an issue first to discuss the direction.

## License 🔑

MIT

## Author ✍️

Created by **TeriYeaki**.
