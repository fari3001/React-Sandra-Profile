import React from 'react';
import './App.css';
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import FavFoods from "./components/FavFoods"
import Contact from "./components/Contact"
import Thanks from "./components/ThankYou"


const person = ["Pop culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast. Thinker. Tv specialist.",
"Friendly web maven. Bacon lover. General internet specialist. Incurable travel scholar.",
"Subtly charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar.",
"Unable to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist."
]

function App() {
  return (
<div>
    <Header name="Melissa" />
    <AboutMe image="https://randomuser.me/api/portraits/women/8.jpg" bio={person} />
    <hr></hr>
    <FavFoods />
    <hr></hr>
    <Contact />
    <hr></hr>
    <Thanks />
</div>
  );
}

export default App;
