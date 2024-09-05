import {create} from 'zustand';
import {Transaction} from '../model/Transaction';

const initialTransactionState: Transaction = {
  id: '',
  amount: '',
  date: '',
  description: '',
  type: '',
};

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: initialTransactionState,
  errorData: null,
};

export const saveSingleData = create<Result>(
  (set: (arg0: {data: Transaction}) => void) => ({
    ...initialState,

    execute: async (transaction: Transaction) => {
      set({data: transaction});
    },

    //Just and example showing multiple async function within a const
    executeSave: async (transaction: Transaction) => {
      set({data: transaction});
    },
  }),
);
