import React from "react";
import MainChart from "./common/MainChart";

const Basic = ({ yaxis, xaxis, title , className }) => {
  const chartOptions = {
    series: yaxis || [],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: xaxis || [],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  return (
    <MainChart
      options={chartOptions?.options}
      series={chartOptions?.series}
      type={"area"}
      title={title}
      className={className}
    />
  );
};

export default React.memo(Basic);
