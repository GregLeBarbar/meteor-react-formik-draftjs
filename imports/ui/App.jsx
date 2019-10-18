import React, { Component } from 'react';
import './formik-demo.css';
import { MyEnhancedForm } from './Form';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to Meteor React Formik and DraftJS</h1>
        <MyEnhancedForm />
      </div>
    );
  }
}