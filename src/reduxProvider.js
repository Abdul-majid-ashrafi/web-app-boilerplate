import React from 'react'
import { Provider } from "react-redux";
import store from "./store";
import WebRouting from "./routing/webRouting";
import AppNavigatior from './routing/appRouting';

export default function App() {
    let Component;
    if (typeof document != 'undefined') {
        // I'm on the web!
        Component = <WebRouting />;
    }
    else if (typeof navigator != 'undefined' && navigator.product == 'ReactNative') {
        // I'm in react-native
        Component = <AppNavigatior />;
    }

    return (
        <Provider store={store}>
            {Component}
        </Provider>
    )
}