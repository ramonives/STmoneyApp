import React, { createContext, useState } from "react";

const TransactionsContext = createContext({});

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  function createTransaction(title, amount, category, type) {
    const data = {
      id: Math.random(),
      title: title,
      amount: amount,
      category: category,
      type: type,
      createdAt: new Date(),
    };
    setTransactions([...transactions, data]);
  }

  console.log(transactions);
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
        createTransaction,
      }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsContext;

// {
//   id: 1,
//   title: 'Titulo 1',
//   amount: '1.000,00',
//   category: 'Categoria 1',
//   data: '10/04/2020',
// },
// {
//   id: 2,
//   title: 'Titulo 2',
//   amount: '2.000,00',
//   category: 'Categoria 2',
//   data: '11/04/2020',
// },
// {
//   id: 3,
//   title: 'Titulo 3',
//   amount: '3.000,00',
//   category: 'Categoria 3',
//   data: '12/04/2020',
// },
// {
//   id: 4,
//   title: 'Titulo 4',
//   amount: '4.000,00',
//   category: 'Categoria 4',
//   data: '13/04/2020',
// },
// {
//   id: 5,
//   title: 'Titulo 5',
//   amount: '5.000,00',
//   category: 'Categoria 5',
//   data: '14/06/2020',
// },
