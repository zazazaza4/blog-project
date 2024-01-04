/* eslint-disable i18next/no-literal-string */
import { FC, useEffect, useState } from 'react';

import { Button } from 'shared/ui/Button/Button';

export const BugButton: FC = () => {
  const [error, setError] = useState(false);

  const OnThrowError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={OnThrowError}>
      throw error
    </Button>
  );
};
