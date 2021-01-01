import React from 'react';
import { Alert } from "react-native";
import { AppTodoComponent } from '../appComponent';
import { WebTodoComponent } from '../webComponents';
import { connect } from 'react-redux';
import { addTodo, removeTodo, removeCompeleteTodo } from "../store/actions";

class TODO extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ['Hello World'],
            reduxTodo: [],
            item: '',
        };
    }
    static getDerivedStateFromProps(props, state) {
        const reduxTodo = props.reduxTodo
        return { reduxTodo }
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
        this.props.addTodo(item)
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

    removeTodo = (index) => {
        this.props.removeTodo(index)
    }

    removeCompeleteTodo = (index) => {
        this.props.removeCompeleteTodo(index)
    }

    render() {
        // console.log(typeof document);
        return (
            <>
                {(typeof document != 'undefined') ?
                    // I'm on the web!
                    <WebTodoComponent
                        todos={this.state.todos}
                        item={this.state.item}
                        reduxTodo={this.state.reduxTodo}
                        onChangeHandler={this.onChangeHandler.bind(this)}
                        removeTodo={this.removeTodo.bind(this)}
                        removeCompeleteTodo={this.removeCompeleteTodo.bind(this)}
                        addTodo={this.addTodo.bind(this)}
                    />
                    :
                    <AppTodoComponent
                        todos={this.state.todos}
                        item={this.state.item}
                        reduxTodo={this.state.reduxTodo}
                        onChangeHandler={this.onChangeHandler.bind(this)}
                        removeTodo={this.removeTodo.bind(this)}
                        removeCompeleteTodo={this.removeCompeleteTodo.bind(this)}
                        addTodo={this.addTodo.bind(this)}
                    />
                }
            </>
        );
    }
}
const mapStateToProps = (props) => {
    console.log('=============', props.todos);
    return {
        reduxTodo: props.todos.todo
    };
};
export default connect(mapStateToProps, { addTodo, removeTodo, removeCompeleteTodo })(TODO);

