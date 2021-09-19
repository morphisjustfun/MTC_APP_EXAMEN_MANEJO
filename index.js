/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './components/App';

Navigation.registerComponent('com.MTC.manejo',() => App)
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
      root:{
         stack:{
            children:[
               {
                  component: {
                     name: 'com.MTC.manejo'
                  }
               }
            ]
         }
      }
   })
})

Navigation.setDefaultOptions({
   topBar:{
      visible: false
   }
})
