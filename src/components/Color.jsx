import React from 'react';
import { toast } from 'react-toastify';

const Color = ({ item, index, handleCopyToClipboard }) => {
  const hex = item.hexString();
  const weight = item.weight;
  return (
    <article
      onClick={() => handleCopyToClipboard(hex)}
      className={index <= 10 ? 'color' : 'color color-light'}
      style={{ backgroundColor: hex }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};

export default Color;
