import{ DynamicForm } from './DynamicForm';

import { eventFields } from './eventConfig';

import type { EventFormData } from './eventTypes';

const initialValues: EventFormData = {
    fullName: '',
    email: '',
    phone: '',
    age: null,
    attendance: 'online',
    category: 'workshop',
    experience: 'beginner',
    interests: [],
    eventDate: '',
    description: '',
    terms: false
};

export const EventForm = () => {

    const handleSubmit = (data: EventFormData) => {
        console.log('Registration Details:', data);

        alert('Registration successful!');
    };

    return (
        <div>
            <h2>Event Registration</h2>

            <DynamicForm<EventFormData>
                initialValues={initialValues}
                fields={eventFields}
                onSubmit={handleSubmit}
            />
        </div>
    );
};
