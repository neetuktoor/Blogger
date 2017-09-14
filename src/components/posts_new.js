import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          //wires up pregenerated eventhandlers
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title for Post"
            //this field will produce title component
            name="title"
            //this displays title component/field on screen
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
    //create errors object
    const errors = {};
    //validate inputs from from values
    if (!values.title) {
      errors.title = "Enter a title!";
    }
    if (!values.categories) {
      errors.categories = "Enter some Categories!";
    }
    if (!values.content) {
      errors.content = "Please enter some content!";
    }

    //if errors is empty, form is fine to submit
    //if errors has any properties, redux forms assumes form is invalid
    return errors;
}

export default reduxForm({
  validate,
  //unique string to identify this particular form
  form: 'PostsNewForm'
})(
  connect(null,{ createPost })(PostsNew)
);
