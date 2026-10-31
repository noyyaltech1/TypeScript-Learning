//array of objects

type PersonProps = {
   names: {
      first: string,
      last: string
   }[]
}
export const PersonList = (props: PersonProps) => {
    const { names } = props;

    return (
        <div>   
            {names.map((name) => (
                console.log(name),
                
                <p key={name.first}>
                    {name.first} {name.last}
                </p>
            ))}
        </div>
    )
}