import React from "react";
import axios from "axios";

class Login extends React.Component{

    state = {
        loginData:{
            username: "",
            password: ""
        }
    };

    handleChanges = e => {
        this.setState({
            loginData:{
                ...this.state.loginData,
                [e.target.name]: e.target.value
            }
        });
    };

    loginUser = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/login", {
                username: "lambda",
                password: "school"
            })
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/user");
            })
            .catch(err => console.log(err));
    }


    render(){
        return(
            <div>
                <form>
                    <input onSubmit={this.loginUser}
                        type="text"
                        name="username"
                        value={this.state.loginData.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.loginData.password}
                        onChange={this.handleChanges}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }


}

export default Login;