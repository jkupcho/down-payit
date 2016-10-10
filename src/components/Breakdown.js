import React from 'react';

import { PieChart, Pie, Cell } from 'recharts';

export default ({paymentBreakdown, canCalculatePayment}) => {

  const labelFunc = (data) => {
    return `${data.payload.name}: ${data.payload.value}`;
  };

  const colors = [
    '#B8B5FF',
    '#A5E8DE',
    '#FF968C',
    '#E8D3A5'
  ];

  let content = <p>Please enter values for Property Value and Loan Duration</p>;

  if (canCalculatePayment) {
    const data = paymentBreakdown;
    content =
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          label={labelFunc}
          outerRadius={'80%'}
          animationDuration={500}
          innerRadius={'50%'}>
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))
          }
        </Pie>
      </PieChart>
  }

  return (
    <div>
      {content}
    </div>
  )
};
