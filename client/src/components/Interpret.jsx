import React from "react";

const Interpret = ({ form, way }) => {
  return (
    <div className="survey-form" data-type={form.type}>
      {way === "editable" ? (
        <span
          className="form-title"
          // role="textbox"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          {form.question}
        </span>
      ) : (
        <div className="form-title">{form.question}</div>
      )}
      {form.type === "fillin" && (
        <span
          className="form-answer"
          placeholder="Your answer..."
          // role="textbox"
          contentEditable={true}
          suppressContentEditableWarning={true}
        ></span>
      )}
    </div>
  );
};

export default Interpret;
