import React from 'react';
import FieldList from "./Field/FieldList";

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
        <FieldList fields={fields}/>
    </>
  );
}

export default App;
