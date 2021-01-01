import AsyncStorage from '@react-native-community/async-storage';

export const setAppStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
        // console.log("am stesified")
    } catch (error) {
        throw error;
    }
}

export const getAppStorage = async (key) => {
    try {
        return await AsyncStorage.getItem(key)
    } catch (error) {
        throw error;
    }
}

export const removeAppStorage = async () => {
    try {
        await AsyncStorage.clear()
    } catch (error) {
        throw error;
    }
}

export const removeAppStorageByKey = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (error) {
        throw error;
    }
}

export const setWebStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        // todo
        // toast error.message
    }
}

export const getWebStorage = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        // todo
        // toast error.message
    }
}

export const removeWebStorageByKey = (key) => {
    try {
        return localStorage.removeItem(key);
    } catch (error) {
        // todo
        // toast error.message
    }
}