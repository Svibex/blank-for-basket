import React, {useState} from "react";
import PropTypes from "prop-types";

function AddField({ onCreate }) {
    const [index, setIndex] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    
    function submitHandler(event) {
        event.preventDefault()

        if (!isNaN(+name) || !name) {
            alert("Введите корректное наименование товара")
        }
        else if (isNaN(+index) || !index) {
            alert("Введите корректный идентификатор")
        }
        else if (isNaN(+price) || !price) {
            alert("Введите корректную стоимость")
        }
        else {
            onCreate(index, name, price)
        }
    }

    return (
        <>
            <h2>Добавить товар в корзину:</h2>
            <form>
                <input placeholder="Идентификатор"
                    value={index} onChange={event => setIndex(event.target.value)} />
                <input placeholder="Наименование товара"
                    value={name} onChange={event => setName(event.target.value)} />
                <input placeholder="Стоимость"
                    value={price} onChange={event => setPrice(event.target.value)}  />
                <button className="buttonSubmit" type="submit" onClick={submitHandler}>Добавить товар</button>
            </form>
        </>
    )

}

AddField.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddField;