import React from "react";
import Block from "./Block"


export default function AboutMe(props) {
    return (
        <Block id="about-me">
            <h2 class="display-4 text-success">About Me</h2>
                <img src={props.image} />
                <hr></hr>
                    <article>
                <ol>
                    { props.bio.map(item => {
                        const firstWord = item.split(' ')[0]
                        item = item.replace(firstWord, '')
                        return <li><p><strong>{firstWord}</strong>{item}</p></li>
                    })}
                </ol>
            </article>
        </Block>
    )
}