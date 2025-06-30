<!-- # API KEYS
https://api.github.com/users?per_page=${count}
https://api.github.com/users/taylorotwell
https://api.github.com/users?since=6000&per_page=20

```Javascript
function Body(){
    async function fetchData(){
        const response = fetch(`https://api.github.com/users?per_page=${10}`)
        const data = await response.json();
        console.log(data);
        return data ;
    }
    const data = fetchData();
    return (
        <>
            {
                data.map(()=>{
                    return (
                    <div>
                    
                    </div>)
                })
            }
        </>
    )
}
```
# Why this will not work ?



**Mota Mota UseEffect and UseEffect hi use karna h**

# Project Features
✅**Jitne user number daale utne users show karane h**

# ✅ Search bar ko react se control karo 
```javascript
<input placeholder="Enter Number of users" type="text" 
        onChange={(e)=>{
            handleChange(Number(e.target.value))
        }} value={n === 0 ? '' : n}></input>
```

# ✅ Photo bhi random karo 
# ✅Add try catch functionality 
# Use call back and ek aur functionality banani h data fetch karna h name k basis pe 

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