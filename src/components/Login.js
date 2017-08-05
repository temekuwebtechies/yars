import React, { Component } from 'react';

export default (props) => {
console.log("Login props", props);
return (<div>Login
    <button onClick={() => {props.login("test", "test")}}>Login</button>
</div>)
}