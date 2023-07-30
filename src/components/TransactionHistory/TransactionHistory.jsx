import style from './TransactionHistory.module.css';
import React from 'react';
import propTypes from 'prop-types';
export const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <table className={style.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(el => {
            return (
              <tr key={el.id}>
                <td>{cappitalizeFirstLetter(el.type)}</td>
                <td>{el.amount}</td>
                <td>{el.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

function cappitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

TransactionHistory.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
