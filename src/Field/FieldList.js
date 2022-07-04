import React from 'react';
import FieldItem from "./FieldItem";

function FieldList(props) {
    return(
        <ul>
            {props.fields.map(field => {
                return <FieldItem field={field} key={field.id} />
            })}
        </ul>
    )
}

export default FieldList;