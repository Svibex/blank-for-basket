import React, {useState} from "react";
import {useForm} from "react-hook-form";
import PropTypes from "prop-types";

function AddField( onCreate ) {
    const [index, setIndex] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (index & name && price) {
           onCreate(index, name, price)
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={index} onChange={event => setIndex(event.target.value)}/>
            <input value={name} onChange={event => setName(event.target.value)}/>
            <input value={price} onChange={event => setPrice(event.target.value)}/>
            <button type="submit">Добавить товар</button>
        </form>
    )

}

AddField.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddField;