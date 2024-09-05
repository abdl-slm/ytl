import {StyleSheet, View} from 'react-native';
import {saveSingleData} from '../zustand/TransactionStore';
import {Transaction} from '../model/Transaction';
import {TERTIARY_ACCENT, WHITE} from '../util/Constants';
import {AppText} from '../component/AppText';

export const TransactionDetail = () => {
  const transaction: Transaction = saveSingleData().data;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.subContainer}>
        <AppText text={transaction.description} color={WHITE} fontSize={20} />
        <View style={{marginTop: 10}}></View>
        <AppText text={transaction.date} color={WHITE} fontSize={12} />
        <View style={{marginTop: 10}}></View>
        <AppText text={transaction.type} color={WHITE} fontSize={12} />
      </View>
      <AppText text={transaction.amount} color={WHITE} fontSize={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: TERTIARY_ACCENT,
    padding: 20,
    margin: 10,
    borderRadius: 6,
    elevation: 2,
    shadowOffset: {width: 2, height: 6},
    shadowRadius: 4,
    shadowOpacity: 0.2,
    flexDirection: 'row',
  },
  subContainer: {
    flex: 1,
  },
});
