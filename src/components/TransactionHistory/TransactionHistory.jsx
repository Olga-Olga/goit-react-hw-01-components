import style from './TransactionHistory.module.css';
import React from 'react';

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
