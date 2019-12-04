import * as React from 'react';
export const Button: React.FunctionComponent = () => {
  const [state, setState] = React.useState<null | string>(null);

  React.useEffect(() => {
    if (!state) {
      setState('test');
    }
  }, [state]);

  return <button>Button</button>;
};
