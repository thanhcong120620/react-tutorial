import React, {Fragment} from "react";



/**
 * <> </> Fragement kiểu mới
 */

class MyComponent extends React.Component {

    state = {
        name: '',
        job: 'Developer',
    };

    handleOnChangeName = (event) => {

        //this.state.name = event.target.name; // bad code

        this.setState({
            name: event.target.value,
            job: "student"
        });
    }

    handleClickButton = () => {
        alert("Hello "+this.state.name);
    }


    render (){

        console.log(">> call state: ", this.state);
        // let name = "Thành Công";

        return (
            <> 
                {/* {console.log("(1)The name is", name)} */}
                <div className="first">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
                    Hello first component, my name is {this.state.name}
                </div>

                <div className="second">
                    Hello second component, my job is {this.state['job']}
                </div>

                <div className="third"> 
                    <button onClick={() => {this.handleClickButton()}}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;