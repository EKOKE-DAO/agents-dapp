import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../reusable/Container';
import { useAppContext } from '../App/AppContext';

const AppSuccess = () => {
  const { appSuccess, setAppSuccess } = useAppContext();
  const [dismissTimeout, setDismissTimeout] = React.useState<NodeJS.Timeout>();

  const onDismiss = () => {
    setAppSuccess(undefined);
  };

  React.useEffect(() => {
    return () => {
      if (dismissTimeout) {
        clearInterval(dismissTimeout);
      }
    };
  }, []);

  React.useEffect(() => {
    if (appSuccess === undefined) {
      return;
    }
    setDismissTimeout(
      setTimeout(() => {
        onDismiss();
        clearTimeout(dismissTimeout);
      }, 5_000),
    );
  }, [appSuccess]);

  if (appSuccess) {
    return (
      <Container.FlexCols>
        <Container.FlexRow className="top-4 fixed mx-auto border shadow-lg z-50 right-0 left-0 w-fit items-center gap-4 justify-between p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 animate__animated animate__slideInDown">
          <Container.Container>
            <Icon.FiInfo size={16} className="text-green-800 inline mr-2" />
            <span className="text-xs">{appSuccess}</span>
          </Container.Container>
          <Container.Container>
            <Icon.FiX
              size={16}
              className="text-green-800"
              onClick={onDismiss}
            />
          </Container.Container>
        </Container.FlexRow>
      </Container.FlexCols>
    );
  } else {
    return null;
  }
};

export default AppSuccess;
