import React, {useContext} from "react";
import PropTypes from "prop-types";
import Contex from "../context";

function FieldItem({ field, id }) {
    const { deleteField } = useContext(Contex)
    return (
        <tr>
            <td>{id+1} </td>
            <td>{field.index}</td>
            <td>{field.name}</td>
            <td className={field.sale ? "line" : "deleteLine"}>{field.price}</td>
            <td className={field.sale ? "priceSale" : ""}>{field.sale ? field.sale : "Нет"}</td>
            <td>
                <button
                    className="buttonDelete"
                    onClick={() => deleteField(field.id)}>
                    &times;
                </button>
            </td>
        </tr>
    )
}

FieldItem.propTypes = {
    field: PropTypes.object.isRequired,
    id: PropTypes.number
}

export default FieldItem;