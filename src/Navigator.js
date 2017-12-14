import { StackNavigator } from 'react-navigation';

import Welcome from './Welcome'
import ChatList from './ChatList'
import Profile from './Profile'
  
 export const RouteNavigator = StackNavigator({
    Welcome: {screen: Welcome},
    ChatList: {screen: ChatList},
    Profile: {screen: Profile,},
  });


