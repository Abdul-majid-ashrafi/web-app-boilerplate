import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, ScrollView } from "react-native"

const AppTodoComponent = (props) => {
    const {
        removeCompeleteTodo,
        onChangeHandler,
        removeTodo,
        reduxTodo,
        addTodo,
        item,
    } = props;
    // render todo list
    const todos = reduxTodo.map((val, i) => {
        return (
            <View key={i}>
                <Text style={{ fontSize: 36, color: "red" }}>{val}</Text>
                <Button onPress={() => removeTodo(i)} title='Remove' />
            </View>
        )
    })

    return (
        <View style={{ flex: 1, }}>
            <View style={{ padding: "5%", flex: 1, flexDirection: "column", marginTop: "10%" }}>
                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder="Write something"
                        value={item}
                        onChangeText={(text) => { onChangeHandler('item', text) }}
                        style={{ borderBottomWidth: 1, padding: 5, fontSize: 18 }}
                    />
                    <TouchableOpacity onPress={addTodo} style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, padding: 5, marginTop: 3 }}>
                        <Text style={{ color: "red", fontSize: 18 }}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={removeCompeleteTodo} style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, padding: 5, marginTop: 3 }}>
                        <Text style={{ color: "red", fontSize: 18 }}>Remove All</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    {todos}
                </ScrollView>
            </View>
        </View >
    )
}

export default AppTodoComponent;