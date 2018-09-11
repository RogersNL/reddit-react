import React from 'react';
import PropTypes from 'prop-types';

function PostRulesConfirmation(props){
  return (
    <div>
      <h3>Please review the rules below before posting.</h3>
      <h4>Rules:</h4>
      <ul>
        <li>No hate</li>
        <li>Safe for work</li>
        <li>No soliciting</li>
        <li>No impersonating a moderator</li>
      </ul>
      <button className="btn btn-warning" onClick={props.onRulesConfirmation}>Got it!</button>
    </div>
  );
}
PostRulesConfirmation.propTypes = {
  onRulesConfirmation: PropTypes.func
};
export default PostRulesConfirmation;
