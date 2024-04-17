import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/HomePage';
import BottomTabs from './components/BottomNavigation';
import WaittingPage from './pages/WaittingPage';
import { LoginPage } from './pages/LoginPage';
import './global.css'
import { RecoilRoot } from 'recoil';
const BottomNavigator = () => {
  //const Tab = createBottomTabNavigator();
  return <></>;
};

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Waitting" component={WaittingPage} />
          <Stack.Screen name="Login" component={LoginPage} />
        </Stack.Navigator>
        {/* <BottomTabs /> */}
      </NavigationContainer>
      </RecoilRoot>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
