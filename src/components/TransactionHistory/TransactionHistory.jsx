import style from './TransactionHistory.module.css';
import React from 'react';

export const TransactionHistory = ({ tr }) => {
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
          {tr.map(el => {
            return (
              <tr key={el.id}>
                <td>{el.type}</td>
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
