// export * from './button';
import * as React from 'react';
export * from './button';
import {Button} from './button';
export const HelloWorld = ({children}: {children: React.ReactNode}) => (
  <div>
    HelloWorld {children} <Button>Button</Button>
  </div>
);
