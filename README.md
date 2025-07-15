# S73_Ayush_Capstone_GymTracker47


## GYM WORKOUT TRACKER WEB-SITE ##


Let’s build your 8-week **Gym Workout Tracker Website (Capstone Project)** using the **MERN Stack** (MongoDB, Express.js, React, Node.js) — think of this like crafting the digital equivalent of a gym bro’s best friend. Here's a cleanly organized, production-style roadmap that you can directly update in your `README.md`.

---

## 🏋️‍♂️ Gym Workout Tracker Website - 8 Week Capstone Plan (MERN Stack)

> 💡 **Project Goal:** A full-stack web app where users can track workouts, upload progress pictures, watch exercise videos, interact with posts (like, comment, share), and receive email notifications — all wrapped in a sleek UI inspired by **Lyfta**.

---

### 🛠️ Tech Stack

* **Frontend:** React + Tailwind CSS + React Router DOM + Axios
* **Backend:** Node.js + Express + MongoDB (Mongoose ODM)
* **Authentication:** JWT + bcrypt + Google OAuth
* **Storage:** Cloudinary / Firebase (for images)
* **Emailing:** Nodemailer
* **Deployment:** Vercel (Frontend) + Render / Railway (Backend) + MongoDB Atlas

---

## 📆 8-Week Execution Plan

---

### ✅ **Week 1: Project Setup + Auth System**

> Get the skeleton right before adding muscles.

* [ ] Setup project structure: `frontend/` & `backend/`
* [ ] Initialize GitHub repo, `.gitignore`, environment variables (`.env`)
* [ ] Backend:

  * [ ] Express server with MongoDB connection
  * [ ] Auth Routes: Signup/Login (Email + Password)
  * [ ] JWT token generation + bcrypt hashing
* [ ] Frontend:

  * [ ] Pages folder: `Login.jsx`, `Signup.jsx`
  * [ ] Forms with validation
  * [ ] Axios setup for API calls
* [ ] Google OAuth integration (optional but 🔥)

---

### ✅ **Week 2: Home + Profile Pages (Frontend MVP)**

> First impressions matter. Build the homepage like it’s your IG feed.

* [ ] Design Home page UI: welcome message, trending workouts
* [ ] Design Profile page:

  * [ ] User info (Name, Age, Weight, Goal, Profile Pic)
  * [ ] Edit profile option
* [ ] Upload Profile Picture using Cloudinary / Firebase
* [ ] Use `react-router-dom` for page navigation
* [ ] Add Navbar + Bottom Navigation (Lyfta style)

---

### ✅ **Week 3: Workout Tracker Core Feature (CRUD Workouts)**

> Time to log those PRs and pump numbers into the database.

* [ ] Backend:

  * [ ] Create Workout Model: `title, sets, reps, weight, date, notes`
  * [ ] Routes for Create, Read, Update, Delete workouts
* [ ] Frontend:

  * [ ] Workout Log form with validation
  * [ ] Workout history table / list with filters (date/muscle group)
  * [ ] Edit/Delete functionality

---

### ✅ **Week 4: Workout Feed + Social Features (Like/Comment/Share)**

> Let's make the gym a social hangout — virtually.

* [ ] Backend:

  * [ ] Post model: `image, caption, likes, comments, userRef`
  * [ ] Routes: create post, get all posts, like/unlike, comment
* [ ] Frontend:

  * [ ] Upload post (image + caption)
  * [ ] Feed of all posts (reverse chronological)
  * [ ] Like / Comment functionality
  * [ ] Share button (optional)

---

### ✅ **Week 5: Exercise Video Page + Filtering**

> Form check time. Visual learning FTW.

* [ ] Create Exercise model: `name, muscle group, videoURL`
* [ ] Seed DB with 10–15 exercise videos (from YouTube)
* [ ] Frontend:

  * [ ] Videos grid with categories
  * [ ] Filter by muscle group (dropdown or tabs)

---

### ✅ **Week 6: Email Notifications + Progress Reminder**

> The “Bro, you forgot leg day” alert system.

* [ ] Use Nodemailer for:

  * [ ] Signup confirmation
  * [ ] Weekly workout summary
  * [ ] Daily workout reminders (cron job or trigger-based)
* [ ] Let users enable/disable notifications from profile
* [ ] Setup template emails (HTML)

---

### ✅ **Week 7: Testing + Polishing UI + Responsive Design**

> Fix those broken reps. Final form loading…

* [ ] Test all backend routes with Postman
* [ ] Add loading states & error handling on frontend
* [ ] Make design responsive (mobile-first!)
* [ ] Polish layout with Tailwind (use `shadcn/ui` if needed)
* [ ] Add toast notifications (`react-hot-toast` or similar)

---

### ✅ **Week 8: Deployment + README + Demo Video**

> Push to production. Let the world see your gains.

* [ ] Deploy frontend to **Vercel**
* [ ] Deploy backend to **Render / Railway**
* [ ] Setup MongoDB Atlas
* [ ] Setup environment variables (PROD)
* [ ] Final README with:

  * [ ] Screenshots
  * [ ] Live demo link
  * [ ] Tech stack used
  * [ ] Features list
* [ ] Record a 2–3 min demo walkthrough

