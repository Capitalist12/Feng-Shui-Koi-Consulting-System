import React from 'react';
import { Tag } from 'antd';

const TagRender = (props) => {
   const { label, value, closable, onClose, options } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  // Find the color for the current tag based on the value
  const option = options.find(opt => opt.value === value);
  const color = option ? option.color : undefined;

  return (
    <Tag
      color={color}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginInlineEnd: 4,
      }}
    >
      {label}
    </Tag>
  );
};

export default TagRender;
