import React, { useState } from 'react';

const _arr = ["tomato", "orange", "lemon", "apple"];

const FruitItem = React.forwardRef((props, ref) => {
    const [ currentColor, setCurrentColor ] = useState("black");

    const handleOnMouseover = () => {
        setCurrentColor("red");
    }

    const handleOnMouseout = () => {
        setCurrentColor("black")
    }

    return (
        <li 
            ref={ ref }
            onMouseOver={ handleOnMouseover }
            onMouseOut={ handleOnMouseout }
            style={{ color: currentColor }}>
            { props.fruit }
        </li>);
    
});

const FruitList = () => {
    const ref = React.createRef();
    const listItems = _arr.map((fruit, n) => {
        return (<FruitItem key={ n } fruit={ fruit }></FruitItem>); 
    });

    const handleOnClick = () => {
        console.log(ref.current.key);
    }

    return <ul ref={ ref } onClick={ handleOnClick }>{ listItems }</ul>
}


export default FruitList;