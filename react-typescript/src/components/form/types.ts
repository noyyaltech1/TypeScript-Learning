
import type { ReactNode } from 'react';
// Automatically generate error property names
export type ErrorKey<T> = `${keyof T & string}Error`;

// Dropdown and radio options
export type FieldOption<V> = {
    label: string;
    value: V;
};

// Common properties shared by every field
type BaseField<T, K extends keyof T & string> = {
    name: K;
    label: string;
    errorName: `${K}Error`;
    placeholder?: string;
    rules?: {
        required?: boolean;
        validate?: (
            value: T[K],// the current fiels value
            values: T // the entire form values
        ) => string | undefined;
    };
};

// Generate field configurations based on data types
export type FieldConfig<T> = {
    [K in keyof T & string]:

        // Boolean -> Checkbox
        T[K] extends boolean
            ? BaseField<T, K> & {
                type: 'checkbox';
            }

        // Number -> Number input
        : T[K] extends number | null
            ? BaseField<T, K> & {
                type: 'number';
                min?: number;
                max?: number;
            }

        // Array -> Checkbox group
        : T[K] extends string[]
            ? BaseField<T, K> & {
                type: 'checkbox-group';
                options: FieldOption<T[K][number]>[];
            }

        // String -> Text input OR Select OR Radio
        : T[K] extends string
            ? string extends T[K]

                ? BaseField<T, K> & {
                    type:
                        | 'text'
                        | 'email'
                        | 'tel'
                        | 'date'
                        | 'textarea';
                    rows?: number;
                }

                : BaseField<T, K> & {
                    type: 'select' | 'radio';
                    options: FieldOption<T[K]>[];
                }

        : never;

}[keyof T & string];

// Generic form renderer props
export type FormRendererProps<T> = {
    fields: FieldConfig<T>[];
    values: T;
    errors: Partial<Record<ErrorKey<T>, string>>;
    onChange: <K extends keyof T>(
        name: K,
        value: T[K]
    ) => void;
};
