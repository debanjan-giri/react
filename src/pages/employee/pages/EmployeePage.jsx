import React, { useState } from "react";
import { Row, Col, Accordion } from "react-bootstrap";
import RenderForm from "../../../components/form/RenderForm";
import { employee_Validation } from "../../../utils/validation";
import CustomAngleCircle from "../../../components/Chart/CustomAngleCircle";

function EmployeePage() {
  const [userData, setUserData] = useState([
    {
      Name: "Devposto",
      Mobile: 1234567890,
      Percentage: 90,
    },
    {
      Name: "Postman",
      Mobile: 121212121212,
      Percentage: 12,
    },
  ]);
  const [CircleData, setCircleData] = useState({
    yaxis: [90, 12],
    xaxis: ["Devposto", "Postman"],
  });

  const data = [
    {
      id: 1,
      type: "text",
      name: "Name",
      value: "",
      label: "Name",
      placeholder: "Enter Name",
    },
    {
      id: 2,
      type: "number",
      name: "Mobile",
      value: "",
      label: "Mobile",
      placeholder: "Enter Mobile",
    },
    {
      id: 3,
      type: "number",
      name: "Percentage",
      value: "",
      label: "Percentage",
      placeholder: "Enter Percentage",
    },
  ];

  function handleSubmit(values) {
    console.log(values);
    const existingUser = userData?.find((ee) => {
      return ee.Name === values.Name;
    });
    console.log(existingUser);

    if (existingUser) {
      return alert("user already exist");
    } else {
      setCircleData({
        yaxis: [...CircleData.yaxis, values.Percentage],
        xaxis: [...CircleData.xaxis, values.Name],
      });
      setUserData([...userData, values]);
    }
  }

  return (
    <div>
      <Row>
        {/* Employee Form Section */}
        <Col md={6} lg={4} sm={6}>
          <RenderForm
            data={data}
            submitFn={handleSubmit}
            title="Add New Employee"
            btnName="Submit"
            validation={employee_Validation()}
          />
        </Col>

        {/* Employee List Section */}
        <Col md={6} lg={4} sm={6}>
          <h4 className="fw-bold">Employee Directory</h4>
          {userData && userData?.length > 0 ? (
            userData.map((employee, index) => (
              <Accordion className="my-2" key={index}>
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{employee?.Name}</Accordion.Header>
                  <Accordion.Body>
                    <p className="m-0">
                      <strong>Mobile:</strong> {employee?.Mobile}
                    </p>
                    <p className="m-0">
                      <strong>Performance Rating:</strong>{" "}
                      {employee?.Percentage}%
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))
          ) : (
            <p>No employees found. Please add new employee details.</p>
          )}
        </Col>

        {/* Employee Performance Chart Section */}
        <Col lg={4} md={6} sm={12} className="mb-3">
          <CustomAngleCircle
            yaxis={CircleData?.yaxis}
            xaxis={CircleData?.xaxis}
            title="Employee Performance Overview"
            className="py-3"
          />
        </Col>
      </Row>
    </div>
  );
}

export default EmployeePage;
