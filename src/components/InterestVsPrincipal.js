import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default ({data}) => {
  return (
    <div>
      <span>Interest vs. Principal Breakdown</span>
      <BarChart width={800} height={400} data={data} style={{margin: '0 auto'}}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="principal" animationDuration={300} fill="#B8B5FF" />
        <Bar dataKey="interest" animationDuration={300} fill="#A5E8DE" />
      </BarChart>
    </div>
  );

}