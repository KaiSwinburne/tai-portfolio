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

const default_image_style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '85vw',
    maxHeight: '85vh',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const text_button_style = {
    color: '#36ADA3',
    fontWeight: 500,
    fontSize: '18px',
    fontFamily: "'Space Grotesk', sans-serif",
    textTransform: 'none',
    padding: '2px'
}

const cursor_style = {
    cursor: 'zoom-in'
}

const image_style = {
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
}

export const ImageModal = ({img="", alt="", text_preview=false, default_style=false}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {text_preview ?
                <Button onClick={handleOpen} style={text_button_style}>{alt}</Button>
            : 
                <Button onClick={handleOpen} style={cursor_style}>
                    <img src={img} alt={alt} className="rounded-2xl" style={image_style}/>
                </Button>
            }
            
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={img} alt={alt} style={default_style ? default_image_style : image_style}/>
                </Box>
            </Modal>
        </div>
    );
};