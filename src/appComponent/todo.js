import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from "react-native"

class AppTodoComponent extends React.Component {

    render() {
        const todos = this.props.todos.map((val, i) => {
            return (
                <View key={i}>
                    <Text style={{ fontSize: 36, color: "red" }}>{val}</Text>
                </View>
            )
        })

        return (
            <View style={{ flex: 1, }}>
                <View style={{ padding: "5%", flex: 1, flexDirection: "column", marginTop: "10%" }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            placeholder="Write something"
                            value={this.props.item}
                            // onChangeText={(text) => { this.setState({ todo: text }) }}
                            onChangeText={(text) => { this.props.onChangeHandler('item', text) }}

                            // onChangeText={this.props.onChangeHandler}
                            style={{ borderBottomWidth: 1, padding: 5, fontSize: 18 }}
                        />
                        <TouchableOpacity onPress={this.props.addTodo} style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, padding: 5, marginTop: 3 }}>
                            <Text style={{ color: "red", fontSize: 18 }}>Add</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ flex: 1 }}>
                    {todos}
                </View>
            </View >
        )
    }
}

export default AppTodoComponent;