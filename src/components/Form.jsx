import React from 'react';

const Form = ({ setInput, handleSubmit, input }) => {
  return (
    <section className="container">
      <h4>color generator</h4>
      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="#f15025"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: input }}
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
