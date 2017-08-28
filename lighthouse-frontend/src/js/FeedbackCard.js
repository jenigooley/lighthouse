import React, { Component } from 'react';

import '../feedbackCard.css';

export default function FeedbackCard(props) {
  const data = props.feedback;
  const participants = data.participants;
  participants.splice(-1, 0, 'and');

  return (
    <div className="container">

      <div className="date">
        Today at {data.date}
      </div>
        <div className="company">
          {data.companyName}
        </div>
      <div className="participants">
         {data.user.type} Interview led by {
           participants.map((participant, index)  => (
             <div className="name" key={index}>
              {participant}
             </div>
           )
         )}
      </div>
      <div className="participants">
        {data.tags.map((tag, index) => (
           <div className="tag" key={index}>
            {tag}
            </div>
           )
         )}
       </div>
      </div>
   )
  }
