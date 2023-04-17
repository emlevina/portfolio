export const projectsData: ProjectType[] = [
    {
        id: '3',
        title: 'Real-time Chat App',
        tags: {
            frontend: ['react'],
            backend: ['node.js', 'express', 'mongodb', 'mongoose'],
            both: ['socket.io', 'REST']
        },
        links: [
            { name: 'demo', url: 'https://chat-app-w22c.onrender.com/' },
            { name: 'git', url: '' }
        ],
        background: 'bg-grey'
    },
    {
        id: '1',
        title: 'Online Therapy Service',
        tags: {
            frontend: ['react', 'Material-UI', 'tailwind'],
            backend: ['node.js', 'express', 'mongodb', 'mongoose',],
            both: ['socket.io', 'jwt',]
        },
        links: [
            { name: 'demo', url: 'https://online-therapy-service.onrender.com/' },
            { name: 'git', url: 'https://github.com/emlevina/online-therapy-service' }
        ],
        background: 'bg-blue'
    },
    {
        id: '6',
        title: 'Colorfull game',
        tags: { frontend: ['vanilla js', 'css', 'DOM API'] },
        links: [
            { name: 'demo', url: 'https://emlevina.github.io/Hakathone1/' },
            { name: 'git', url: 'https://github.com/emlevina/Hakathone1' }
        ],
        background: 'bg-pink'
    },
    {
        id: '4',
        title: 'To-do App',
        tags: {
            frontend: ['react', 'redux',],
            backend: ['node.js', 'express', 'mongodb', 'mongoose']
        },
        links: [
            {
                name: 'demo',
                url: 'https://emlevina.github.io/she-codes-todo/'
            }, { name: 'git', url: 'https://github.com/emlevina/she-codes-todo' }
        ],
        background: 'bg-grey'
    },
    {
        id: '5',
        title: 'Trading center application',
        tags: { frontend: ['react', 'chart.js', 'mock sw'] },
        links: [
            { name: 'demo', url: 'https://emlevina.github.io/shecodes-final/' },
            { name: 'git', url: 'https://github.com/emlevina/shecodes-final' }
        ],
        background: 'bg-grey'
    },
    {
        id: '2',
        title: 'Portfolio',
        tags: { frontend: ['react', 'typescript', 'Material-UI'] },
        links: [{ name: 'git', url: 'https://github.com/emlevina/portfolio' }],
        background: 'bg-grey'
    },
]

export type ProjectType = {
    id: string,
    title: String,
    tags: { frontend: string[], backend?: string[], both?: string[] },
    links: { name: string; url: string; }[],
    background: string
}