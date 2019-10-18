import './formik-demo.css';
import './rich-editor.css';
import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { RichEditorExample } from './RichEditor';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import { Formik } from 'formik';

export class MyForm extends Component {
  
  submit = (values, actions) => {
    console.log(stateToHTML(values['editorState'].getCurrentContent()));
  }

  render() {
    
    let initialValues = {
      editorState: new EditorState.createEmpty(),
    }

    return (
      <Formik
        onSubmit={ this.submit }
        initialValues={ initialValues }
        validateOnBlur={ false }
        validateOnChange={ false }
        >
      {({
        values,
        touched,
        dirty,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        setFieldValue,
        isSubmitting,
      }) => (
      <form onSubmit={ handleSubmit } >
        <RichEditorExample
          editorState={values.editorState}
          onChange={setFieldValue}
          onBlur={handleBlur}
        />
        <div>
          <button 
            type="submit" 
            disabled={ isSubmitting } 
            className="btn btn-primary"
          >Enregistrer</button>
        </div>
      </form>
      )}
      </Formik>
    )
  }
}