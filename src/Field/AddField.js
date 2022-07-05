import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

function AddField({onCreate}) {
    const [data, setData] = useState({index: '', name: '', price: ''});
    const [isDisabled, setIsDisabled] = useState(true);

    function submitHandler(event) {
        event.preventDefault()
        setIsDisabled(true);
        onCreate(data.index, data.name, data.price);
        setData((prevState) => ({...prevState, index: '', name: '', price: ''}));
    }

    function onChangeHandler(event) {
        const { value, name } = event.target;
        setData(prevState => ({...prevState,[name]: value}));
    }

    useEffect(() => {
        if (data.index !== '' && data.name !== '' && data.price !== '') setIsDisabled(false);
        else setIsDisabled(true);
    }, [data])

    return (
        <>
            <h2>Добавить товар в корзину:</h2>
            <form>
                <input placeholder="Идентификатор"
                       value={data.index}
                       name="index"
                       onChange={onChangeHandler}
                />
                <input placeholder="Наименование товара"
                       value={data.name}
                       name="name"
                       onChange={onChangeHandler}
                />
                <input placeholder="Стоимость"
                       value={data.price}
                       name="price"
                       onChange={onChangeHandler}
                />
                <button className={isDisabled ? "disabled" : "buttonSubmit"}
                        type="submit"
                        onClick={submitHandler}
                        disabled={isDisabled}
                >Добавить товар
                </button>
            </form>
        </>
    )

}

AddField.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddField;