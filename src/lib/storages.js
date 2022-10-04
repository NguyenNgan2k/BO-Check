import { setCategory, setSetting } from '../containers/client/actions';

export const categoryDefault = [
    {
        id: 'mac-dinh',
        name: 'Mặc định',
        path: '/bang-gia/chung-khoan-co-so/mac-dinh',
        value: [],
        pinnedRow: [],
        type: 'watchList'
    },
    {
        name: 'HOSE',
        path: '/bang-gia/chung-khoan-co-so/hose',
        type: 'group',
        groupName: 'HSX',
        value: [],
        pinnedRow: [],
    },
    {
        name: 'HNX',
        path: '/bang-gia/chung-khoan-co-so/hnx',
        type: 'group',
        groupName: 'HNX',
        value: [],
        pinnedRow: [],
    },
    {
        name: 'UPCOM',
        path: '/bang-gia/chung-khoan-co-so/upcom',
        groupName: 'UPCOM',
        type: 'group',
        value: [],
        pinnedRow: [],
    },
];

const setting = {
    typeIndex: 1,
};

export function getCategory({ dispatch }) {
    const storedCategory = loadState('category');
    if (storedCategory) {
        dispatch(setCategory(storedCategory))
    }
    else {
        dispatch(setCategory(categoryDefault));
        saveSate('category', categoryDefault);
    }
    return true;
}

export const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const saveSate = (key, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch {
        //...
    }
}