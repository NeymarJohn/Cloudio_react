import React from "react";
import { Drawer, Box, Typography, Divider, Button } from "@mui/material";
import {
  HistoryNotifyText,
  SubHeaderBar,
  BackButtonState,
  BackButtonTitle,
  TitleBar,
} from "./index.styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ActiveProgressDrawer from "./ActiveProgressDrawer";
import ActiveQuestionDrawer from "./ActiveQuestionDrawer";

const ScheduleDrawer = ({ openDrawer, toggleDrawer }) => {
  const [activeProgressDrawer, setActiveProgressDrawer] = React.useState(false);
  const [activeQuestionDrawer, setActiveQuestionDrawer] = React.useState(false);
  const toggleActiveProgressDrawer = (val) => {
    setActiveProgressDrawer(val);
  };
  const toggleActiveQuestionDrawer = (val) => {
    setActiveQuestionDrawer(val);
  };
  const content = () => (
    <Box role="presentation">
      <TitleBar>
        <div className="flex justify-between w-full pr-14">
          <Typography variant="h1">Visita RCA Carlos Cláudio Silva</Typography>
          <Typography
            variant="h1"
            style={{ color: "#00B354", fontSize: "10px" }}
          >
            Visita RCA Carlos Cláudio Silva
          </Typography>
        </div>
      </TitleBar>
      <div className="grid grid-cols-2 gap-3 px-16 container py-4">
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography
                variant="h1"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                Prioridade
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                Normal
              </Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography
                variant="h1"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                Início e fim
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                De 27/02 a 05/03
              </Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
      </div>
      <Divider />
      <div className="grid grid-cols-2 gap-3 px-16 container py-4">
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography
                variant="h1"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                Tipo
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                Visita a RCA
              </Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography
                variant="h1"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                Complemento
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                Carlos Claudio Silva
              </Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
      </div>
      <Divider />
      <div className="grid grid-cols-2 gap-3 px-16 container py-4">
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography
                variant="h1"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                Objetivo
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                Visita RCA Carlos Cláudio Silva
              </Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
      </div>
      <Divider />
      <div className="px-16 container py-4">
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography
                variant="h1"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                Descrição
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                O território do RCA tem apresentado baixos valores de venda
              </Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
      </div>
      <Divider />

      <div className="px-16 container py-4">
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                RELATÓRIO DE CONCLUSÃO DA ATIVIDADE
              </Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
      </div>
      <Divider />

      <div className="px-16 container py-8">
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                We work with clients big and small across a range of sectors and
                we utilise all forms of media to get your name out there in a
                way that’s right for you.We work with clients big and small
                across a range of sectors and
              </Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
      </div>

      <div className="flex flex-row items-center justify-between px-14 pt-5">
        <Typography
          variant="h1"
          style={{ fontSize: "16px", color: "rgba(43, 82, 221, 1)" }}
        >
          Progresso da atividade
        </Typography>
        <Button onClick={() => toggleActiveProgressDrawer(true)}>
          <ArrowForwardIcon fontSize="25" />
        </Button>
      </div>

      <div className="flex flex-row items-center justify-between px-14">
        <Typography
          variant="h1"
          style={{ fontSize: "16px", color: "rgba(43, 82, 221, 1)" }}
        >
          Questionário da atividade
        </Typography>
        <Button onClick={() => toggleActiveQuestionDrawer(true)}>
          <ArrowForwardIcon fontSize="25" />
        </Button>
      </div>

      <div className="px-14 flex justify-start items-center">
        <Button
          className="py-3"
          sx={{
            border: "1px solid rgba(43, 82, 221, 1)",
            width: "100%",
            borderRadius: "5px",
          }}
        >
          Voltar para despesas
        </Button>
      </div>
    </Box>
  );
  return (
    <>
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
      <ActiveProgressDrawer
        openDrawer={activeProgressDrawer}
        toggleDrawer={toggleActiveProgressDrawer}
      />
      <ActiveQuestionDrawer
        openDrawer={activeQuestionDrawer}
        toggleDrawer={toggleActiveQuestionDrawer}
      />
    </>
  );
};

export default ScheduleDrawer;
