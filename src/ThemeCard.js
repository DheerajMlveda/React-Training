import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';

import { themeContext, themeUpdateContext } from "./ThemeContainer";

function ThemeCard() {
  const theme = useContext(themeContext);
  const themeChange = useContext(themeUpdateContext);
  
  return (
    <div style={{ marginTop:"20px" , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
      <Card
        bg={theme ? "Light" : "Dark".toLowerCase()}
        key={theme ? "Light" : "Dark"}
        text={theme ? "Light" : "Dark".toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>{theme ? "Light" : "Dark"} Card Title </Card.Title>
          <Card.Text>
            This is simple card, <b>AND</b> i am using this for Usecontext hook understanding
          </Card.Text>
        </Card.Body>
        <Button onClick={themeChange} variant="primary">
          Click me !!
        </Button>
      </Card>
    </div>
  );
}

export default ThemeCard;
