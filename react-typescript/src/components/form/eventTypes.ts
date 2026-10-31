export type Attendance =
    | 'online'
    | 'offline'
    | 'hybrid';

export type Category =
    | 'workshop'
    | 'conference'
    | 'seminar';

export type Experience =
    | 'beginner'
    | 'intermediate'
    | 'advanced';

export type Interest =
    | 'react'
    | 'angular'
    | 'node';

export type EventFormData = {
    fullName: string;
    email: string;
    phone: string;
    age: number | null;
    attendance: Attendance;
    category: Category;
    experience: Experience;
    interests: Interest[];
    eventDate: string;
    description: string;
    terms: boolean;
};