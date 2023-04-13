export const projectsData: ProjectType[] = [
    {
        id: '1',
        title: 'Real-time Chat App',
        tags: ['react', 'node.js', 'express', 'mongodb', 'socket.io', 'mongoose', 'REST'],
        links: [
            { name: 'demo', url: 'https://chat-app-w22c.onrender.com/' },
            { name: 'git', url: '' }
        ],
        desc: 'Project description blabla. Project description blabla. Project description blabla.',
        img: 'project1',
        background: 'bg-blue'
    },
    {
        id: '2',
        title: 'Online Therapy Service',
        tags: ['node.js', 'express', 'react', 'mongodb', 'socket.io', 'Material-UI', 'mongoose', 'jwt', 'tailwind'],
        links: [
            { name: 'demo', url: 'https://online-therapy-service.onrender.com/' },
            { name: 'git', url: 'https://github.com/emlevina/online-therapy-service' }
        ],
        desc: 'Project description blabla. Project description blabla. Project description blabla.',
        img: 'project2',
        background: 'bg-grey'
    },
    {
        id: '3',
        title: 'Colorfull game',
        tags: ['vanilla js', 'css', 'DOM API'],
        links: [{ name: 'demo', url: 'https://emlevina.github.io/Hakathone1/' }, { name: 'git', url: 'https://github.com/emlevina/Hakathone1' }],
        desc: 'Project description blabla. Project description blabla. Project description blabla.',
        img: 'project2',
        background: 'bg-grey'
    },
    {
        id: '4',
        title: 'To-do App',
        tags: ['react', 'redux', 'node.js', 'express', 'mongodb', 'mongoose'],
        links: [{ name: 'git', url: 'https://github.com/emlevina/she-codes-todo' }, {
            name: 'demo',
            url: 'https://emlevina.github.io/she-codes-todo/'
        }],
        desc: 'Project description blabla. Project description blabla. Project description blabla.',
        img: 'project2',
        background: 'bg-grey'
    },
    {
        id: '5',
        title: 'Trading center application',
        tags: ['react', 'chart.js', 'mock sw'],
        links: [{ name: 'demo', url: 'https://emlevina.github.io/shecodes-final/' }, { name: 'git', url: 'https://github.com/emlevina/shecodes-final' }],
        desc: 'Project description blabla. Project description blabla. Project description blabla.',
        img: 'project2',
        background: 'bg-pink'
    },
    {
        id: '6',
        title: 'Portfolio',
        tags: ['react', 'typescript', 'Material-UI'],
        links: [{ name: 'git', url: '' }],
        desc: 'Project description blabla. Project description blabla. Project description blabla.',
        img: 'project2',
        background: 'bg-grey'
    },
]

export type ProjectType = {
    id: string,
    title: String,
    tags: string[],
    links: { name: string; url: string; }[],
    desc: String,
    img: string,
    background: string
}