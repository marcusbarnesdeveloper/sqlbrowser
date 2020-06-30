import React from 'react';
import InputComponent from './InputComponent';
import ShowQueryComponent from './ShowQueryComponent';
import PastQueriesComponent from './PastQueriesComponent';


const ExecuteQueryComponent = (props) => (
  <div>
    <div className='query-box'>
      <InputComponent setQuery={props.setQuery} query={props.query} executeQuery={props.executeQuery} queryName={props.queryName}/>
      <PastQueriesComponent pastQueries={props.pastQueries}/>
    </div>
    <ShowQueryComponent queries={props.queries}/>
    {props.showError && <div style={{color:'red'}}>Invalid query</div>}
    {props.fetching && <div style={{color:'green'}}>Fetching....</div>}
  </div>
);

export default ExecuteQueryComponent;