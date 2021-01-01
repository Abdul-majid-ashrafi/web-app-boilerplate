import React from 'react';

const WebTodoComponent = (props) => {
    const {
        removeCompeleteTodo,
        onChangeHandler,
        removeTodo,
        reduxTodo,
        addTodo,
        item,
    } = props;
    // render Todo list
    const todos = reduxTodo.map((val, i) => {
        return (
            <div key={i} style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                <h4 style={{ fontSize: 36, color: "red", margin: "10px" }}>{val}</h4>
                <button onClick={() => removeTodo(i)}>Remove</button>
            </div>
        )
    })
    return (
        <div>
            <h1>Todo</h1>
            <input
                placeholder="Write something"
                value={item}
                onChange={(evnt) => { onChangeHandler('item', evnt.target.value) }}
                style={{ borderBottomWidth: 1, padding: 5, fontSize: 18 }}
            />
            <br />
            <button onClick={addTodo}>Add</button>
            <button onClick={removeCompeleteTodo}>Remove All</button>
            <hr />
            {todos}
        </div>
    );
};


export default WebTodoComponent;