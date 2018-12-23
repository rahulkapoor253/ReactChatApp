import React, { Component } from 'react';

import './RoomList.css';

class RoomList extends React.Component {

render() {
    return(
        <div className="rooms-list">
            <div>RoomList</div>
            
            <ol>
            {
                this.props.rooms.map(
                    room => {
                        return(
                            <li key={room.name}>
                                <a href="#">{room.name}</a>
                            </li>
                        )
                    }
                )
            }

</ol>
        </div>
    )
}

}

export default RoomList;