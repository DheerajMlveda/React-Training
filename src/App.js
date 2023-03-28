import EmployeeForm from "./EmployeeForm";
import React, { Component } from "react";
import DisplayData from "./DisplayData";

class Display extends Component {
  constructor(props) {
    super(props);

    console.log("constructed");
    this.unmounted = false;
    this.state = { loading: true };
  }

  componentDidMount() {
    console.log("mounted");
    fetch("/").then((res) => {
      if (!this.unmounted)
        this.setState({ status: res.status, loading: false });
    });
  }

  componentWillUnmount() {
    console.log("will unmount");
    this.unmounted = true;
  }

  render() {
    console.log("rendred");

    return this.state.loading && <div>Display</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };

    console.log("constructed");
  }

  onSubmit = (data) => {
    this.setState({
      employees: [...this.state.employees, data],
    });
  };

  render() {
    return (
      <div style={{ justifyContent: "center" }}>
        <h1>This is our React App</h1>
        {/* <button onClick={() => this.setState({ enable: !this.state.enable })}>
          Toggle
        </button>
        {this.state.enable && React.createElement(Display)}
        <button onClick={(e) => {
          console.log(e);
          return this.setState({ count: this.state.count + 1 });
        }}>
          {this.state.count}
        </button> */}
        {/* <Button count = {50}/> */}
        {/* <Input /> */}
         <EmployeeForm onSubmit={this.onSubmit} />
        <DisplayData employees={this.state.employees} /> 
      </div>
    );
  }
}

export default App;
