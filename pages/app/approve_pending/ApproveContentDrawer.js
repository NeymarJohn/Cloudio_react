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

const ApproveContentDrawer = ({ openDrawer, toggleDrawer }) => {
  const content = () => (
    <Box role="presentation" className="h-5/6">
      <div className="p-12">
        <BackButtonState
          onClick={() => {
            toggleDrawer(false);
          }}
        >
          <ArrowBackIcon style={{ fontSize: "25px" }}></ArrowBackIcon>
          <BackButtonTitle>
            <Typography variant="h1">Histórico de aprovação</Typography>
          </BackButtonTitle>
        </BackButtonState>
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
          PERÍODO DE 6 A 12 DE JUNHO
        </Typography>
      </div>
      <div className="px-14 flex flex-col">
        <div className="flex justify-between items-start pt-5">
          <div className="flex flex-col">
            <Typography
              variant="h3"
              style={{
                color: "#595F70",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "24px",
              }}
            >
              Despesa Rejeitada
            </Typography>
            <Typography
              variant="h6"
              style={{ fontSize: "12px", color: "##595F70" }}
            >
              Usuário: 359754
            </Typography>
          </div>
          <div>
            <Typography
              variant="h3"
              style={{
                fontSize: "12px",
                color: "##595F70",
                lineHeight: "24px",
              }}
            >
              12/06/2023
            </Typography>
          </div>
        </div>
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
        <div className="flex justify-between items-start pt-5">
          <div className="flex flex-col">
            <Typography
              variant="h3"
              style={{
                color: "#595F70",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "24px",
              }}
            >
              Despesa Rejeitada
            </Typography>
            <Typography
              variant="h6"
              style={{ fontSize: "12px", color: "##595F70" }}
            >
              Usuário: 359754
            </Typography>
          </div>
          <div>
            <Typography
              variant="h3"
              style={{
                fontSize: "12px",
                color: "##595F70",
                lineHeight: "24px",
              }}
            >
              12/06/2023
            </Typography>
          </div>
        </div>
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
          width: "50vw",
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

export default ApproveContentDrawer;
