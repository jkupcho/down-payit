import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default ({data}) => {
  return (
    <div>
      <span>Amount owed at start of year</span>
      <BarChart width={800} height={400} data={data} style={{margin: '0 auto'}}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" animationDuration={300} fill="#B8B5FF" />
      </BarChart>
    </div>
  )
}
