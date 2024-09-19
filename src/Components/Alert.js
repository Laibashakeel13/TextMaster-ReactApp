import React from 'react';


export default function Alert(props) {
  if (!props.alert) return null;

  const alertClass = props.alert.type === 'success' ? 'alert-success' : 'alert-info';

  return (
    <div className="alert-container">
      <div className={`alert ${alertClass} alert-dismissible fade show`} role="alert">
        {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => props.setAlert(null)}
        ></button>
      </div>
    </div>
  );
}
