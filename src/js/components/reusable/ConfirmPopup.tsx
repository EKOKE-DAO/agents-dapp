import Button from './Button';
import Container from './Container';
import Paragraph from './Paragraph';

interface Props {
  hidden: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  message: string;
}

const ConfirmPopup = ({
  hidden,
  onConfirm,
  onCancel,
  title,
  message,
}: Props) => {
  if (hidden) {
    return null;
  }

  return (
    <Container.Container className="h-screen left-0 overflow-hidden fixed right-0 top-0 w-screen z-50">
      <Container.Container className="bg-gray-800/60 h-screen w-screen" />
      <Container.Container className="bg-white bottom-0 h-fit sm:h-[70vh] sm:rounded-t-xl left-0 m-auto p-8 fixed right-0 top-0 sm:top-auto sm:bottom-0 w-fit min-w-[25%] sm:w-full">
        <Container.FlexCols className="gap-4 text-lg p-4">
          <span className="text-lg text-center block text-text">{title}</span>
          <Container.Container className="grid grid-cols-2 sm:grid-cols-1 gap-4 px-4">
            <Paragraph.Leading>{message}</Paragraph.Leading>
          </Container.Container>
          <Container.FlexRow className="gap-4 items-center justify-between">
            <Button.Primary onClick={onConfirm}>Confirm</Button.Primary>
            <Button.Alternative onClick={onCancel}>Cancel</Button.Alternative>
          </Container.FlexRow>
        </Container.FlexCols>
      </Container.Container>
    </Container.Container>
  );
};

export default ConfirmPopup;
