import React from "react";
import PropTypes from "prop-types";

function FieldItem({ field, id }) {
    return (
        <li>
            <strong>{id+1}</strong>
            {field.index + field.name + field.price}
        </li>
    )
}

FieldItem.propTypes = {
    field: PropTypes.object.isRequired,
    id: PropTypes.number
}

export default FieldItem;