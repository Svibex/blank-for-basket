import React from "react";

function FieldItem({ field }) {
    return (
        <li>{field.index + field.name + field.price}</li>
    )
}

export default FieldItem;