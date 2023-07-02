import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { USER_INFO } from "../../utils/constants";
import { useAxios } from '../../hooks/useAxios';

export default function Login() {
  const { _axios } = useAxios();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSignIn, setIsSignIn] = React.useState(false);
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSignIn(true);
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    _axios
      .post(
        `https://ssd.martins.com.br/homologacao/mobile.forcavendasapi/sales-managers/${email}/authenticate`,
        {
          password: password,
        }
      )
      .then((response) => {
        const data = response.data;
        if (data.status == 1) {
          toast.success(data.message);
          Cookies.set(USER_INFO, JSON.stringify(data));
          router.push("/app");
        } else {
          toast.error(data.message);
        }
        setIsSignIn(false);
      })
      .catch((err) => {
        setIsSignIn(false);
        console.log(err);
      });
  };

  return (
    <main>
      <Box className="flex justify-center items-center w-full h-screen m-auto container">
        <Box
          className="rounded-md"
          sx={{ padding: "10px 20px", width: "500px" }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography component="h1" variant="h5">
              Seja bem vindo!
            </Typography>
            <Typography component="h2" variant="h9" className="text-[#454444]">
              Acesse inserindo suas credenciais adaixo:
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  required
                  name="password"
                  autoComplete="password"
                />
              </FormControl>
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Grid container className="flex items-end justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  className="text-white bg-blue-600 flex justify-end hover:text-white hover:bg-blue-800"
                  disabled={isSignIn}
                >
                  Sign In
                </Button>
              </Grid>
              {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
              <Box
                container
                className="flex flex-row justify-center items-center mt-20"
              >
                <img src="/img/icons/martins_logo.svg" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </main>
  );
}
