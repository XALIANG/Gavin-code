import {defineStore} from 'pinia';

export const useStore = defineStore('state', {
    state: () => {
        return {
            drawer: false,
            disable: false,
            isAdmin: true,
            isUserName: sessionStorage.getItem('user') || '',
        };
    },
});