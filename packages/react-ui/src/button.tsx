import * as React from 'react';
export const Button: React.FunctionComponent = () => {
  const [state, setState] = React.useState<null | string>(null);

  React.useEffect(() => {
    setState('test' + state);
  }, [state]);

  return <button>Button</button>;
};
