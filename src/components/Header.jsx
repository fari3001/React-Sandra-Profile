import React from "react";
import Nav from './Nav'

const menuItems = [
    {title: "About Me", link: "#about-me"},
    {title: "Favorite Foods", link: "#FavFoods"},
    {title: "Contact Me", link: "#contact"},
]

export default function Header(props) {
    return (
        <div>
            <header>
                <h1 id="home" class="display-3 mb-0 text-info">Welcome To {props.name}'s Profile Page</h1>
                <Nav items={menuItems}/>
            </header>
        </div>
    )
} 