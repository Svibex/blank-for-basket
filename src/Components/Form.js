import React, {useState, useEffect} from "react";

function Form({onCreate}) {
    const [data, setData] = useState({id: '', name: '', price: ''});
    const [isDisabled, setIsDisabled] = useState(true);

    function submitHandler(event) {
        event.preventDefault();
        setIsDisabled(true);
        onCreate(data);
        setData(() => ({id: '', name: '', price: ''}));
    }

    function onChangeHandler(event) {
        const {value, name} = event.target;
        if(name === 'price') {
            if(!(/^[\d.]*$/.test(value)) || (value <= 0 && value !== '')) return;
        }
        setData(prevState => ({...prevState, [name]: value}));
    }


    useEffect(() => {
        if (data.id !== '' && data.name !== '' && data.price !== '') setIsDisabled(false);
        else setIsDisabled(true);
    }, [data])

    return (
        <>
            <h2>Добавить товар в корзину:</h2>
            <form>
                <input placeholder="Идентификатор товара"
                       value={data.id}
                       name="id"
                       onChange={onChangeHandler}
                />
                <input placeholder="Название товара"
                       value={data.name}
                       name="name"
                       onChange={onChangeHandler}
                />
                <input placeholder="Цена товара"
                       value={data.price}
                       name="price"
                       onChange={onChangeHandler}
                />
                <button className={isDisabled ? "disabled" : "buttonSubmit"}
                        type="submit"
                        onClick={submitHandler}
                        disabled={isDisabled}
                >Добавить
                </button>
            </form>
        </>
    )

}

export default Form;