/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';

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
