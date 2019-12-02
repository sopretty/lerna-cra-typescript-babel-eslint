// export * from './button';
import * as React from 'react';
export * from './button';
export const HelloWorld = ({children}: {children: React.ReactNode}) => (
  <div>HelloWorld {children}</div>
);
