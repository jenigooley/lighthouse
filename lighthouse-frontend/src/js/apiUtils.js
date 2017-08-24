import React from 'react';

export function postFeedback(data) {
  console.log('post client:', JSON.stringify(data))
  fetch('http://localhost:3001/feedback/', {
  	method: 'POST',
  	body: JSON.stringify(data),
  	headers: new Headers({
  		'Content-Type': 'text'
  	})
  }).then(response => {
      return response.json();
  });
};

export function getFeedbackList() {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3001/', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => {
      return response.json();
    }).then(json => {
      resolve(json);
    }).catch(e => {
      reject(e);
    });
  });
};
