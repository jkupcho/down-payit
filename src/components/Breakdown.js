import React from 'react';

import { PieChart, Pie, Tooltip } from 'recharts';

export default (props) => {
  const data = [
    { name: 'Principal', value: 400 }
  ];

  return (
    <PieChart width={400} height={400}>
      <Tooltip />
      <Pie
        data={data}
        outerRadius={80}
        animationDuration={500}
        innerRadius={50}
        />
    </PieChart>
  )
}
