import React from 'react';
import {Login} from './Login';

export type ProfileProps = {
    name: string;
}
export const Profile = ({name}: ProfileProps) => {
    return (
        <div>
            <p>Private Profile Component name {name}</p>
        </div>
    )
}