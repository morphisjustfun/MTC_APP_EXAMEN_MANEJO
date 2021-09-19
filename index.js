/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './components/App';
import {pages} from './constants/pages';
import UserInfoPage from './components/UserInfoPage';
import TimerPage from './components/TimerPage';

Navigation.registerComponent(pages.APP,() => App)
Navigation.registerComponent(pages.USERINFOPAGE,() => UserInfoPage)
Navigation.registerComponent(pages.TIMERPAGE,() => TimerPage)
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
