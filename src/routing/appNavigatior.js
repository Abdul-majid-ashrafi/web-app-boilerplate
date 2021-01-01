import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TODO } from "../conainer";

const Stack = createStackNavigator();

class AppNavigatior extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={TODO} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AppNavigatior
