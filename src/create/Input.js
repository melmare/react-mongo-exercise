import React from 'react';

export function Input(props) {
  const { name, type, onChange, value } = props;
  return (
    <label>
      {name}
      <input name={name} type={type} onChange={onChange} value={value} />
    </label>
  );
}
