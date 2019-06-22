import React from 'react';

const styles = {
    backgroundColor: 'gray',
    padding: '1rem',
    margin: '1rem',
    border: '1px solid black',
    borderRadius: '0.5rem'
}

// const headings = 
// this will be put into your block(can be named whatever). Class or whatever can be added inline
const Block = (props) => {
    return (
        <div style={props.styles} id={props.id}> 
            <h2>{props.title}</h2> 
            <hr></hr>
            {props.children}
        </div>
    )
}

export default Block