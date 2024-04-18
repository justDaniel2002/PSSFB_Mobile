import {useCallback, useEffect, useState} from 'react';
import {storeData} from '../helpers/asyncStorage';
import {Image, SafeAreaView, View} from 'react-native';
import { MD3Colors, ProgressBar } from 'react-native-paper';

const WaittingPage = ({navigation}: any) => {
  const [opacity, setOp] = useState('opacity-0');
  const [progress, setProgress] = useState(0)

  useEffect(() => {

    for(let i = 1; i <= 10; i++){
      setTimeout(() => {
        const op = i*10
        setOp(`opacity-${op}`);
        setProgress(i/10)
      }, i*80);
    }

    setTimeout(() => {
      navigation.navigate("Login")
    }, 2000);
    
  }, []);

  return (
    <SafeAreaView>
      <View className="bg-white w-full h-screen flex justify-center items-center pb-40">
        <Image
          className={`${opacity} w-full h-1/2`}
          source={require('../assets/images/Xanhfinal.png')}
        />
         <ProgressBar className='w-2/3' progress={progress} />
      </View>
    </SafeAreaView>
  );
};

export default WaittingPage;
