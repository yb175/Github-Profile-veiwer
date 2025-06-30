<<<<<<< HEAD
<!-- # API KEYS
https://api.github.com/users?per_page=${count}
https://api.github.com/users/taylorotwell
https://api.github.com/users?since=6000&per_page=20
=======
# GitHub Profile Viewer
>>>>>>> bd60422b80e2c02e76cb7fee7a67f666fb5c6b11

A **GitHub Profile Viewer** built using **React**. This project allows users to:
- View random GitHub profiles by entering the number of users they want to fetch.
- Search and display GitHub profiles by entering a specific username.

This project uses:
- React functional components
- React Hooks: `useState` and `useEffect`
- Parcel as the project bundler
- GitHub REST API to fetch user data

## 📂 Project Repository
[GitHub Repo](https://github.com/yb175/Github-Profile-veiwer)

---

## 🚀 Features
- ✅ Fetch multiple random GitHub user profiles by specifying the number.
- ✅ Search for a specific GitHub user by username.
- ✅ Click on user cards to directly visit their GitHub profile.
- ✅ Error handling for invalid usernames or API fetch failures.
- ✅ Responsive and user-friendly interface.

---

## 📚 Concepts Learned
- React Hooks:  
  - `useState` for state management.
  - `useEffect` for API calls when the component loads.
- Fetch API to retrieve data from GitHub.
- Controlled components in React (input fields).
- Error handling in asynchronous requests.
- Parcel as a lightweight bundler for quick React project setup.

---

## 🔧 Tech Stack
- **Frontend:** React.js
- **Bundler:** Parcel
- **API:** GitHub REST API

---

## 📂 Folder Structure
```plaintext
Github-Profile-veiwer/
│
├── src/
│   ├── Body.js         // Main component with logic
│   ├── notFound.js     // Error component (DataNotFound)
│   └── index.html      // Entry HTML file
│
├── package.json        // Project configuration and dependencies
├── README.md           // Project documentation
└── index.js            // App entry point
```

---

## 📦 Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/yb175/Github-Profile-veiwer.git
```

2. **Navigate to the project folder:**
```bash
cd Github-Profile-veiwer
```

3. **Install dependencies:**
```bash
npm install
```

4. **Run the project using Parcel:**
```bash
npx parcel src/index.html
```

5. **Visit the app in your browser:**
```
http://localhost:1234/
```

---

## 🎮 How to Use

### 🔹 Fetch Random GitHub Users:
1. Enter the **number of users** you want to fetch in the first input box.
2. Click the **Submit** button.
3. A list of GitHub profiles will be displayed.

### 🔹 Search by Username:
1. Enter the **GitHub username** in the second input box.
2. Click the **Submit** button.
3. The specific user profile will be displayed.

### 🔹 Navigate to GitHub:
Click on any user card to directly open their GitHub profile.

---

## 🚨 Error Handling
- If an invalid username is entered or the API request fails, the **DataNotFound** component is displayed.

---

## 📜 Key Files Explanation

### Body.js (Main Logic)
- **State Variables:**
  - `users` → List of GitHub users.
  - `n` → Number of users to fetch.
  - `uNameInput` → Username input field.
  - `error` → Error flag to control UI rendering.

- **Main Functions:**
  - `getNUser(n)` → Fetches `n` random GitHub users.
  - `getUserName(uname)` → Fetches a GitHub user by username.
  - `handleChange(num)` → Controlled input for number of users.
  - `handleUname(name)` → Controlled input for username.

- **useEffect:**  
  Fetches 10 random users when the component loads initially.

---

## 🛠️ Improvements You Can Try
- Add **loading spinners** while fetching data.
- Improve UI using **CSS libraries** like Tailwind or Bootstrap.
- Add **pagination** for browsing more users.
- Show additional user details (bio, followers, repositories).
- Handle edge cases (like empty input fields) more gracefully.
- Add **debounce** to search for better performance.

---

## ✅ Learnings Recap
- ✅ `useState` for managing local state.
- ✅ `useEffect` for side effects like API calls.
- ✅ Asynchronous data fetching using `fetch`.
- ✅ Error handling in async/await.
- ✅ Parcel bundler setup and usage.
- ✅ Controlled input fields in React.

---

## 💃 License
This project is open-source and available under the [MIT License](https://choosealicense.com/licenses/mit/).

<<<<<<< HEAD
## Aaj ki class may be bhari lag sakti h but isko baad mein khud implement karenge  -->


# Github Profile Viewer

A React-based web application to view Github user profiles. Users can:
- Fetch and display a list of Github users by entering the number of users they want to see.
- Search for a specific Github user by username.
- Click on any user card to visit their Github profile.

This project demonstrates the use of React hooks (`useState`, `useEffect`), controlled components, async data fetching, and error handling. The project uses [Parcel](https://parceljs.org/) as the build tool for fast development and easy bundling.

---

## Features

- **Fetch Multiple Users:** Enter a number to fetch that many random Github users.
- **Search by Username:** Enter a Github username to fetch and display that user's profile.
- **Profile Cards:** Each user is shown as a card with their avatar, username, and profile link.
- **Clickable Cards:** Clicking a card opens the user's Github profile in a new tab.
- **Error Handling:** If a user is not found or an error occurs, a custom error component is shown.
- **Responsive UI:** Simple and clean layout for easy use.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Parcel](https://parceljs.org/) (install globally with `npm install -g parcel` or use as a dev dependency)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yb175/Github-Profile-veiwer.git
   cd Github-Profile-veiwer/Day9
=======
>>>>>>> bd60422b80e2c02e76cb7fee7a67f666fb5c6b11
