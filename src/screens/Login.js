import React, { Component } from 'react';

export default (props) => {
return (<div>Login
    <button onClick={() => {props.login("test", "test")}}>Login</button>
</div>)
}