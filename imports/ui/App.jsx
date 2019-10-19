import React, { Component } from 'react';
import './formik-demo.css';
import { MyForm } from './Form';
import PostsList from './PostsList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Meteor, React, Formik and DraftJS</h1>
        <p>See <a href="https://codesandbox.io/s/QW1rqjBLl">jaredpalmer example</a>.<br/>
        Our example is a mini meteor / react application.<br/>
        The form is composed of 2 fields with the Draft.js editor and uses formik to validate the form.<br/>
        </p>
        <PostsList />
        <MyForm />
      </div>
    );
  }
}