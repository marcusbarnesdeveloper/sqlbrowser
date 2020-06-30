import React from 'react';

const PastQueriesComponent = (props) => (
  <div className='past-queries'>
    <div style={{fontSize:'2rem'}}>Past Queries</div>
    {props.pastQueries.map(q => (
      <div className='queryResult'>{q}</div>
    ))}
  </div>
);

export default PastQueriesComponent;