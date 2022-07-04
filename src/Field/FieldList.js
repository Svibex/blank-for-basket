import React from 'react';
import FieldItem from "./FieldItem";
import PropTypes from "prop-types";

function FieldList(props) {
    return(
        <ul>
            {props.fields.map((field, id) => {
                return <FieldItem field={field} key={field.id} id={id}/>
            })}
        </ul>
    )
}

FieldList.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FieldList;