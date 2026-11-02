export type Attendance =
    | 'online'
    | 'offline'
    | ' ';
   

export type Category =
    | 'workshop'
    | 'conference'
    | 'seminar'
    | ' ';


export type Experience =
    | 'beginner'
    | 'intermediate'
    | 'advanced'
    | ' ';



export type EventFormData = {
    fullName: string;
    email: string;
    phone: string;
    age: number | null;
    attendance: Attendance;
    category: Category;
    experience: Experience;
    eventDate: string;
    description: string;
    terms: boolean;
};