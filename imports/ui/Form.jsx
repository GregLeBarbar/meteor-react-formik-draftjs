import './formik-demo.css';
import './rich-editor.css';
import React, { Component, Fragment } from 'react';
import { EditorState } from 'draft-js';
import { RichEditorExample } from './RichEditor';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import { Formik } from 'formik';
import { postsSchema } from '../api/posts';
import { Posts } from '../api/posts';

export class MyForm extends Component {

  submit = (values, actions) => {

    let post = { 
      'description1': stateToHTML(values['description1'].getCurrentContent()),
      'description2': stateToHTML(values['description2'].getCurrentContent()),
    };

    postsSchema.validate(post);
    let postDocument = {
      description1: post.description1,
      description2: post.description2,
    }
    Posts.insert(postDocument);

    actions.setSubmitting(false);
    actions.resetForm();
  }

  render() {
    
    let initialValues = {
      description1: new EditorState.createEmpty(),
      description2: new EditorState.createEmpty(),
    }

    return (
      <Fragment>
        <h2>Add a new POST</h2>
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
          <label>Description 1</label>
          <RichEditorExample
            editorState={values.description1}
            reference="description1"
            onChange={setFieldValue}
            onBlur={handleBlur}
          />
          <label>Description 2</label>
          <RichEditorExample
            editorState={values.description2}
            reference="description2"
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
      </Fragment>
    )
  }
}
