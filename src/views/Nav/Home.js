import React from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";

import home from "../../assets/images/home.png";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      // console.log("Check Timeout");
      // this.props.navigate("/todo");
    }, 1000);
  }

  render() {
    console.log(">>>Check props: ", this.props);
    return (
      <>
        <img
          src={home}
          className="Home-logo"
          alt="logo"
          style={{ width: "150px", height: "150px" }}
        />
        <h2>Hello from Home</h2>
      </>
    );
  }
}
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
        navigate={navigate}
      />
    );
  }

  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => {
  return {
    reduxData: state.users,
  };
};

export default connect(mapStateToProps)(withRouter(Home));
