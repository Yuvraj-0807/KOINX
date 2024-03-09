import React from 'react';

export const ColoredBar = ({ width, background, percentage, label }) => {
  return (
    <div className="font-medium text-sm leading-[22px] text-[#7C7E8C] flex gap-[7px] items-center">
      <p>{label}</p>
      <div
        style={{ width: width, background: background }}
        className={`h-2 rounded-sm`}
      ></div>{' '}
      <p>{percentage}</p>
    </div>
  );
};
