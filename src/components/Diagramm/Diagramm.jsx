import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import '../../css/common.css';

const data = [
  { name: 'Group A', value: 9 },
  { name: 'Group B', value: 3 },
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
export default function Diagramm() {
  return (
    <PieChart width={156} height={156}>
      <Pie
        data={data}
        cx={73} //координаты
        cy={73}
        labelLine={false}
        // label
        label={renderCustomizedLabel}
        outerRadius={78}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
