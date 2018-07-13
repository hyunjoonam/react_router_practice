import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeedComponent extends Component {
    render(){
        return (
            <div>
                <h1>This is the Feed Component</h1>
                <Link to="/users"> take me back to the users plz</Link>
            </div>
        )
    }
}

export default FeedComponent;