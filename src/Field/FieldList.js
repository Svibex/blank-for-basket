import React from 'react';
import FieldItem from "./FieldItem";
import PropTypes from "prop-types";

function FieldList(props) {
    return(
        <table>
            <thead>
                <tr>
                    <th>№ позиции</th>
                    <th>ID товара</th>
                    <th>Наименование товара</th>
                    <th>Цена</th>
                    <th>Скидка</th>
                    <th>Удалить товар</th>
                </tr>
            </thead>
            <tbody>
            {props.fields.map((field, id) => {
                return <FieldItem field={field} key={field.id} id={id}/>
            })}
            </tbody>
        </table>
    )
}

FieldList.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FieldList;