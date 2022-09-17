/**
 * @format
 * prettier와 관련된 주석
 */
/**
 * 여기서 import를 통해 코드를 불러와 앱에 번들링
 * 
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// App 컴포넌트를 불러와 네이티브 시스템에 해당 컴포넌트 등록.
AppRegistry.registerComponent(appName, () => App);
