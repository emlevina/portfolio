interface Translation {
    [key: string]: string
}

export const translations: { [key: string]: Translation } = {
    eng: {
        firstname: 'Ekaterina',
        surname: 'Orlova',
        desc1: 'Mother, developer, ',
        desc2: 'huge ',
        frozen: 'Frozen',
        desc3: ' fan',
        prompt: 'Scroll to see the projects'
    },
    rus: {
        firstname: 'Екатерина',
        surname: 'Орлова',
        desc1: 'Мать, разработчица, \n',
        desc2: 'фанат ',
        frozen: 'Холодного сердца',
        desc3: '',
        prompt: 'Крути чтобы увидеть больше'
    },
    heb: {
        firstname: 'יקטרינה',
        surname: 'אורלוב',
        desc1: 'אמא ומתכנתת',
        desc2: 'ומעריצה ענקית של',
        frozen: 'פרוזן ',
        desc3: '',
        prompt: 'Scroll to see the projects'
    }
};