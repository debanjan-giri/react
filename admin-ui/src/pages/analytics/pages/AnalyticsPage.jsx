import React from "react";

import { Col, Row } from "react-bootstrap";
import Spline from "../../../components/Chart/Spline";
import CustomAngleCircle from "../../../components/Chart/CustomAngleCircle";
import Basic from "../../../components/Chart/Basic";
import SimpleDonut from "../../../components/Chart/SimpleDonut";

function AnalyticsPage() {
  const BasicData = {
    yaxis: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    xaxis: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  };

  const SplineData = {
    yaxis: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    xaxis: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  };

  const CustomAngleCircleData = {
    yaxis: [44, 55, 67, 83],
    xaxis: ["Direct", "Social", "Referral", "Other"],
  };

  const SimpleDonutData = {
    yaxis: [44, 55, 41, 17, 15],
  };

  return (
    <div>
      <Row>
        <Col lg={4} md={6} sm={12} className="mb-3">
          <Spline
            yaxis={SplineData?.yaxis}
            xaxis={SplineData?.xaxis}
            title="Column Chart"
            className={"py-1"}
          />
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-3">
          <Basic
            yaxis={BasicData?.yaxis}
            xaxis={BasicData?.xaxis}
            title="Line Chart"
            className={"py-1"}
          />
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-3">
          <CustomAngleCircle
            yaxis={CustomAngleCircleData?.yaxis}
            xaxis={CustomAngleCircleData?.xaxis}
            title="Radial Bar Chart"
            className={"py-1"}
          />
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-3">
          <SimpleDonut
            yaxis={SimpleDonutData?.yaxis}
            title="Radial Bar Chart"
            className={"py-3"}
          />
        </Col>
      </Row>
    </div>
  );
}

export default AnalyticsPage;
