import React from 'react';
import { Alert } from "react-native";
import AppTodoComponent from '../appComponent/todo';
import WebTodoComponent from '../webComponents/todo';


class TODO extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ['Hello World'],
            item: '',
        };
    }

    addTodo() {
        // if (typeof document != 'undefined') {
        //     // I'm on the web!
        //   }
        //   else if (typeof navigator != 'undefined' && navigator.product == 'ReactNative') {
        //     // I'm in react-native
        //   }
        //   else {
        //     // I'm in node js
        //   }
        let item = this.state.item;
        if (item) {
            this.setState({
                todos: this.state.todos.concat(item),
            }, () => { this.setState({ item: '' }); });
        } else {
            Alert.alert('Enter some thing')
        }
    }

    onChangeHandler(name, value) {
        this.setState({ [name]: value });
    }

    render() {
        return (
            <>
                {(typeof document != 'undefined') ?
                    // I'm on the web!
                    <WebTodoComponent
                        todos={this.state.todos}
                        item={this.state.item}
                        onChangeHandler={this.onChangeHandler.bind(this)}
                        addTodo={this.addTodo.bind(this)}
                    />
                    :
                    <AppTodoComponent
                        todos={this.state.todos}
                        item={this.state.item}
                        onChangeHandler={this.onChangeHandler.bind(this)}
                        addTodo={this.addTodo.bind(this)}
                    />
                }
            </>
        );
    }
}

export default TODO;
