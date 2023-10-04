import React from 'react';
import Color from './Color';

const Colors = ({ colors, handleCopyToClipboard }) => {
  return (
    <section className="colors">
      {colors.map((item, index) => {
        return (
          <Color
            key={index}
            item={item}
            index={index}
            handleCopyToClipboard={handleCopyToClipboard}
          />
        );
      })}
    </section>
  );
};

export default Colors;
