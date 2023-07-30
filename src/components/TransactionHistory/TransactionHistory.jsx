// import style from './TransactionHistory.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
import {
  TransactionHistoryTable,
  Th,
  Td,
  TrEeven,
} from './TransactionHistoryStyle.jsx';

export const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <TransactionHistoryTable>
        <thead>
          <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((el, i) => {
            const bcgrColor = {
              backgroundColor: i % 2 !== 0 ? 'rgb(80, 122, 129)' : 'inherit',
            };

            return (
              <tr key={el.id} style={bcgrColor}>
                <Td>{cappitalizeFirstLetter(el.type)}</Td>
                <Td>{el.amount}</Td>
                <Td>{el.currency}</Td>
              </tr>
            );
          })}
        </tbody>
      </TransactionHistoryTable>
    </div>
  );
};

function cappitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
