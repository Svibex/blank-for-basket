import React, {useState} from "react";
import PropTypes from "prop-types";

function Sales({ updateSale, removeSales, isDisabled }) {
    const [sale, setSale] = useState("");
    const [isSetBtnDisabled, setSetBtnDisabled] = useState(true);
    const [isDelBtnDisabled, setDelBtnDisabled] = useState(true);

    function submitHandler(event) {
        event.preventDefault();

        if (sale>=0 && sale<=100) {
            updateSale(sale);
            setSale('');
            setSetBtnDisabled(true);
            setDelBtnDisabled(false);
        }
    }

    function onChangeHandler(event) {
        const value = event.target.value;
        if (value<=100) {
            setSale(value);
        }
        if (value === '') setSetBtnDisabled(true);
        else setSetBtnDisabled(false);
    }

    function removeBtnHandler() {
        removeSales();
        setDelBtnDisabled(true);
    }

    return(
        <div>
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
                        type="button"
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
                        Убрать скидки
                    </button>
                </div>
            </form>

        </div>
    )
}

Sales.propTypes = {
    updateSale: PropTypes.func.isRequired,
    removeSales: PropTypes.func.isRequired
}

export default Sales;