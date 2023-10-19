"use client";

import { useState, useEffect } from "react";
import * as Yup from "yup"

export default function FieldBuilderWithValidation({
    fields,
    onSubmit,
    submitButton = false,
    submitButtonText = "Submit",
    submitButtonClassName = "",
    formSubmitLoading = false,
}) {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const schema = fields.reduce(
            (accumulator, currentValue) => ({
                ...accumulator,
                [currentValue.name]: currentValue.validation,
            }),
            {}
        );

        Yup.object(schema)
            .isValid(values)
            .then(valid => setIsFormValid(valid));
    }, [fields, values]);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleBlur = async (event) => {
        setTouched({
            ...touched,
            [event.target.name]: true,
        });

        const field = fields.find((field) => field.name === event.target.name);

        try {
            await field.validation.validate(event.target.value);
            setErrors({
                ...errors,
                [event.target.name]: "",
            });
        } catch (error) {
            setErrors({
                ...errors,
                [event.target.name]: error.message,
            });
        }
    };

    const handleSubmitButtonClicked = () => {
        handleSubmit()
    };

    const handleSubmit = async() => {
        const schema = fields.reduce(
            (accumulator, currentValue) => ({
                ...accumulator,
                [currentValue.name]: currentValue.validation,
            }),
            {}
        );

        try {
            await Yup.object(schema).validate(values, { abortEarly: false });
            onSubmit(values);
        } catch (error) {
            const newErrors = {};
            error.inner.forEach((e) => {
                newErrors[e.path] = e.message;
            });
            setErrors(newErrors);
        }
    }

    return (
        <>
            {fields.map((field) => (
                <div key={field.name}>
                    <div className={field.questionAndInputClassName}>
                        {field.question &&
                            <div className={field.labelClassName}>
                                {field.question}
                            </div>
                        }
                        <input
                            type={field.type || "text"}
                            name={field.name}
                            className={field.inputClassName}
                            style={field.style || {}}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[field.name] || ""}
                            placeholder={field.placeholder || ""}
                        />
                    </div>
                    {touched[field.name] && errors[field.name] && (
                        <div className={field.errorMessageClassName} style={{ color: "red" }}>{errors[field.name]}</div>
                    )}
                </div>
            ))}
            {submitButton && 
                <button 
                    onClick={handleSubmitButtonClicked}
                    className={submitButtonClassName}
                    disabled={!isFormValid || formSubmitLoading}>
                    {submitButtonText}
                </button>
            }
        </>
    );
}
