import React from 'react';

const FriendCard = (props) => {
    return(
        <div className="friend-card">
            <h2 className="friend-name">{props.friend.name}</h2>
            <div className="friend-info">
                <h3 id="personal-info" className="friend-age">Age: {props.friend.age}</h3>
                <h3 id="personal-info" className="friend-email">E-mail: {props.friend.email}</h3>
            </div>

        </div>
    );
};

export default FriendCard;