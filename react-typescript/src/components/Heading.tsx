// prpos passing as children
type HeadingProps = {
    children: React.ReactNode;
}
export const Heading = (props: HeadingProps) => {
    return (
        <div>       
            <p>{props.children}</p>
        </div>
    )
}