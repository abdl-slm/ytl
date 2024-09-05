import {View} from 'react-native';
import { saveSingleData } from '../zustand/TransactionStore';
import { Transaction } from '../model/Transaction';
import { AppText } from '../component/AppText';
import { WHITE } from '../util/Constants';

export const TransactionDetail = () => {

  const transaction: Transaction = saveSingleData().data

  return (
    <View>
      <AppText text={transaction.description} color={WHITE} />
    </View>
  );
};
