import React from 'react';
import { Header } from '../src';

export default {
  title: 'Component|Header',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={1}>Level 1</Header>
      <Header level={2}>Level 2</Header>
      <Header level={3}>Level 3</Header>
    </div>
  );
};

export const Decoration = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header strong level={3}>
        Strong
      </Header>
      <Header underline level={3}>
        Underline
      </Header>
      <Header delete level={3}>
        Delete
      </Header>
      <Header strong underline delete level={3}>
        Mixed
      </Header>
    </div>
  );
};

export const Color = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header color="red" level={3}>
        Strong
      </Header>
      <Header color="green" level={3}>
        Underline
      </Header>
      <Header color="blue" level={3}>
        Delete
      </Header>
    </div>
  );
};

export const Editable = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header editable placeholder="Editable Header" level={1} />
    </div>
  );
};
