import './formik-demo.css';
import './rich-editor.css';
import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { RichEditorExample } from './RichEditor';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import { Formik } from 'formik';
import { postsSchema } from '../api/posts';
import { Posts } from '../api/posts';



export class MyForm extends Component {
  
  submit = (values, actions) => {

    let description = { 
      'description': stateToHTML(values['editorState'].getCurrentContent()) 
    };
    console.log(description);

    postsSchema.validate(description);
    let postDocument = {
      description: description,
    }
    Posts.insert(postDocument);

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