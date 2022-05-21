import { useState } from 'react';

function LogicHandler() {
  const [open, setOpen] = useState(false);
  const handleCopy = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return [open, handleCopy, handleClose];
}

export default LogicHandler;
