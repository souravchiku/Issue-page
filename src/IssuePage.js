import React from 'react';
import './App.css';
const IssuePage = (props) => {

    return (
        console.log("A",props.keys,props.issues[props.keys].user.avatar_url),
        <div style={{textAlign:"center"}}>
            <h3>User Profile</h3>
            <div><img src={props.issues[props.keys].user.avatar_url} alt="No Photo Found"/></div>
            <div><b>{props.keys,props.issues[props.keys].user.login}</b></div>
            <br/>
            <div><b>Comment : </b>{props.issues[props.keys].title}</div>
            <h3>created at : {props.issues[props.keys].created_at}</h3>
            <h3>Updated at : {props.issues[props.keys].updated_at}</h3>
        </div>
    );
};

export default IssuePage;