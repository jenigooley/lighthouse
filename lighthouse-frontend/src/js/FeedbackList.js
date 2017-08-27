import React, { Component } from 'react';
import { postFeedback, getFeedbackList } from './apiUtils.js'

import FeedbackCard from './FeedbackCard.js';

const cards = [
  {
    'date': '2017-01-26',
    'user': {
      'firstName': 'Bonnibelle',
      'lastName': 'Bubblegum',
      'type': 'Customer',
    },
    'companyName': 'Science Time!',
    'participants': ['Finn', 'Jake'],
    'tags': ['schedule', 'invoice', 'load time'],
    'attachments': [
      {
        'filename': 'explosions.jpg',
        'url': ""
      },
    ],
    'notes': `Adventure Time, come on grab your friends.`,
  },
  {
  'date': '2017-01-26',
  'user': {
    'firstName': 'Annie',
    'lastName': 'Stargazer',
    'type': 'Partner',
  },
  'companyName': 'Dogs are Gods Inc',
  'participants': ['Mildred', 'Saxon', 'Dorothy'],
  'tags': ['schedule', 'invoice', 'load time'],
  'attachments': [
    {
      'filename': 'too_much_sauce',
      'url': "",
    },
  ],
  'notes': `There was something in her black eyes
     that was as insubstantial as light but at the
     same time slower and darker than water,
     slower than anything I had ever seen. It reminded
     me of one of those moments of sadness that
     sometimes come when you're waiting for an
     inconsequential thing, like an elevator or a stop
     on the subway, and feel a pause that is so still that
     it seals itself up around you, lifts away from the stream
     of time, and hangs suspended there. I felt drawn toward her,
     the way molecules in motion are drawn toward empty spaces.`,
}]

export default class FeedbackList extends Component {
  constructor(props) {
    super(props);
    this.state = { companyName: '', feedbackList: {} };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      postFeedback({ companyName: this.state.companyName})
    }

  render() {
    return (
      <div>
        {cards.map((card, index) => (
          <FeedbackCard card={card} key={index}/>
          )
        )}
      </div>
    )
  }
}
