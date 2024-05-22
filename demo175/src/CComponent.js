import React, { Component } from "react";

class CComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: "A", age: 20 },
        { name: "B", age: 30 },
      ],
      inpName: "",
      inpAge: "",
    };
  }
  add = () => {
    this.state.list.push({
      name: this.state.inpName,
      age: this.state.inpAge,
    });
    this.setState({ list: this.state.list });
  };
  changeInp(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <>
        <h2>
          CComponent Demo {this.state.inpName}, {this.state.inpAge}{" "}
        </h2>
        {this.state.list.map((e) => (
          <h3>
            {e.name}, {e.age}
          </h3>
        ))}
        <input
          type="text"
          name="inpName"
          onChange={(e) => {
            this.changeInp(e);
          }}
        />
        <input
          type="text"
          name="inpAge"
          onChange={(e) => {
            this.changeInp(e);
          }}
        />
        <button
          onClick={() => {
            this.add();
          }}
        >
          Create
        </button>
      </>
    );
  }
}

export default CComponent;
