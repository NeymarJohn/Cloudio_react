import {
  Drawer,
  Box,
  Typography,
  Divider,
  Button,
  TextField,
} from "@mui/material";
import {
  RejectButton,
  ApproveButton,
  BackButtonState,
  BackButtonTitle,
} from "./index.styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ActiveProgressDrawer = ({ openDrawer, toggleDrawer }) => {
  const content = () => (
    <Box role="presentation" className="h-5/6">
      <div className="p-12 flex justify-between items-center">
        <BackButtonState
          onClick={() => {
            toggleDrawer(false);
          }}
        >
          <ArrowBackIcon style={{ fontSize: "25px" }}></ArrowBackIcon>
          <BackButtonTitle>
            <Typography variant="h1">Visita RCA Carlos Cláudio Silva</Typography>
          </BackButtonTitle>
        </BackButtonState>
        <Typography style={{color: '#838896', fontSize: '18px'}}>Progressso da Atividade</Typography>
      </div>

      <div className="bg-[#EAF3FF] px-14">
        <Typography
          variant="h3"
          style={{
            fontSize: "14px",
            color: "rgba(58, 64, 80, 1)",
            fontWeight: "500",
          }}
        >
          Segunda-feira, 06 de junho
        </Typography>
      </div>
      <div className="px-14 flex flex-col">
        <Typography className="mt-5 mb-10"
          style={{ fontSize: "14px", color: "#616161", lineHeight: "22.4px" }}
        >
          We work with clients big and small across a range of sectors and we
          utilise all forms of media to get your name out there in a way that’s
          right for you.We work with clients big and small across a range of
          sectors and
        </Typography>
      </div>
      <Divider />

      <div className="px-14 flex flex-col">
        <Typography className="mt-5 mb-10"
          style={{ fontSize: "14px", color: "#616161", lineHeight: "22.4px" }}
        >
          We work with clients big and small across a range of sectors and we
          utilise all forms of media to get your name out there in a way that’s
          right for you.We work with clients big and small across a range of
          sectors and
        </Typography>
      </div>
      <Divider />
    </Box>
  );
  return (
    <Drawer
      sx={{
        ".MuiDrawer-paper": {
          width: "40vw",
        },
      }}
      anchor="right"
      open={openDrawer}
      onClose={() => {
        toggleDrawer(false);
      }}
    >
      {content()}
    </Drawer>
  );
};

export default ActiveProgressDrawer;
