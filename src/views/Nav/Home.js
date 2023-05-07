import React from "react";
// import { withRouter } from "react-router";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      console.log("Check Timeout");
      this.props.navigate("/about");
    }, 3000);
  }

  render() {
    console.log(">>>Check props: ", this.props);
    return (
      <>
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

export default withRouter(Home);
