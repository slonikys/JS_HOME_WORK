import React from "react";

export default ({ onSubmit }) => {
  let input = null;
  return (
    <div>
      <form
        action="#"
        className="main-form"
        onSubmit={evt => {
          evt.preventDefault();
          onSubmit(input.value);
        }}
      >
        <input className="input" type="text" ref={node => (input = node)} />
      </form>
    </div>
  );
};
