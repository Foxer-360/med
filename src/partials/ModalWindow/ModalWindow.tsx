import * as React from 'react';
import Modal from 'react-responsive-modal';

export interface ModalProps {
  textBig: string;
  textSmall: string;
}

export function ModalWindow(props: ModalProps) {
  const [open, setOpen] = React.useState(true);
  
  return (
    <Modal 
      classNames={{modal: 'modalWindow'}}
      open={open} 
      onClose={() => setOpen(false)} 
      center={true}
    >
      <h1>{props.textBig}</h1>
      <h3>{props.textSmall}</h3>
    </Modal>
  );
}

export default ModalWindow;
