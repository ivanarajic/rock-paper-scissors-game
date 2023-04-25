import React from 'react';

function Button({ name }) {
  return (
    <button
      type="button"
      className="tracking-widest uppercase rounded-lg text-white border border-white/70 p-2 px-10 text-sm sm:text-base hover:bg-slate-300 hover:text-black"
    >
      {name}
    </button>
  );
}

export default Button;
