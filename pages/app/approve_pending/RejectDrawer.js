import {
  Drawer,
  Box,
  Typography,
  Divider,
  Button,
  TextField,
} from "@mui/material";
import {
  TitleBar,
  ButtonGroup,
  RejectButton,
  ApproveButton
} from "./index.styled";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RejectDrawer = ({ openDrawer, toggleDrawer }) => {
  const content = () => (
    <Box role="presentation" className="h-5/6">
      <TitleBar>
        <Typography variant="h1">
          Concluir Análise: Reprovar Despesas
        </Typography>
      </TitleBar>
      <div className="flex flex-col h-full justify-between">
        <div className="w-full">
          <Typography
            className="px-14"
            variant="h1"
            style={{
              color: "rgba(131, 136, 150, 1)",
              fontSize: "14px",
              fontFamily: "Rubik",
            }}
          >
            Informe, abaixo, o(s) motivo(s) de reprovação das despesas
          </Typography>
          <Typography
            variant="h6"
            className="px-14"
            style={{
              color: "rgba(7, 42, 216, 1)",
              fontSize: "12px",
              fontFamily: "Rubik",
            }}
          >
            Observação *
          </Typography>
          <Typography
            variant="h6"
            className="px-14"
            style={{
              color: "rgba(58, 64, 80, 1)",
              fontSize: "16px",
              fontFamily: "Rubik",
            }}
          >
            Comentários sobre a reprovação das despesas
          </Typography>
          <TextField
            className="w-5/6 mb-10 ml-14 mt-3"
            id="standard-basic"
            variant="standard"
          />
          <Divider />
          <div className="flex flex-row items-center justify-between px-14 pt-5">
            <Typography variant="h1" style={{fontSize: '16px', color: 'rgba(43, 82, 221, 1)'}}>Visualizar histórico de aprovação</Typography>
            <Button><ArrowForwardIcon fontSize="25" /></Button>
          </div>
        </div>
        <div className="px-14 flex justify-start items-center w-full">
            <RejectButton className="w-3/6">Cancelar</RejectButton>
            <ApproveButton className="ml-3 w-3/6">Enviar para Revisão</ApproveButton>
          {/* <Button
            className="py-3"
            sx={{
              border: "1px solid rgba(43, 82, 221, 1)",
              width: "100%",
              borderRadius: "5px",
            }}
          >
            Cancelar
          </Button> */}
        </div>
      </div>
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

export default RejectDrawer;