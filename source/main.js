import React from "react";
import ReactDOM from "react-dom/client"
import Header from './components/header'
import Body from "./components/body";
function GithubProfile(){
    return(
        <>
            <Header></Header>
            <Body></Body>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile></GithubProfile>);