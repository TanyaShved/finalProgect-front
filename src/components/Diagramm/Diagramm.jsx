import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import '../../css/common.css';

const data = [
  { name: 'Correct', value: 1 },
  { name: 'Incorrect', value: 11 },
];

const COLORS = ['#ff6b09', '#D7D7D7'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      // fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

let width = 156;
let height = 156;
let coordinateXY = 73;
let outerRadius = 78;
if (window.innerWidth >= 768) {
  width = 285;
  height = 285;
  coordinateXY = 137.5;
  outerRadius = 142.5;
}

export default function Diagramm() {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        cx={coordinateXY}
        cy={coordinateXY}
        labelLine={false}
        // label
        label={renderCustomizedLabel}
        outerRadius={outerRadius}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      {/* <Legend layout="vertical" align="right" verticalAlign="top" /> */}
    </PieChart>
  );
}
