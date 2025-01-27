import React, { useState } from "react";
import {
  Box,
  Dialog,
  IconButton,
  TextField,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchPanel: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = () => {
    console.log("Buscar:", searchQuery);
    // Puedes agregar aquí lógica para manejar la búsqueda
    setOpen(false);
  };

  return (
    <>
      {/* Ícono de búsqueda */}
      <Tooltip title='Buscar'>
      <IconButton
        onClick={handleOpen}
        aria-label="Abrir panel de búsqueda"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": { backgroundColor: "primary.dark" },
        }}
      >
        <SearchIcon />
      </IconButton>
      </Tooltip>
      {/* Panel emergente */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
          Búsqueda
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" mb={2}>
            Ingresa el término que deseas buscar:
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            label="Buscar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{color:'red'}}>
            Cancelar
          </Button>
          <Button
            onClick={handleSearch}
            variant="contained"
            color="primary"
            disabled={!searchQuery.trim()}
          >
            Buscar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SearchPanel;