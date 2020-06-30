import React from 'react';

const InputComponent = (props) => {
  return (
  <div>
    <div>
      <input type='text'value={props.queryName} placeholder='query name'onChange={props.setQuery} name='queryName'/>
    </div>
    <div>
        <input type='text'value={props.query} placeholder="Enter query to execute"onChange={props.setQuery} name='query'/>
    </div>
      <button onClick={props.executeQuery}>Execute</button>
  </div>
  )
};

export default InputComponent;