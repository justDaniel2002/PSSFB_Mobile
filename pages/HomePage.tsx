import {SafeAreaView, Text, View, Button} from 'react-native';
import {getData} from '../helpers/asyncStorage';
import {useCallback, useEffect} from 'react';
import {getUser, userState} from '../atoms/atom';
import {useRecoilState} from 'recoil';

function HomeScreen({navigation}: any) {
  const [user, setUser] = useRecoilState(userState);
  console.log('Home');
  const Callback = useCallback(async () => {
    const firstPlay = await getData('firstPlay');
    console.log(firstPlay);
    if (!firstPlay) {
      navigation.navigate('Waitting');
      return;
    } else {
      getUser().then(user => {
        if (!user) {
          navigation.navigate('Login');
        } else {
          setUser(user);
        }
      });
    }
  }, []);

  Callback();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title='Waitting' onPress={() => navigation.navigate('Waitting')}/>
    </View>
  );
}

export default HomeScreen;
