import React, {useState} from "react";
import {useForm} from "react-hook-form";
import PropTypes from "prop-types";

function AddField({onCreate}) {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        onCreate(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label> Идентификатор:
                <input
                    {...register('index', {
                        required: true
                    })} />
            </label>
            <div>{errors?.index && <p>Заполните идентификатор</p>}</div>
            <label> Наименование:
                <input
                    {...register('name', {
                        required: true
                    })} />
            </label>
            <div>{errors?.name && <p>Заполните наименование</p>}</div>
            <label> Стоимость:
                <input
                    {...register('price', {
                        required: true
                    })} />
            </label>
            <div>{errors?.price && <p>Заполните стоимость</p>}</div>
            <input type="submit" />
        </form>
    )

}

AddField.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddField;