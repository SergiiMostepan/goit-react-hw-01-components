import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const TransactionsTable = ({ transactions, type, amount, currency }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th className={styles.transactionHead}> {type} </th>
        <th className={styles.transactionHead}> {amount} </th>
        <th className={styles.transactionHead}> {currency} </th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id} className={styles.transactionsTr}>
          <td className={styles.transactionsRaw}>{transaction.type}</td>
          <td className={styles.transactionsRaw}>{transaction.amount}</td>
          <td className={styles.transactionsRaw}>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionsTable.defaultProps = {
  type: 'Type',
  amount: 'Amount',
  currency: 'Currency',
};

TransactionsTable.propTypes = {
  transactions: PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionsTable;
