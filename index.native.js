/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import TODO from './src/conainer/todo'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => TODO);
