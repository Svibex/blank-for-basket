import React from 'react';
import FieldList from "./Field/FieldList";
import "./style.css"

function App() {
  const fields = [
    {id:1, index:110, name:'Телефон', price:'10000'},
    {id:2, index:111, name:'Чайник', price:'2000'},
    {id:3, index:112, name:'Холодильник', price:'20000'},
    {id:4, index:113, name:'Микроволновка', price:'5000'},
  ]

  return (
    <>
      <h1>Корзина</h1>
      <span>
        <h2>Количество товаров в корзине: </h2>
        <h2>Стоимость товаров в корзине: </h2>
      </span>
        <FieldList fields={fields}/>
    </>
  );
}

export default App;
