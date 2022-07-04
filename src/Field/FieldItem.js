import React from "react";
import PropTypes from "prop-types";

function FieldItem({ field, id }) {
    return (
        <tr>
            <td>{id+1} </td>
            <td>{field.index}</td>
            <td>{field.name}</td>
            <td>{field.price}</td>
            <td><button>&times;</button></td>
        </tr>
    )
}

FieldItem.propTypes = {
    field: PropTypes.object.isRequired,
    id: PropTypes.number
}

export default FieldItem;