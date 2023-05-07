import React from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";

import home from "../../assets/images/home.png";
import "./Nav.scss";

class Home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     // this.props.navigate("/todo");
  //   }, 1000);
  // }

  handleDeleteUser = (user) => {
    console.log(">>> check user delete: ", user);
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.addUserRedux();
  };

  render() {
    // console.log(">>>Check props: ", this.props);
    let listUsers = this.props.reduxData;
    return (
      <>
        <img
          src={home}
          className="Home-logo"
          alt="logo"
          style={{ width: "150px", height: "150px" }}
        />
        <h2>Hello from Home</h2>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <>
                  <div key={item.id}>
                    {index + 1}: {item.name} &nbsp;
                    <span
                      className="AD-symbol"
                      onClick={() => {
                        this.handleDeleteUser(item);
                      }}
                    >
                      x
                    </span>
                  </div>
                </>
              );
            })}
          <button
            onClick={() => {
              this.handleCreateUser();
            }}
          >
            Add New User
          </button>
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
