import React, { useEffect, useRef } from "react";

const Chart = () => {
  const chart1 = useRef(null);
  const chart2 = useRef(null);
  const chart3 = useRef(null);

  const chartData = [
    {
      chartNo: chart1,
      percent: 80,
      bgColor: "#F5D042",
    },
    {
      chartNo: chart2,
      percent: 40,
      bgColor: "#0A174E",
    },
    {
      chartNo: chart3,
      percent: 30,
      bgColor: "#0A234E",
    },
  ];

  useEffect(() => {
    chartData.map((row: any) => {
      makeChart(row.percent, row.chartNo, row.bgColor);
    });
  }, []);

  let i = 1;
  const makeChart = (percent: number, className: any, color: string) => {
    const func1 = setInterval(function () {
      if (i < percent) {
        if (className.current) {
          colorFn(i, className, color);
          i++;
        } else {
          return;
        }
      } else {
        clearInterval(func1);
      }
    }, 10);
  };
  const colorFn = (i: number, className: any, color: string) => {
    className.current.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "%, 100%)";
  };

  return (
    <div>
      <div ref={chart1}>
        <div>{chartData[0].percent} % </div>
      </div>
      <div ref={chart2}>
        <div>{chartData[1].percent} % </div>
      </div>
      <div ref={chart3}>
        <div>{chartData[2].percent} % </div>
      </div>
    </div>
  );
};
export default Chart;
