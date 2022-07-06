import React from 'react';
import FieldItem from "./FieldItem";

function FieldList({fields, deleteField}) {
    return(
        <table>
            <thead>
                <tr>
                    <th>№ позиции</th>
                    <th>ID товара</th>
                    <th>Название товара</th>
                    <th>Цена</th>
                    <th>Цена со скидкой</th>
                    <th>Удалить товар</th>
                </tr>
            </thead>
            <tbody>
            {fields.map((field, index) => {
                return <FieldItem field={field} deleteField={deleteField} key={index} />
            })}
            </tbody>
        </table>
    )
}

export default FieldList;