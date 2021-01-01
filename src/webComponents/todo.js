import React from 'react';

const WebTodoComponent = (props) => {
    const todos = props.todos.map((val, i) => {
        return (
            <div key={i}>
                <h4 style={{ fontSize: 36, color: "red" }}>{val}</h4>
            </div>
        )
    })
    return (
        <div>
            <h1>Todo</h1>
            <input
                placeholder="Write something"
                value={props.item}
                onChange={(evnt) => { props.onChangeHandler('item', evnt.target.value) }}
                style={{ borderBottomWidth: 1, padding: 5, fontSize: 18 }}
            />
            <br />
            <button onClick={props.addTodo}>Add</button>
            <br />
            <hr />
            {todos}
        </div>
    );
};


export default WebTodoComponent;