export const setLocalStorageWithExpiry = (key: any, value: any, ttl: any) => {
    const now = new Date();
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
        value: value,
        expiry: now.getTime() + 1000 * 60 * 60 * 24 * ttl
    };

    setLocalStorage(key, item);
};
export const getLocalStorageWithExpiry = (key: any) => {
    const item = getLocalStorage(key);
    if (!item) {
        return null;
    }
    const now = new Date();
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        clearLocalStorage(key);
        return null;
    }
    return item.value;
};

export const setLocalStorage = (key: any, value: any) => {
    if (!key) {
        throw 'key is required!';
    } else {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const getLocalStorage = (key: any) => {
    if (typeof window !== "undefined") {
        const itemString = window.localStorage.getItem(key);
        if (!itemString) {
            return null;
        }
        return JSON.parse(<string>window.localStorage.getItem(key));
    }
};

export const clearLocalStorage = (key: any = null) => {
    if (!key) {
        localStorage.clear();
    } else {
        localStorage.removeItem(key);
    }
};
