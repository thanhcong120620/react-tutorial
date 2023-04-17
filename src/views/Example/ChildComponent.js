import React, { Fragment } from "react";

/**
 * <> </> Fragement kiểu mới
 */

class ChildComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChangeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "First name: " +
        this.state.firstName +
        " \nLast name: " +
        this.state.lastName
    );
  };

  render() {
    console.log(">> call props: ", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    let{ name, age, arrJobProps } = this.props;

    return (
      <>
        <div>Child component: {name} - {age}</div>
        <div className="job-list">
            {
                arrJobProps.map((item, index) => {
                    return (
                        <div key={item.id}>
                        {item.jobTitle} - {item.salary}
                        </div>
                    )
                })
            }
        </div>
      </>
    );
  }
}

export default ChildComponent;
