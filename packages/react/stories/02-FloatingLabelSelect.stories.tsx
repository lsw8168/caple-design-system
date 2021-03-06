import React from 'react';
import { FloatingLabelSelect } from '../src';

export default {
  title: 'Component|FloatingLabelSelect',
};

export const Default = () => {
  return (
    <div style={{ padding: 30, width: 400 }}>
      <FloatingLabelSelect label="Title" onChange={value => console.log(value)}>
        <FloatingLabelSelect.Option id="id1" value="1">
          Option 1
        </FloatingLabelSelect.Option>
        <FloatingLabelSelect.Option id="id2" value="2">
          Option 2
        </FloatingLabelSelect.Option>
        <FloatingLabelSelect.Option id="id3" value="3" disabled>
          Option 3
        </FloatingLabelSelect.Option>
      </FloatingLabelSelect>
    </div>
  );
};

export const Loading = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <FloatingLabelSelect label="Title" loading>
        <FloatingLabelSelect.Option id="id1" value="1">
          Option 1
        </FloatingLabelSelect.Option>
        <FloatingLabelSelect.Option id="id2" value="2">
          Option 2
        </FloatingLabelSelect.Option>
        <FloatingLabelSelect.Option id="id3" value="3" disabled>
          Option 3
        </FloatingLabelSelect.Option>
      </FloatingLabelSelect>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <FloatingLabelSelect label="Title" disabled>
        <FloatingLabelSelect.Option id="id1" value="1">
          Option 1
        </FloatingLabelSelect.Option>
        <FloatingLabelSelect.Option id="id2" value="2">
          Option 2
        </FloatingLabelSelect.Option>
        <FloatingLabelSelect.Option id="id3" value="3">
          Option 3
        </FloatingLabelSelect.Option>
      </FloatingLabelSelect>
    </div>
  );
};

export const Readonly = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <FloatingLabelSelect label="Title" readonly>
        <FloatingLabelSelect.Option id="id1" value="1">
          Option 1
        </FloatingLabelSelect.Option>
        <FloatingLabelSelect.Option id="id2" value="2">
          Option 2
        </FloatingLabelSelect.Option>
        <FloatingLabelSelect.Option id="id3" value="3">
          Option 3
        </FloatingLabelSelect.Option>
      </FloatingLabelSelect>
    </div>
  );
};

export const Error = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <FloatingLabelSelect label="Title" error>
        <FloatingLabelSelect.Option id="id1" value="1">
          Option 1
        </FloatingLabelSelect.Option>
        <FloatingLabelSelect.Option id="id2" value="2">
          Option 2
        </FloatingLabelSelect.Option>
        <FloatingLabelSelect.Option id="id3" value="3" disabled>
          Option 3
        </FloatingLabelSelect.Option>
      </FloatingLabelSelect>
    </div>
  );
};
