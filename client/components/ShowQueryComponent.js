import React from 'react';
const ShowQueryCmponent = (props) => (
  <div>
    {props.queries.map((q) => {
      return (
        <div className='queryResult'>{q.Title}</div>
      )
    })}
  </div>
);

export default ShowQueryCmponent;