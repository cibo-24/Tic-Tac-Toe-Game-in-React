import { useState } from "react";
import '../App.css';
export default function Board ({value}) {
    const [value, setValue] = useState(null);
    function handleClick () {
        setValue('X');
    }
   return (
    <button 
    className="square"
    onClick={handleClick}
    >
    {value}
    </button>
   )
}