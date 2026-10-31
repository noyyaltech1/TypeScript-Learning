
import type { FieldConfig } from './types';

import type { EventFormData } from './eventTypes';

export const eventFields = [

    {
        name: 'fullName',
        label: 'Full Name',
        errorName: 'fullNameError',
        type: 'text',
        placeholder: 'Enter your full name',
        rules: {
            required: true,
            validate: (value) =>
                value.trim().length < 3
                    ? 'Name must contain at least 3 characters'
                    : undefined
        }
    },

    {
        name: 'email',
        label: 'Email Address',
        errorName: 'emailError',
        type: 'email',
        placeholder: 'Enter your email',
        rules: {
            required: true,
            validate: (value) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                    ? undefined
                    : 'Enter a valid email address'
        }
    },

    {
        name: 'phone',
        label: 'Phone Number',
        errorName: 'phoneError',
        type: 'tel',
        placeholder: '+919876543210',
        rules: {
            required: true,
            validate: (value) =>
                /^(?:\+91)?[6-9]\d{9}$/.test(value)
                    ? undefined
                    : 'Enter a valid Indian mobile number'
        }
    },

    {
        name: 'age',
        label: 'Age',
        errorName: 'ageError',
        type: 'number',
        min: 18,
        max: 50,
        rules: {
            required: true,
            validate: (value) =>
                value === null || value < 18 || value > 50
                    ? 'Age must be between 18 and 50'
                    : undefined
        }
    },

    {
        name: 'attendance',
        label: 'Attendance Mode',
        errorName: 'attendanceError',
        type: 'radio',
        rules: {
            required: true
        },
        options: [
            { label: 'Online', value: 'online' },
            { label: 'Offline', value: 'offline' },
            { label: 'Hybrid', value: 'hybrid' }
        ]
    },

    {
        name: 'category',
        label: 'Event Category',
        errorName: 'categoryError',
        type: 'select',
        rules: {
            required: true
        },
        options: [
            { label: 'Workshop', value: 'workshop' },
            { label: 'Conference', value: 'conference' },
            { label: 'Seminar', value: 'seminar' }
        ]
    },

    {
        name: 'experience',
        label: 'Experience Level',
        errorName: 'experienceError',
        type: 'select',
        rules: {
            required: true
        },
        options: [
            { label: 'Beginner', value: 'beginner' },
            { label: 'Intermediate', value: 'intermediate' },
            { label: 'Advanced', value: 'advanced' }
        ]
    },

   

    {
        name: 'eventDate',
        label: 'Event Date',
        errorName: 'eventDateError',
        type: 'date',
        rules: {
            required: true
        }
    },

    {
        name: 'description',
        label: 'Additional Information',
        errorName: 'descriptionError',
        type: 'textarea',
        placeholder: 'Tell us about yourself',
        rows: 4
    },

    {
        name: 'terms',
        label: 'Accept Terms and Conditions',
        errorName: 'termsError',
        type: 'checkbox',
        rules: {
            required: true,
            validate: (value) =>
                value ? undefined : 'You must accept the terms'
        }
    }

] satisfies FieldConfig<EventFormData>[];
