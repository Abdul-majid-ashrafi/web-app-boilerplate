// import { message } from 'antd';
const { Toast } = (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') ? require('./nativeToast') : require('react');


export const toast = (type, msg, duration = 4.5) => {
    if (typeof document != 'undefined') {
        // I'm on the web!
        if (type === "error") {

            // message.error(msg, [duration]);
        } else if (type === "success") {
            // message.success(msg, [duration]);
        } else {
            // message.info(msg, [duration]);
        }
    }
    else if (typeof navigator != 'undefined' && navigator.product == 'ReactNative') {
        // I'm in react-native
        if (type === "error") {
            Toast.show(msg, duration);
        } else if (type === "success") {
            Toast.show(msg, duration);
        } else {
            Toast.show(msg, duration)
        }
    }
};

