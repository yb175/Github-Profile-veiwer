import React, { useEffect, useState } from "react";
import DataNotFound from "./notFound";
function Body(){
    const [users,getUser] = useState([]);
    const [n,getn] = useState("");
    let [error,setError] =useState(false) ;
    let [uNameInput,getUnameInput] = useState("");

    // For retrivel of data of n users
    async function getNUser(n){
        try{
        // fetching data
        const response = await fetch(`https://api.github.com/users?since=${Math.floor(Math.random()*1000)}&per_page=${n}`)
        if(!response.ok){
            throw new Error("Error detected");
        }
        // converting to json
        const data = await response.json() ;

        // updating
        getUser(data);
        }
        catch{
            setError(true);
            getUser([]);
        }
    }
    async function getUserName(uname){
        try{
        const response = await fetch(`https://api.github.com/users/${uname}`)
        if(!response.ok){
            throw new Error("Error detected");
        }
        const data = await response.json();
        getUser([data]);
        }
        catch{
            setError(true);
            getUser([])
        }
    }
    // Initial call
    useEffect(()=>{
        getNUser(10);
    },[])
    const handleUname = (name)=>{
        getUnameInput(name)
    }
    // Controlled changes
    const handleChange = (num)=>{
        getn(num);
    }
    if(error==true) return <DataNotFound></DataNotFound>
    return (
        <div id="body">
        <span>
        {/*updating changes on changing input */}
        <input placeholder="Enter Number of users" type="text" 
        onChange={(e)=>{
            handleChange(Number(e.target.value))
        }} value={n === 0 ? '' : n}></input>

        {/* submit button */}
        <button onClick={()=>{
            getNUser(n);
        }} id="btn">Submit</button>
        </span>

        <span>
        {/* Search User */}
        <input placeholder="Enter user id" type="text" 
        onChange={(e)=>{
            handleUname(e.target.value)
        }} value={uNameInput}></input>

        {/* submit button */}
        <button onClick={()=>{
            getUserName(uNameInput);
        }} id="btn">Submit</button>
        </span>

        <div id="container">
        <br/>
        {
        Array.isArray(users) && users.map((udata)=>{
            return(
                <div id="card" key={udata["id"]} onClick={()=>{
                    window.location.href = udata["html_url"];
                }}>
                    <img src={udata["avatar_url"]}/>
                    <div id="detail">
                        <h2>{udata["login"]}</h2>
                        <h3><a href={udata["html_url"]}>{udata["html_url"]}</a></h3>
                    </div>
                </div>
            )
        })
        }
        </div>
        </div>
    )
}

export default Body ;