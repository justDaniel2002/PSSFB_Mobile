import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Touchable,
  TouchableHighlight,
} from 'react-native';
import {t} from '../translations/i18n';


export const LoginContainer = () => {
  return (
    <SafeAreaView>
      <View className="rounded-xl px-7 py-10 bg-purple-400 text-black">
        <Text className="font-bold text-5xl mb-8 text-center">
          {t('Welcome')}
        </Text>
        {/* <!-- <div class="mb-3"><Input placehoder="Username" /></div> --> */}

        <View className="mb-3">
          <TextInput className="w-full border border-black" />
        </View>
        <View className="mb-3">
          <TextInput secureTextEntry={true} />
        </View>
        <View className="text-right">
          <Button title={`${t('forgot password')} ?`} onPress={() => {}} />
        </View>
       
        <Button
          title={t('Login')}
          onPress={() => {}}
          //className="bg-black rounded-md justify-center p-3 font-medium text-white items-center inline-flex border-2 hover:-translate-x-2 hover:text-black hover:bg-white transition ease-in-out w-full mb-2"
        />

        <View className="text-center mb-4"><Text>{t('or use another account')}</Text></View>
       

        {/* <ResetPasswordModal
          bind:showModal
          onClose={() => (showModal = false)}
        /> */}
      </View>
    </SafeAreaView>
  );
};
