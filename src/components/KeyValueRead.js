import React from "react";
import './KeyValueRead.scss';

export default function KeyValueRead(props) {
  return (
    <div className="key-value-line"><span className="key-value-line__label">{props.label}:</span>{props.text}</div>
  )
}