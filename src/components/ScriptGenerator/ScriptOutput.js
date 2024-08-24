import React from 'react';

function ScriptOutput({ script }) {
  return (
    <div>
      <h3>Your Comedy Script</h3>
      {script ? <p>{script}</p> : <p>No script generated yet.</p>}
    </div>
  );
}

export default ScriptOutput;
