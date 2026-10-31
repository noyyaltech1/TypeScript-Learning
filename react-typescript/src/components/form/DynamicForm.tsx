import React from 'react';
import type { FieldConfig } from './types';

import { FormRenderer } from './FormRender'
import { useForm } from './hooks/useForm';
type DynamicFormProps<T extends object> = {
    initialValues: T;
    fields: FieldConfig<T>[];
    onSubmit?: (values: T) => void;
};

export const DynamicForm = <T extends object,>({
    initialValues,
    fields,
    onSubmit
}: DynamicFormProps<T>) => {

    const {
        values,
        errors,
        handleChange,
        validate,
        resetForm
    } = useForm(initialValues, fields);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Submit button clicked');
    console.log('Current values:', values);

    const isValid = validate();

    console.log('Validation result:', isValid);
    console.log('Current errors:', errors);

    if (isValid) {
        console.log('Form is valid');
        onSubmit?.(values);
    } else {
        console.log('Form validation failed');
    }
};
    return (
        <form onSubmit={handleSubmit}>

            <FormRenderer
                fields={fields}
                values={values}
                errors={errors}
                onChange={handleChange}
            />

            <button type="submit">
                Submit
            </button>

            <button type="button" onClick={resetForm}>
                Reset
            </button>

        </form>
    );
};
