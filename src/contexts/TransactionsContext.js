import React, {createContext, useState} from 'react';

const TransactionsContext = createContext({});

export function TransactionsProvider({children}) {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: 'Titulo 1',
      amount: '1.000,00',
      type: 'Tipo 1',
      data: '10/04/2020',
    },
    {
      id: 2,
      title: 'Titulo 2',
      amount: '2.000,00',
      type: 'Tipo 2',
      data: '11/04/2020',
    },
    {
      id: 3,
      title: 'Titulo 3',
      amount: '3.000,00',
      type: 'Tipo 3',
      data: '12/04/2020',
    },
    {
      id: 4,
      title: 'Titulo 4',
      amount: '4.000,00',
      type: 'Tipo 4',
      data: '13/04/2020',
    },
    {
      id: 5,
      title: 'Titulo 5',
      amount: '5.000,00',
      type: 'Tipo 5',
      data: '14/06/2020',
    },
  ]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
      }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsContext;

