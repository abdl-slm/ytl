import {FlatList, RefreshControl, View} from 'react-native';
import {Transactions} from '../model/Transaction';
import {DETAIL} from '../util/Routes';
import {saveSingleData} from '../zustand/TransactionStore';
import {useState} from 'react';
import {transactionHistory} from '../data/TransactionData';
import {CardView} from '../component/CardView';
import {Menu, Visible, VisibleOff} from '../../assets/images';
import {BankCardView} from '../component/BankCardView';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {AppText} from '../component/AppText';

export const TransactionHistory = ({navigation}: {navigation: any}) => {
  const saveData = saveSingleData();
  const [refresh, setRefresh] = useState(false);
  const [transactionList, setTransactionList] = useState(transactionHistory);
  const [balance, setBalance] = useState('RM ****');
  const [icon, setIcon] = useState(VisibleOff);

  //Just reload dummy data, fake timeout as well to simulate buffer
  const refreshTransaction = () => {
    setTimeout(() => {
      setTransactionList(transactionHistory);
      setRefresh(false);
    }, 1000);
  };

  const handleAccVisiblity = () =>{
    if(balance === 'RM ****'){
      showBalanceUponVerified();
    } else {
      setIcon(VisibleOff);
      setBalance('RM ****');
    }
  }

  const showBalanceUponVerified = () => {
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
          setBalance('RM 24,500.00');
          setIcon(Visible);
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
    <View>
      <AppText text={'Bank Information'} padding={10}></AppText>
      <BankCardView
        title={'Account: 617856444'}
        subtitle={balance}
        imageUrl={icon}
        onClick={() => {
          handleAccVisiblity();
        }}
      />
      <AppText text={'Transaction History'} padding={10}></AppText>
      {transactionList.length > 0 && (
        <FlatList
          keyExtractor={item => item.id}
          data={transactionList}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => {
                setRefresh(true);
                refreshTransaction();
              }}></RefreshControl>
          }
          renderItem={({item}) => (
            <CardView
              title={item.description}
              subtitle={item.date}
              imageUrl={Menu}
              onClick={() => {
                saveData.execute(item);
                navigation.navigate(DETAIL);
              }}
            />
          )}
        />
      )}
    </View>
  );
};
