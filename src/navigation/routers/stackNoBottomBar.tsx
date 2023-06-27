import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Introduction from '../../features/Introduction';
import Screen from '../configs/Screen';
import LoginScreen from '../../features/Authentication/Screen/LoginScreen';

const Stack = createNativeStackNavigator();

function StackNoBottomBar() {
  return (
    <Stack.Navigator initialRouteName={Screen.Login}>
      <Stack.Screen component={LoginScreen} name={Screen.Login} />
      <Stack.Screen component={Introduction} name={Screen.Introduction} />
    </Stack.Navigator>
  );
}

export default StackNoBottomBar;
