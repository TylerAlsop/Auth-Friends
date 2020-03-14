import React, { useState, useEffect } from 'react';
import AddFriendForm from './AddFriendForm';
import FriendCard from './FriendCard';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [allFriends, setAllFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log("Res for List of Friends", res);
                setAllFriends(res.data);
            })
            .catch()
    }, [])

    return(
        <div className="friends-list-component">
            <div className="add-friend">
                <AddFriendForm />
            </div>
            <div className="friends-list">
                {allFriends.map(friend => (
                    <FriendCard
                        key={friend.id}
                        friend={friend} />
                ))}
            </div>
        </div>
    )
};

export default FriendsList;



//////////////////  For Adding A Loding Icon Later  //////////////////

// {this.props.fetchingData && (
//     <div className="key spinner">
//       <Loader type="Puff" color="#204963" height="60" width="60" />
//       <p>Loading Data</p>
//     </div>
//   )}