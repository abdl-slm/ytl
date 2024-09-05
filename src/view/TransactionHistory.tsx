import {FlatList, View} from 'react-native';
import {Transactions} from '../model/Transaction';
import { CardView } from '../component/CardView';
import { DETAIL } from '../util/Routes';
import { saveSingleData } from '../zustand/TransactionStore';

export const TransactionHistory = ({navigation} : {navigation: any}) => {

  const saveData = saveSingleData();

  const transactionHistory: Transactions = [
    {
      id: '1',
      amount: 'RM 1,500.00',
      date: '05/09/2024',
      description: 'House Loan',
      type: 'Debit',
    },
    {
      id: '2',
      amount: 'RM 150.60',
      date: '05/09/2024',
      description: 'Groceries',
      type: 'Debit',
    },
    {
      id: '3',
      amount: 'RM 12,000.00',
      date: '05/09/2024',
      description: 'Salary',
      type: 'Credit',
    },
    {
      id: '4',
      amount: 'RM 925.00',
      date: '01/09/2024',
      description: 'Car Loan',
      type: 'Debit',
    },
    {
      id: '5',
      amount: 'RM 340.80',
      date: '02/09/2024',
      description: 'Star PC Sdn Bhd',
      type: 'Debit',
    },
  ];

  return (
    <View>
      {transactionHistory.length > 0 && (
        <FlatList
          keyExtractor={item => item.id}
          data={transactionHistory}
          renderItem={({item}) => (
            <CardView
              title={item.amount}
              subtitle={item.description}
              imageUrl={''}
              onClick={() => {
                saveData.execute(item);
                navigation.navigate(DETAIL)
              }}
            />
          )}
        />
      )}
    </View>
  );
};
