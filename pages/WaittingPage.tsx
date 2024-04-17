import {useCallback, useEffect, useState} from 'react';
import {storeData} from '../helpers/asyncStorage';
import {Image, SafeAreaView, View} from 'react-native';

const WaittingPage = ({navigation}: any) => {
  const [opacity, setOp] = useState("opacity-100");

  useEffect(() => {
  }, []);

  return (
    <SafeAreaView>
      <View className="bg-white w-full h-screen flex justify-center pb-20">
        <Image
          className={`${opacity} w-full h-1/2`}
          source={require('../assets/images/Xanhfinal.png')}
        />
      </View>
    </SafeAreaView>
  );
};

export default WaittingPage;
