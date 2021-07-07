import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import "./order-details.scss";

interface IProps {
  modalIsOpen: boolean
  setModalIsOpen: Function
  data: {}
}

export const OrderDetailsModal: React.FC<IProps> = ({
  modalIsOpen,
  setModalIsOpen,
  data,
}: IProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [ , setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  console.log(data, "modal lindo maravilgoso")
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {data}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Legal
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
