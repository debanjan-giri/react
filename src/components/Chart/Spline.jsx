import React from "react";
import MainChart from "./common/MainChart";

const Spline = ({ yaxis, xaxis, title, className }) => {
  const chartOptions = {
    series: yaxis || [],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: xaxis || [],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };

  return (
    <MainChart
      options={chartOptions.options}
      series={chartOptions.series}
      type={"bar"}
      title={title}
      className={className}
    />
  );
};

export default React.memo(Spline);
