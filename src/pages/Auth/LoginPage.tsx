import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../../../public/gearth.png";
import imgBg from "../../assets/images/offer-bg-shape-right.png";

type LoginPageProps = {
  onLogin: () => void;
};

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "admin@mail.com" && password === "123") {
      onLogin();
      navigate("/home");
    } else {
      setError("Contraseña o usuario incorrecto.");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Iniciar sesión con Google");
    onLogin();
    navigate("/home");
  };

  return (
   <div className="bg-[#3c72fc]">

    <Container
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(90deg, #3c72fc -10.59%, #00060c 300.59%)",
      
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          position: "relative",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <img
          src={imgBg}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            opacity: 0.1,
            zIndex: -1,
          }}
        />

        <Box mb={4}>
          <img src={logo} alt="logo" style={{ width: "100px", margin: "0 auto" }} />
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "#ffffff", marginTop: 2 }}
          >
            Iniciar sesión en GearthLogic
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          {error && (
            <Typography color="error" variant="body2" mb={2}>
              {error}
            </Typography>
          )}

          <TextField
            label="Usuario"
            variant="filled"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              input: { color: "#ffffff" },
              label: { color: "#ffffff" },
              "& .MuiFilledInput-root": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "5px",
                color:"white"
              },
            }}
          />

          <TextField
            label="Contraseña"
            type="password"
            variant="filled"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              input: { color: "#ffffff" },
              label: { color: "#ffffff" },
              "& .MuiFilledInput-root": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "5px",
              },
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#ffffff",
                  "&.Mui-checked": { color: "black" },
                }}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            }
            label="Recuérdame"
            sx={{
              color: "#ffffff",
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "black",
              color: "#ffffff",
              "&:hover": { backgroundColor: "white", color:'black' },
            }}
          >
            Iniciar Sesión
          </Button>

          <Button
            type="button"
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{
              mt: 2,
              color: "#ffffff",
              borderColor: "#ffffff",
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#3c72fc",
              },
            }}
            onClick={handleGoogleLogin}
          >
            Iniciar Sesión con Google
          </Button>
        </form>
      </Paper>
    </Container>

   </div>
  );
};

export default LoginPage;