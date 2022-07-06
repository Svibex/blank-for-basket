import React from "react";

function FieldItem({ field, deleteField }) {

    const { index, name, sale, price, id } = field;

    return (
        <tr>
            <td>{index} </td>
            <td>{id}</td>
            <td>{name}</td>
            <td className={sale === '' ? "deleteLine" : "line"}>{price}</td>
            <td className={sale === '' ? "" : "priceSale"}>{sale === '' ? "Нет" : sale}</td>
            <td>
                <button
                    className="buttonDelete"
                    onClick={() => deleteField(id)}>
                    &times;
                </button>
            </td>
        </tr>
    )
}

export default FieldItem;