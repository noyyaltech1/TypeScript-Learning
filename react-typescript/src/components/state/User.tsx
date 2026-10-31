import {useState} from 'react'
type UserProps = {
    name: string;
    email: string;
}
export const User=()=>{
    const [user,setUser]=useState<UserProps | null>(null)
    const handleLogin=()=>{
        setUser({
            name:'Arasan',
            email:'arasan@example.com'
        })
    }
    const handleLogout=()=>{
        setUser(null)
    }   
//------type assertion-----
//Type assertion means telling TypeScript:

//"Hey TypeScript, I know what type this value is. Please treat it as this particular type."

// export const User=()=>{
//     const [user,setUser]=useState<UserProps>({} as UserProps)
//     const handleLogin=()=>{
//         setUser({
//             name:'Arasan',
//             email:'arasan@example.com'
//         })
//     }
    

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}