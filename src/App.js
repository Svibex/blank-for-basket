import React, {useEffect, useState} from "react";
import FieldList from "./Components/FieldList";
import "./styles/style.css";
import Form from "./Components/Form";
import SaleForm from "./Components/SaleForm";

function App() {
    const [fields, setFields] = useState([
        {index: 1, id: '110', name: 'Телефон', price: 10000, sale: ''},
        {index: 2, id: '111', name: 'Чайник', price: 2000, sale: ''},
        {index: 3, id: '112', name: 'Холодильник', price: 20000, sale: ''},
        {index: 4, id: '113', name: 'Микроволновка', price: 5000, sale: ''},
    ]);

    const [isDisabled, setIsDisabled] = useState(fields.length === 0);
    const [sale, setSale] = useState(null);

    useEffect(() => {
        if (fields.length !== 0) setIsDisabled(false);
        else setIsDisabled(true);

    }, [fields]);

    function deleteField(id) {
        setFields(fields.filter(field => field.id !== id));
    }

    function addField(data) {
        setFields([...fields, {...data, sale: '', index: fields.length+1}]);
        addSales(sale);
    }

    function addSales(sale) {
        setSale(sale);
        setFields((fields) => fields.map(item => {
            return {...item, sale: item.price - (item.price * sale / 100)}
        }))
    }

    function removeSales() {
        setFields((fields) => fields.map(item => {
            return {...item, sale: ''}
        }));
        setSale(null);
    }

    const amount = fields.reduce((sum, current) => sum + +current.price, 0);
    const amountSale = fields.reduce((sum, current) => sum + current.sale, 0);

    return (
        <>
            <h1>Управление корзиной</h1>
            <Form onCreate={addField}/>
            <SaleForm updateSale={addSales} removeSales={removeSales} isDisabled={isDisabled}/>
            <div className="statistics">
                <h3>Количество товаров в корзине: {fields.length}</h3>
                <h3>Стоимость товаров в корзине: &nbsp;
                    {amountSale > 0 ?
                        <div className="price"><p className="line">{amount}</p> &nbsp;<p
                            className="priceSale">{amountSale}</p></div>
                        : <p>{amount}</p>}
                    &nbsp;рублей
                </h3>
            </div>
            <h2>Ваша корзина</h2>
            {fields.length ? <FieldList fields={fields} deleteField={deleteField}/> : <h2>Список пуст</h2>}
        </>
    );
}

export default App;
