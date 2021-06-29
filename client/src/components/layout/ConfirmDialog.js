import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const ConfirmDialog = ({ handleClose, open }) => {
  return (
    <Dialog onClose={handleClose} open={open} maxWidth='sm'>
      <DialogContent>
        <Typography variant='h2'>Yay!</Typography>
        <Typography gutterBottom>
          You’ll receive an email when it’s time to join.
        </Typography>
        <Typography gutterBottom>
          We only open availability once a month for the first 100 people
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleClose}
          color='primary'
          variant='contained'
        >
          Can't Wait
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
