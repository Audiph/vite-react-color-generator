import React from 'react';
import Color from './Color';
import { nanoid } from 'nanoid';

const Colors = ({ colors, handleCopyToClipboard }) => {
  return (
    <section className="colors">
      {colors.map((item, index) => {
        return (
          <Color
            key={nanoid()}
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
