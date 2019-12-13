import * as React from 'react';
import { Text, View, WebView } from 'react-native';
import { Constants } from 'expo';

const App = () => {
   return (
         <WebView
         source = {{ uri: 'https://danielkapexhiu.com/' }}
         />
   )
}
export default App;

