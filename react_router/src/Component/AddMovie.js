import { React } from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, Input } from "@mui/material";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  color: "black",
  border: "2px solid #ffffff",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

export function AddMovie({ handleAdd }) {
  const [open, setOpen] = useState(false);
  const [nMovie, setNmovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Add = () => {
    if (nMovie.title.length <= 0) {
      alert("Please enter a new movie title");
    }
    handleAdd(nMovie);
    setNmovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 0,
    });
    handleClose();
  };

  return (
    <>
    
    <Link className="movie-add" to={'/'}>
      <Button variant="contained" onClick={handleOpen}>Add movie here</Button>
      </Link>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Movie
          </Typography>
          <br />
          <FormControl>
            <InputLabel htmlFor="my-input">Movie Title</InputLabel>
            <Input
              id="my-input"
              onChange={(e) => setNmovie({ ...nMovie, title: e.target.value })}
            />
          </FormControl>
          <br />
          <br />
          <FormControl>
            <InputLabel htmlFor="my-input">Poster URL</InputLabel>
            <Input
              id="my-input"
              onChange={(e) =>
                setNmovie({ ...nMovie, posterURL: e.target.value })
              }
            />
          </FormControl>
          <br />
          <br />
          <FormControl>
            <InputLabel htmlFor="my-input">Rating</InputLabel>
            <Input
              id="my-input"
              type="number"
              onChange={(e) =>
                setNmovie({ ...nMovie, rating: +e.target.value })
              }
            />
          </FormControl>
          <br />
          <br />
          <FormControl>
            <InputLabel htmlFor="my-input">Description</InputLabel>
            <Input
              id="my-input"
              onChange={(e) =>
                setNmovie({ ...nMovie, description: e.target.value })
              }
            />
          </FormControl>
          <br />
          <br />
          <Button color="primary" variant="outlined" onClick={handleClose}>
            Close
          </Button>
          <Button color="primary" variant="contained" onClick={Add}>
            Save Changes
          </Button>
        </Box>
      </Modal>
    </>
  );
}
