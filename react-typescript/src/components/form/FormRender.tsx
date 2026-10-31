
import type { FormRendererProps } from './types';
import './styles/text-input.css';
import './styles/check-box.css';
import './styles/drop-down.css';
import './styles/radio.css';
import './styles/text-area.css';
//import './styles/Form.css'
export const FormRenderer = <T extends object,>({
    fields,
    values,
    errors,
    onChange
}: FormRendererProps<T>) => {

    return (
        <>
        <div className="form-container">
            {fields.map(field => {

                const value = values[field.name];
              

                switch (field.type) {

                   
                    case 'text':
                    case 'email':
                    case 'tel':
                    case 'date':

                        return (
                            <div key={field.name} className="text-input-wrapper">
                                <label htmlFor={field.name} className="text-input-label">
                                    {field.label}
                                </label>

                                <input
                                    className="text-input"
                                    id={field.name}
                                    type={field.type}
                                    value={String(value ?? '')}
                                    placeholder={field.placeholder}
                                    required={field.rules?.required}
                                    onChange={e =>
                                        onChange(
                                            field.name,
                                            e.target.value as T[typeof field.name]
                                        )
                                    }
                                />

                              
                            </div>
                        );

                    
                    case 'number':

                        return (
                            <div key={field.name} className="text-input-wrapper">
                                <label htmlFor={field.name} className="text-input-label">
                                    {field.label}
                                </label>

                                <input
                                    className="text-input"
                                    id={field.name}
                                    type="number"
                                    value={value === null ? '' : Number(value)}
                                    min={field.min}
                                    max={field.max}
                                    required={field.rules?.required}
                                    onChange={e =>
                                        onChange(
                                            field.name,
                                            (e.target.value === ''
                                                ? null
                                                : e.target.valueAsNumber
                                            ) as T[typeof field.name]
                                        )
                                    }
                                />

                               
                            </div>
                        );

                 
                    case 'select':

                        return (
                            <div key={field.name} className='dropdown-wrapper' >
                                <label htmlFor={field.name} className='dropdown-label' >
                                    {field.label}
                                </label>

                                <select
                                    className='dropdown-control'
                                    id={field.name}
                                    value={String(value ?? '')}
                                    required={field.rules?.required}
                                    onChange={e =>
                                        onChange(
                                            field.name,
                                            e.target.value as T[typeof field.name]
                                        )
                                    }
                                >
                                    <option value="">Select an option</option>

                                    {field.options.map(option => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>

                               
                            </div>
                        );

                    // Radio
                    case 'radio':

                        return (
                            <fieldset key={field.name} className='radio-wrapper'>
                                <legend>{field.label}</legend>

                                {field.options.map(option => (
                                    <label key={option.value} className='radio-label'>
                                        <input
                                            className='radio-control'
                                            type="radio"
                                            name={field.name}
                                            value={option.value}
                                            checked={value === option.value}
                                            onChange={() =>
                                                onChange(
                                                    field.name,
                                                    option.value as T[typeof field.name]
                                                )
                                            }
                                        />
                                        {option.label}
                                    </label>
                                ))}

                                
                            </fieldset>
                        );

                    // Textarea
                    case 'textarea':

                        return (
                            <div key={field.name} className='textarea-wrapper'>
                                <label htmlFor={field.name} className='textarea-label'>
                                    {field.label}
                                </label>

                                <textarea
                                    className='textarea-control'
                                    id={field.name}
                                    value={String(value ?? '')}
                                    rows={field.rows ?? 4}
                                    placeholder={field.placeholder}
                                    required={field.rules?.required}
                                    onChange={e =>
                                        onChange(
                                            field.name,
                                            e.target.value as T[typeof field.name]
                                        )
                                    }
                                />

                                
                            </div>
                        );

                    // Single Checkbox
                    case 'checkbox':

                        return (
                            <div key={field.name} className="checkbox-wrapper">
                                <label className="checkbox-label">
                                    <input 
                                        className="checkbox-control"
                                        type="checkbox"
                                        checked={value === true}
                                        required={field.rules?.required}
                                        onChange={e =>
                                            onChange(
                                                field.name,
                                                e.target.checked as T[typeof field.name]
                                            )
                                        }
                                    />
                                    {field.label}
                                </label>

                              
                            </div>
                        );

                   
                }
            })}
            </div>
        </>
    );
};
