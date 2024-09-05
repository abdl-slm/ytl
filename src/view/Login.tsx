import {Button, TextInput, View} from 'react-native';
import {windowWidth} from '../util/Constants';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import { HISTORY } from '../util/Routes';
import { useEffect, useState } from 'react';
import React from 'react';

export const Login = ({navigation}: {navigation: any}) => {

  const [pin, setPin] = useState('');

  //Pin 1111 will work
  useEffect(
    React.useCallback(() => {
      if(pin === '1111'){
        navigateToHistory();
      }
    }, [pin]),
  );


  const  navigateToHistory = () =>{
    navigation.reset({
      index: 0,
      routes: [{name: HISTORY}],
    });
  }
  
  const handleBiometric = () => {
    const rnBiometrics = new ReactNativeBiometrics();

    rnBiometrics.isSensorAvailable().then(resultObject => {
      const {available, biometryType} = resultObject;

      if (available && biometryType === BiometryTypes.TouchID) {
        console.log('TouchID is supported');
      } else if (available && biometryType === BiometryTypes.FaceID) {
        console.log('FaceID is supported');
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        console.log('Biometrics is supported');
      } else {
        console.log('Biometrics not supported');
      }
    });

    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then(resultObject => {
        const {success} = resultObject;

        if (success) {
          navigateToHistory();
          console.log('successful biometrics provided');
        } else {
          console.log('user cancelled biometric prompt');
        }
      })
      .catch(() => {
        console.log('biometrics failed');
      });
  };

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
        inputMode={'numeric'}
        secureTextEntry={true}
        onChangeText={(text: string) => {
          setPin(text);
        }}
      />
      <Button
        title="biometric"
        onPress={() => {
          handleBiometric();
        }}></Button>
    </View>
  );
};
