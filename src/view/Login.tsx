import {TextInput, View} from 'react-native';
import { windowWidth } from '../util/Constants';

export const Login = () => {
  return (
    <View style={{justifyContent: 'center', margin: 10}}>
      <TextInput
        placeholder="Password"
        style={{
          width: windowWidth - 20,
          height: 50,
          backgroundColor: 'white',
          padding: 10,
        }}
        onChangeText={(text: string) => {
          // setTransactionName(text);
        }}
      />
    </View>
  );
};
