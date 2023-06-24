import React from "react";

const Interpret = ({ form, way }) => {
  return (
    <div className="survey-form" data-type={form.type}>
      {way === "editable" ? (
        <textarea
          className="form-title"
          defaultValue={form.question}
        ></textarea>
      ) : (
        <div className="form-title">{form.question}</div>
      )}
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
