import React from 'react';
import moment from 'moment';

import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        freindsList: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get("/api/data")
            .then(res => {
                this.setState({
                    freindsList: res.data.data
                })
                .catch(err => console.log(err))
            })
    };

    render(){
        return (
            <div>
                {this.state.friendsList.map(friend =>
                    <div>
                        <h4>{friend.name}</h4>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                    )}
            </div>
        )
    }    

}

export default FriendsList;