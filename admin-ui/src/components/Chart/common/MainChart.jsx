import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card } from "react-bootstrap";

function MainChart({ title, options, series, type, className }) {
  return (
    <Card className="shadow-sm">
      <p className="mt-2 px-3 mb-0 fw-bold fs-6">
        <span>{title}</span>
      </p>
      <Card.Body className="py-0" id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type={type}
          // width={"100%"}
          height={250}
          className={className}
        />
      </Card.Body>
      <div id="html-dist"></div>
    </Card>
  );
}

export default MainChart;
