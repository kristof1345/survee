import React from "react";

const Interpret = ({ form }) => {
  console.log(form);
  return (
    <div className="survey-form" data-type={form.type}>
      <textarea className="form-title" defaultValue={form.question}></textarea>
      {form.type === "fillin" && (
        <textarea
          className="form-answer"
          placeholder="Your answer..."
        ></textarea>
      )}
    </div>
  );
};

export default Interpret;
