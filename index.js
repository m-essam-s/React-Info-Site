import React from "react"
import ReactDOM from "react-dom"

function ReactLogo (){
    return (<img src="./react-logo.png" width="40px" />)
}

function Header () {
    return (<h1>Fun facts about React</h1>)
}

function List () {
    return (
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    )
}

function HomePage (){
    return (
        <>
        <ReactLogo/>
        <Header/>
        <List/>
        </>
    )
}

ReactDOM.render(<HomePage/>, document.getElementById("root"))