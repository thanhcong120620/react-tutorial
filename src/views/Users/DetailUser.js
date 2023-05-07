import React from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class DetailUser extends React.Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    if (this.props.router && this.props.router.params) {
      let id = this.props.router.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      //   console.log(">>>> check res: ", res);
      this.setState({
        user: res.data && res.data.data ? res.data.data : {},
      });
    }
  }

  handleBack = () => {
    this.props.navigate("/user-list");
  };

  render() {
    let { user } = this.state;
    let isEmptyObject = Object.keys(user).length === 0;
    return (
      <>
        <h2>Hello from DetailUser, id= {this.props.router.params.id}</h2>
        {isEmptyObject === false && (
          <>
            <div>Name: {user.first_name}</div>
            <div>Email: {user.email}</div>
            <div>
              <img src={user.avatar} alt="avatar" />
            </div>
            <button
              type="button"
              onClick={() => {
                this.handleBack();
              }}
            >
              Back
            </button>
          </>
        )}
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

export default withRouter(DetailUser);
