import './formik-demo.css';
import './rich-editor.css';
import React from 'react';
import { render } from 'react-dom';
import { withFormik } from 'formik';
import { EditorState } from 'draft-js';
import { RichEditorExample } from './RichEditor';

const formikEnhancer = withFormik({
  mapPropsToValues: props => ({
    editorState: new EditorState.createEmpty(),
    email: '',
  }),
 
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'MyForm',
});

const MyForm = ({
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
  <form onSubmit={handleSubmit}>

    <RichEditorExample
      editorState={values.editorState}
      onChange={setFieldValue}
      onBlur={handleBlur}
    />

    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>

  </form>
);


export const MyEnhancedForm = formikEnhancer(MyForm);