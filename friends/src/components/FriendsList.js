import React, { useState, useEffect } from 'react';
import FriendCard from './FriendCard';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [allFriends, setAllFriends] = useState()

    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log("Res for List of Friends", res);
                setAllFriends(res);
            })
            .catch()
    })

    return(
        <div>
            {/* {allFriends.map(friend => {
                <FriendCard
                    key={friend.id}
                    friend={friend} />
            })} */}
        </div>
    )
};

export default FriendsList;