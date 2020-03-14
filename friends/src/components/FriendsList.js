import React, { useState, useEffect } from 'react';
import AddFriendForm from './AddFriendForm';
import FriendCard from './FriendCard';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [allFriends, setAllFriends] = useState([]);
    const [friendAdded, setFriendAdded] = useState(false);

    useEffect(() => {
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                console.log("Res for List of Friends", res);
                setAllFriends(res.data);
            })
            .catch()
    }, [friendAdded])

    return(
        <div className="friends-list-component">
            <div className="add-friend">
                <AddFriendForm setFriendAdded={setFriendAdded} />
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