import React from 'react';
import FieldList from "./Field/FieldList";
import "./styles/style.css";
import Contex from "./context";

function App() {
  const [fields, setFields] = React.useState([
    {id:1, index:110, name:'Телефон', price:10000},
    {id:2, index:111, name:'Чайник', price:2000},
    {id:3, index:112, name:'Холодильник', price:20000},
    {id:4, index:113, name:'Микроволновка', price:5000},
  ]);

  function deleteField(id) {
      setFields(fields.filter(field => field.id !== id)
  )}
  
  const amount = fields.reduce((sum, current) => sum + (current.price || 0), 0);

  return (
      <Contex.Provider value={{ deleteField }}>
        <body>
            <h1>Корзина</h1>
            <span>
                <h2>Количество товаров в корзине: {fields.length}</h2>
                <h2>Стоимость товаров в корзине: {amount}</h2>
            </span>
            {fields.length ? <FieldList fields={fields}/> : <h2>Список пуст</h2>}
        </body>
      </Contex.Provider>
  );
}

export default App;
