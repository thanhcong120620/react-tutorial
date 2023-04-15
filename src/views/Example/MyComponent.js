import React, {Fragment} from "react";



/**
 * <> </> Fragement kiểu mới
 */

class MyComponent extends React.Component {

    state = {
        name: 'Success',
        job: 'Developer',
    };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }



    render (){

        // let name = "Thành Công";

        return (
            <> 
                {/* {console.log("(1)The name is", name)} */}
                <div className="first">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
                    Hello first component, my name is {this.state.name}
                </div>

                <div>
                    Hello second component, my job is {this.state['job']}
                </div>
            </>
        )
    }
}

export default MyComponent;