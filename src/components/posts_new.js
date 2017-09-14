import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          //wires up pregenerated eventhandlers
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form>
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
      </form>
    );
  }
}

export default reduxForm({
  //unique string to identify this particular form
  form: 'PostsNewForm'
})(PostsNew);
