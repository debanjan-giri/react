import { useFormik } from "formik";
import React from "react";
import { Form, Button, Card } from "react-bootstrap";

function RenderForm({ data, submitFn, title, btnName, validation }) {
  function InitialData(data) {
    let obj = {};
    for (let i = 0; i < data.length; i++) {
      obj[data[i].name] = data[i].value;
    }
    return obj;
  }

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: InitialData(data),
    onSubmit: submitFn,
    validationSchema: validation,
  });

  return (
    <>
      <Card className="shadow-sm py-4 px-2">
        <Card.Title className="text-center fw-bold">{title}</Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
            {data.map((item, index) => (
              <Form.Group key={index}>
                <Form.Label>{item.label}</Form.Label>
                <Form.Control
                  type={item.type}
                  name={item.name}
                  onChange={handleChange}
                  value={values[item.name]}
                  isInvalid={!!errors[item.name]}
                  placeholder={item.placeholder}
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid">
                  {errors[item.name]}
                </Form.Control.Feedback>
              </Form.Group>
            ))}
            <Button type="submit">{btnName}</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default RenderForm;
