import React, { Component } from 'react';
import { postFeedback, getFeedbackList } from './apiUtils.js'

export default class FeedbackList extends Component {

   constructor(props) {
   super(props);
   this.state = { companyName: '', feedbackList: {} };
   this.componentDidMount = this.componentDidMount.bind(this);
   this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   }

    componentDidMount(){
      this.setState({ feedbackList: getFeedbackList() });
    }

  componentDidMount(){
    getFeedbackList().then(feedbackList => {
      this.setState({ feedbackList });
    }).catch(e => {
      console.log(e);
    });
}

   handleCompanyNameChange(e) {
   this.setState({ companyName: e.target.value });
   }

   handleSubmit(e) {
     e.preventDefault();
     postFeedback(this.state)
   }

   render() {
     return (
       <form onSubmit={ this.handleSubmit }>
         <input
           type='companyName'
           placeholder='Say something…'
           value={ this.state.companyName }
           onChange={ this.handleCompanyNameChange }
         />
         <input
           type='submit'
           value='feedback'
         />
       </form>
     )
    }
  }
