import {NavigationContainer} from '@react-navigation/native';
import StackNoBottomBar from './routers/stackNoBottomBar';

function RootNavigator() {
  return (
    <NavigationContainer>
      <StackNoBottomBar />
    </NavigationContainer>
  );
}

export default RootNavigator;
