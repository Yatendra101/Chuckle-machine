import React from 'react';

function ScriptHistory({ history }) {
  return (
    <div>
      <h3>Script History</h3>
      <ul>
        {history.map((script, index) => (
          <li key={index}>{script}</li>
        ))}
      </ul>
    </div>
  );
}

export default ScriptHistory;
