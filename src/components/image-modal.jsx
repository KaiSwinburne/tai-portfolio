import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'transparent',
    boxShadow: 24,
    p: 4,
};

const cursor_style = {
    cursor: 'zoom-in'
}

const image_style = {
boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
}

export const ImageModal = ({img="", alt=""}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} style={cursor_style}>
                <img src={img} alt={alt} className="rounded-2xl" style={image_style}/>
            </Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={img} alt={alt} style={image_style}/>
                </Box>
            </Modal>
        </div>
    );
};