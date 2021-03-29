import { atom, selector, DefaultValue } from 'recoil'

const localStorageEffect = key => ({ setSelf, onSet }) => {
    try {
        const savedValue = localStorage.getItem(key)
        if (savedValue != null) {
            setSelf(JSON.parse(savedValue))
        }
    } catch (error) {
        // DO NOTHING - SSR MODE
    }

    onSet(newValue => {
        if (newValue instanceof DefaultValue) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    })
}

export const ApplicationState = atom({
    key: 'app/state',
    default: {
        user: {
            name: '',
            username: '',
            password: '',
            token: ''
        },
        setting: {
            language: 'en'
        }
    },
    effects_UNSTABLE: [
        localStorageEffect('app/state'),
    ],
})
