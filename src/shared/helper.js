import { message } from 'antd';

export const toast = (type, msg, duration = 4.5) => {
    if (typeof document != 'undefined') {
        // I'm on the web!
        if (type === "error") {
            message.error(msg, [duration]);
        } else if (type === "success") {
            message.success(msg, [duration]);
        } else {
            message.info(msg, [duration]);
        }
    }
    else if (typeof navigator != 'undefined' && navigator.product == 'ReactNative') {
        // I'm in react-native

    }
};






// import React from 'react';
// import { render } from 'react-dom';
// import Toast, { DURATION } from 'react-native-easy-toast'




// function ShowToast(param, duration) {
//     this.toast.show('hello world!', 2000);
// }

// class AppToast extends React.Component {
//     render() {
//         return (
//             <Toast
//                 ref={(toast) => this.toast = toast}
//                 style={{ backgroundColor: 'red' }}
//                 position='top'
//                 positionValue={200}
//                 fadeInDuration={750}
//                 fadeOutDuration={1000}
//                 opacity={0.8}
//                 textStyle={{ color: 'red' }}
//             />
//         )
//     }
// }

// export {
//     ShowToast,
//     AppToast,
// }
