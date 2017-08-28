import React, { Component } from 'react';

import { postFeedback } from './apiUtils.js'

export default class FeedbackForm extends Component{
 constructor(props) {
    super(props);
    this.state = {
      company: null,
      date: null,
      userType: null,
      participants: [],
      tags: [],
    };
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleParticipantsChange = this.handleParticipantsChange.bind(this);
    this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCompanyNameChange(e) {
    this.setState({ company: e.target.value });
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value });
  }

  handleParticipantsChange(e) {
    this.setState({ participants: e.target.value });
  }

  handleUserTypeChange(e) {
    this.setState({ userType: e.target.value });
  }

  handleTagsChange(e) {
    this.setState({ tags: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
      postFeedback({
        company: this.state.company,
        date: this.state.date,
        userType: this.state.userType,
        participants: this.state.participants,
        tags: this.state.tags,
      })
    }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type='company'
          placeholder='company'
          onChange={ this.handleCompanyNameChange }
        />
        <input
          type='date'
          placeholder='date'
          onChange={ this.handleDateNameChange }
        />
        <input
          type='userType'
          placeholder='user type'
          onChange={ this.handleUserTypeChange }
        />
        <input
          type='participants'
          placeholder='participants'
          onChange={ this.handleParticipantsChange }
        />
        <input
          type='tags'
          placeholder='tags'
          onChange={ this.handleTagsChange }
        />
        <input
          type='submit'
          value='feedback'
        />
      </form>
    )
  }
}
