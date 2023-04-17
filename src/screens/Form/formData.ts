export type FieldData = {
    tag: 'input' | 'textarea',
    type?: 'text' | 'email',
    name: string,
    id: string,
    placeholder: string,
    required: boolean,
    prompt: string
}

type FormData = {
    [key: string]: FieldData
}

export const formData: FormData = {
    email: {
        tag: 'input',
        type: 'email',
        name: 'email',
        id: 'email',
        placeholder: 'me@domain.com',
        required: true,
        prompt: 'Your e-mail *'
    },

    name: {
        tag: 'input',
        type: 'text',
        name: 'name',
        id: 'name',
        placeholder: 'Ekaterina Orlova',
        required: false,
        prompt: 'How can I call you?'
    },
    body: {
        tag: 'textarea',
        name: 'textarea',
        id: 'textarea',
        placeholder: 'Your inquiry',
        required: false,
        prompt: 'And you want to tell me...'
    },
}