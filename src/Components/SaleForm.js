import React, {useEffect, useState} from "react";

function SaleForm({updateSale, removeSales, isDisabled}) {
    const [sale, setSale] = useState("");
    const [isSetBtnDisabled, setSetBtnDisabled] = useState(true);
    const [isDelBtnDisabled, setDelBtnDisabled] = useState(true);

    function submitHandler(event) {
        event.preventDefault();
        updateSale(+sale);
        setSale('');
        setDelBtnDisabled(false);
    }

    function onChangeHandler(event) {
        const value = event.target.value;
        if (value > 0 && value <= 100 || value === '') {
            setSale(value);
        }
    }

    function removeBtnHandler() {
        removeSales();
        setDelBtnDisabled(true);
    }

    useEffect(() => {
        if (sale === '') setSetBtnDisabled(true);
        else setSetBtnDisabled(false);
    }, [sale])

    return (
        <>
            <h2>Управление скидками</h2>
            <form className="sales">
                <input placeholder="Скидка (от 0 до 100)"
                       value={sale}
                       onChange={onChangeHandler}
                       disabled={isDisabled}
                />
                <div>
                    <button
                        className={isSetBtnDisabled ? "disabled" : "buttonSubmit"}
                        type="submit"
                        onClick={submitHandler}
                        disabled={isSetBtnDisabled}
                    >
                        Установить скидку
                    </button>
                    <button
                        className={isDelBtnDisabled ? "disabled" : "buttonDelete"}
                        id="deleteSales"
                        type="button"
                        onClick={removeBtnHandler}
                        disabled={isDelBtnDisabled}
                    >
                        Убрать скидку
                    </button>
                </div>
            </form>

        </>
    )
}

export default SaleForm;