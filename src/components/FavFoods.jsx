import React from 'react';

const foods = [
        {
        title: <h4>Pizza</h4>,
        image: <img src="https://bit.ly/2rJ4rnn" />,
        time: <p>Best time to eat: <span>All the time</span></p>,
        place: <p>Best place: <span>Queen Margharitas</span></p>
        },

        {
        title: <h4>Quesadillas</h4>,
        image:<img src="https://bit.ly/2ryI6bZ" />,
        time: <p>Best time to eat: <span>Afternoon Siesta</span></p>,
        place: <p>Best place: <span>Mejico</span></p>
        },
  
        {
        title: <h4>Icecream Pancakes</h4>,
        image: <img src="https://bit.ly/2zUznp2" />,
        time: <p>Best time to eat: <span>Breaky</span></p>,
        place: <p>Best place: <span>Pancakes on the Rocks</span></p>
        },

        {
        title: <h4>Loaded Fries</h4>,
        image: <img src="https://bit.ly/2GdfYVK" />,
        time: <p>Best time to eat: <span>During the game</span></p>,
        place: <p>Best place: <span>My House</span></p>
        }
    ]

    export default function FavouriteFoods(props) {
                 const foodItems = foods.map(p => <Food title={p.title} image={p.image} time={p.time} place={p.place} />);
                 return <div id="FavFoods">{foodItems}</div>
    }

 function Food(props) {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.image}</div>
            <div>{props.time}</div>
            <div>{props.place}</div>
        </div>
    )
}


