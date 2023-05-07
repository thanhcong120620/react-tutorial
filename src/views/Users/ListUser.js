import React from "react";
import axios from "axios";

import "./ListUser.scss";

import { useLocation, useNavigate, useParams } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUser: [],
  };

  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  handleViewDetail = (user) => {
    // console.log(">>> check user: ", user);
    this.props.navigate(`/user-list/${user.id}`);
  };

  render() {
    let { listUser } = this.state;
    return (
      <>
        <div className="list-user-container">
          <div className="list-user-title">Fetch data: </div>
          <div className="list-user-content">
            {listUser &&
              listUser.length > 0 &&
              listUser.map((item, index) => {
                return (
                  <div
                    className="child"
                    key={item.id}
                    onClick={() => {
                      this.handleViewDetail(item);
                    }}
                  >
                    {" "}
                    {index + 1} - {item.first_name} {item.last_name}
                  </div>
                );
              })}
          </div>
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

export default withRouter(ListUser);
