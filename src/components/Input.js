import React from 'react';
import classnames from 'classnames';

function Input({
  label,
  value,
  type,
  onChange,
  placeholder,
  name,
  onFocus,
  onBlur,
  error,
  onKeyUp,
}) {
  return (
    <div className="form-group-item">
      <label style={{ width: '20%' }} htmlFor={label}>
        Pass the {label}
      </label>
      <input
        className={classnames('form-control', {
          'is-invalid': error,
        })}
        placeholder={placeholder}
        type={type}
        value={value}
        id={label}
        onChange={onChange}
        name={name}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
        onKeyUp={onKeyUp}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}
export default Input;
