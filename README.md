# Launched Global - Student Demo & Verification Portal

A modern, responsive React + Tailwind CSS web portal built for **Launched Global** ([launchedglobal.in](https://launchedglobal.in)) students to watch demonstration walkthroughs and complete their milestone submissions.

---

## 🎯 Features

- **Brand Theme Matched**: Styled with Launched Global's signature `#E85749` primary color, dark sleek aesthetic, typography, and official logo.
- **Three Core Demonstration Cards**:
  1. **Google Review Video Guide**
  2. **Reddit Post Video Guide**
  3. **LinkedIn Tag Video Guide**
- **Dual Video Mode**:
  - **Embedded Google Drive Player**: Streams directly from your Google Drive folder link.
  - **Public Folder Video Toggle**: Easily drop `.mp4` video files into the `public/` folder (`/demo-google-review.mp4`, etc.) and toggle directly inside the player.
- **Interactive Controls**:
  - One-click copy link for students.
  - Direct Drive external link button.
  - Step-by-step checklist tailored to each submission type.
- **Vercel Ready**: Pure frontend with zero backend dependencies, ready to deploy in under 60 seconds.

---

## 🚀 How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

---

## 📁 How to Add Local Videos to `public/`

If you want to use local video files instead of (or alongside) Google Drive:
1. Place your video files into the `public/` folder:
   - `public/demo-google-review.mp4`
   - `public/demo-reddit-post.mp4`
   - `public/demo-linkedin-tag.mp4`
2. Open the portal and click the **"● Public Folder Video"** toggle button right above the video player!
3. To customize the links or filenames, edit the `DEMO_GUIDES` array in [`src/App.jsx`](src/App.jsx).

---

## 🌐 Deploy to Vercel

### Option 1: Using Vercel CLI
```bash
npx vercel
```

### Option 2: Using GitHub + Vercel Dashboard
1. Push this directory to your GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**! Once completed, copy the generated link (e.g. `https://your-project.vercel.app`) and share it with your students.
