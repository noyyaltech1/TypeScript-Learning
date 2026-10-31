type GreetProps = {
    name: string;  
    // ?== means optional property, if not passed it will be undefined
    messageCount?: number;
    isLoggedIn: boolean;
}
export const Greet = (props: GreetProps) => {
  const messageCount = props.messageCount || 0; 
  return (
    <div>
        <p>
          {props.isLoggedIn ?
  `Welcome ${props.name}! You have ${props.messageCount} unread messages.` : 'Welcome Guest!'}
        </p>
             
    </div>
  )
}