import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ExpenseListItem = ({ description, id, createdAt, amount }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h1>{description} </h1>
    </Link>
    <p>
      {numeral(amount).format('0,0.00')}
---
{moment(createdAt).format('MMMM Do, YYYY')}

    </p>

  </div>
);
export default ExpenseListItem;