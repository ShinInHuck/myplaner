// import React, { useEffect, useRef } from "react";

// const Chart = () => {
//   const chart1 = useRef(null);
//   const chart2 = useRef(null);
//   const chart3 = useRef(null);

//   const chartData = [
//     {
//       chartNo: chart1,
//       percent: 80,
//       bgColor: "#F5D042",
//     },
//     {
//       chartNo: chart2,
//       percent: 40,
//       bgColor: "#0A174E",
//     },
//     {
//       chartNo: chart3,
//       percent: 30,
//       bgColor: "#0A234E",
//     },
//   ];

//   useEffect(() => {
//     chartData.map((row: any) => {
//       makeChart(row.percent, row.chartNo, row.bgColor);
//     });
//   }, []);

//   let i = 1;
//   const makeChart = (percent: number, className: any, color: string) => {
//     const func1 = setInterval(function () {
//       if (i < percent) {
//         if (className.current) {
//           colorFn(i, className, color);
//           i++;
//         } else {
//           return;
//         }
//       } else {
//         clearInterval(func1);
//       }
//     }, 10);
//   };
//   const colorFn = (i: number, className: any, color: string) => {
//     className.current.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "%, 100%)";
//   };

//   return (
//     <div>
//       <div ref={chart1}>
//         <div>{chartData[0].percent} % </div>
//       </div>
//       <div ref={chart2}>
//         <div>{chartData[1].percent} % </div>
//       </div>
//       <div ref={chart3}>
//         <div>{chartData[2].percent} % </div>
//       </div>
//     </div>
//   );
// };
// export default Chart;

// import "./styled-chart";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["skyblue", "#00C49F", "green", "cyan"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Chart() {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx={150}
        cy={120}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
