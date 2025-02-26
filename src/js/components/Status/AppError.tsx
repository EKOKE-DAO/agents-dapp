import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../reusable/Container';
import { useAppContext } from '../App/AppContext';

const AppError = () => {
  const { appError, setAppError } = useAppContext();
  const [dismissTimeout, setDismissTimeout] = React.useState<NodeJS.Timeout>();

  const onDismiss = () => {
    setAppError(undefined);
  };

  React.useEffect(() => {
    return () => {
      if (dismissTimeout) {
        clearInterval(dismissTimeout);
      }
    };
  }, []);

  React.useEffect(() => {
    if (appError === undefined) {
      return;
    }
    setDismissTimeout(
      setTimeout(() => {
        onDismiss();
        clearTimeout(dismissTimeout);
      }, 5_000),
    );
  }, [appError]);

  if (appError) {
    return (
      <Container.FlexCols>
        <Container.FlexRow className="top-4 fixed mx-auto border shadow-lg z-50 right-0 left-0 w-fit items-center gap-4 justify-between p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 animate__animated animate__slideInDown">
          <Container.Container>
            <Icon.FiAlertCircle
              size={16}
              className="text-red-800 inline mr-2"
            />
            <span className="text-xs">{appError}</span>
          </Container.Container>
          <Container.Container>
            <Icon.FiX size={16} className="text-red-800" onClick={onDismiss} />
          </Container.Container>
        </Container.FlexRow>
      </Container.FlexCols>
    );
  } else {
    return null;
  }
};

export default AppError;
