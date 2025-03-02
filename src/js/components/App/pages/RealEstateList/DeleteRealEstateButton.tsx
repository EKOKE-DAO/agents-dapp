import * as React from 'react';
import * as MdIcon from 'react-icons/md';

import Button from '../../../reusable/Button';
import ConfirmPopup from '../../../reusable/ConfirmPopup';
import { useAgentContext } from '../../../../ic/AgentContext';
import { useAppContext } from '../../AppContext';

interface Props {
  id: bigint;
  onDelete: (id: bigint) => void;
}

const DeleteRealEstateButton = ({ id, onDelete }: Props) => {
  const { deferredMinter } = useAgentContext();
  const { setAppSuccess, setAppError } = useAppContext();
  const [processing, setProcessing] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

  const onDeleteConfirm = () => {
    if (!deferredMinter) return;

    setConfirm(false);

    deferredMinter
      .delete_real_estate(id)
      .then((res) => {
        if ('Ok' in res) {
          setAppSuccess('Real estate deleted successfully');
          onDelete(id);
        } else if ('Err' in res) {
          const err = res.Err;
          setAppError(`Failed to delete real estate: ${err}`);
        }
      })
      .catch((e) => {
        setAppError(`Failed to delete real estate: ${e}`);
      });
  };

  const onDeleteButtonClick = () => {
    setProcessing(true);
    setConfirm(true);
  };

  const onCancel = () => {
    setProcessing(false);
    setConfirm(false);
  };

  return (
    <>
      <Button.Danger onClick={onDeleteButtonClick} disabled={processing}>
        <MdIcon.MdDelete className="mr-2 inline" size={24} />
        Delete
      </Button.Danger>
      <ConfirmPopup
        title="Are you sure you want to delete this property?"
        message="This action cannot be undone. Are you sure you want to delete this property?"
        onCancel={onCancel}
        onConfirm={onDeleteConfirm}
        hidden={!confirm}
      />
    </>
  );
};

export default DeleteRealEstateButton;
