import React from 'react';

const fancyStyle = {
    border: "1px solid red",
    margin: "5px"
}


const FancyBorder = (props) => {
    return (
        <div style={ fancyStyle }>
            {props.children}
        </div>
    )
}

export default FancyBorder;