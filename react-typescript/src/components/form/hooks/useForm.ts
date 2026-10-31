
import { useState } from 'react';
import type {
    ErrorKey,
    FieldConfig
} from '../types';



export const useForm = <T extends object>(
    initialValues: T,
    fields: FieldConfig<T>[]
) => {

    const [values, setValues] = useState<T>(initialValues);

    const [errors, setErrors] = useState<
        Partial<Record<ErrorKey<T>, string>>
    >({});

    // Generic change handler
    const handleChange = <K extends keyof T>(
        name: K,
        value: T[K]
    ) => {
        setValues(prev => ({
            ...prev,
            [name]: value
        }));

        const errorName = `${String(name)}Error` as ErrorKey<T>;

        setErrors(prev => ({
            ...prev,
            [errorName]: undefined
        }));
    };

    // Check whether a value is empty
    const isEmpty = (value: unknown): boolean => {
    return (
        value === '' ||
        value === null ||
        value === undefined ||
        (Array.isArray(value) && value.length === 0)
    );
};

    // Validate all fields
    const validate = (): boolean => {

        const newErrors: Partial<
            Record<ErrorKey<T>, string>
        > = {};

        fields.forEach(field => {

            const value = values[field.name];

            let message: string | undefined;

            if (field.rules?.required && isEmpty(value)) {
                message = `${field.label} is required`;
            }

            if (!message && field.rules?.validate) {

                const validator = field.rules.validate as (
                    value: unknown,
                    values: T
                ) => string | undefined;

                message = validator(value, values);
            }

            if (message) {
                newErrors[field.errorName] = message;
            }

        });

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Reset form
    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        errors,
        handleChange,
        validate,
        resetForm
    };
};
