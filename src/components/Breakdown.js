import React from 'react';

import { PieChart, Pie, Tooltip } from 'recharts';

export default ({paymentBreakdown, canCalculatePayment}) => {
  let content = <p>Please enter values for Property Value and Loan Duration</p>;

  if (canCalculatePayment) {
    const data = paymentBreakdown;
    content = <PieChart width={400} height={400}>
      <Tooltip />
      <Pie
        data={data}
        outerRadius={80}
        animationDuration={500}
        innerRadius={50}
      />
    </PieChart>
  }

  return (
    <div>
      {content}
    </div>
  )
}
