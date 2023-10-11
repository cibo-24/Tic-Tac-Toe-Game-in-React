import { useState } from "react";
import '../App.css';
// react-dev'de square

export default function Board ({value, onSquareClick}) {
   return (
    // kullanıcı sol üst kareye tıkladığında  onClick prob fonksiyonu çalışır.
    <button className="square" onClick={onSquareClick}>{value}</button>
   )
}