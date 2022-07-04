import React from 'react';
import FieldList from "./Field/FieldList";
import "./styles/style.css";
import Contex from "./context";
import AddField from "./Field/AddField";

function App() {
  const [fields, setFields] = React.useState([
    {id:1, index:'110', name:'Телефон', price:'10000', sale: ''},
    {id:2, index:'111', name:'Чайник', price:'2000', sale: ''},
    {id:3, index:'112', name:'Холодильник', price:'20000', sale: ''},
    {id:4, index:'113', name:'Микроволновка', price:'5000', sale: ''},
  ]);

  function deleteField(id) {
      setFields(fields.filter(field => field.id !== id)
  )}
  
  function addField(index, name, price) {
    setFields(fields.concat([{
        index,
        name,
        price,
        sale: '',
        id: Date.now()
    }]))
  }
  
  const amount = fields.reduce((sum, current) => +sum + +(current.price || 0), 0);
  const amountSale = fields.reduce((sum, current) => +sum + +(current.sale || 0), 0);

  return (
      <Contex.Provider value={{ deleteField }}>
        <div className="body">
            <h1>Корзина</h1>
            <AddField onCreate={addField} />
            <span>
                <h3>Количество товаров в корзине: {fields.length}</h3>
                <h3>Стоимость товаров в корзине:
                    {fields.sale ? amount + amountSale : amount} рублей</h3>
            </span>
            {fields.length ? <FieldList fields={fields}/> : <h2>Список пуст</h2>}
        </div>
      </Contex.Provider>
  );
}

export default App;
