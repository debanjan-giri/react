import React from "react";
import MainChart from "./common/MainChart";

const SimpleDonut = ({ yaxis, xaxis, title, className }) => {
  const chartOptions = {
    series: yaxis || [],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <MainChart
      options={chartOptions.options}
      series={chartOptions.series}
      type={"donut"}
      title={title}
      className={className}
    />
  );
};

export default React.memo(SimpleDonut);
