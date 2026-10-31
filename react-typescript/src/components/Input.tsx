// input box change event
import React from 'react';
type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
//-------------  Handling destructuring props -----------------
export const Input = ({ value, handleChange }: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(event);
        console.log(event.target.value);
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleInputChange} />
        </div>
    )
}
// ----------- normal prpos use panrathu---------------
// export const Input = (props: InputProps) => {
//    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         props.handleChange(event);
//         console.log(event.target.value);
//     }
//     return (
//         <div>
//             <input type="text" value={props.value} onChange={handleInputChange} />
//         </div>
//     )
// }