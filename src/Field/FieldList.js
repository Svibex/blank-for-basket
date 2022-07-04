import React from 'react';
import FieldItem from "./FieldItem";
import PropTypes from "prop-types";

function FieldList(props) {
    return(
        <table>
            <tr>
                <td>№ позиции</td>
                <td>ID товара</td>
                <td>Наименование товара</td>
                <td>цена</td>
                <td>Удалить товар</td>
            </tr>
            {props.fields.map((field, id) => {
                return <FieldItem field={field} key={field.id} id={id}/>
            })}
        </table>
    )
}

FieldList.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FieldList;