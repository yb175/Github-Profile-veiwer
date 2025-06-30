# API KEYS
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

## Aaj ki class may be bhari lag sakti h but isko baad mein khud implement karenge 
