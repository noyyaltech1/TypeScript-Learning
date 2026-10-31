//passing prpos as an object  (typing onject)
import { PersonProps } from './Persontypes';
export const Person=(props: PersonProps)=>{
    return(
        <>
        <p>
            {props.first} {props.last}
        </p>
        </>
    )
}