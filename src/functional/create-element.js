import React from 'react';

export default function CreateElement() {
  return React.createElement(
    'div',
    null,
    'Hello World'
  );
}

CreateElement.displayName = 'CreateElementHelloWorld';
