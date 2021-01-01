/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/reduxProvider';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
