import React, { useEffect } from "react";
import NavBar from "../../../components/navbar";
import {
  HistoryNotifyText,
  ContentRoot,
  ContentItemBody,
  HistoryInfo,
  HistoryImage,
  HistoryContent,
  ConfirmDate,
  SubHeaderBar,
  BackButtonState,
  BackButtonTitle,
  ButtonGroup,
  RejectButton,
  ApproveButton,
  TitleBar,
  NoStyleContentTitle,
  NoStyleContentRoot,
  NoStyleContentItemBody,
} from "./index.styled";
import {
  Typography,
  Drawer,
  Box,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { useAxios } from "../../../hooks/useAxios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BASE_URL, USER_INFO } from "../../../utils/constants";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import Cookies from "js-cookie";

export default function Dashboard() {
  const [approveData, setApproveData] = React.useState([]);
  const { _axios, access_token } = useAxios();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  useEffect(() => {
    const userInfo = JSON.parse(Cookies.get(USER_INFO));
    console.log(userInfo);
    _axios
      .get(
        `${BASE_URL}/employees/${userInfo.employee_id}/weeks/2023-07-03/expenses`
      )
      .then((res) => {
        console.log(res);
      });
  }, []);

  const toggleDrawer = (val) => {
    setOpenDrawer(val);
  };

  const list = () => (
    <Box role="presentation">
      <TitleBar>
        <Typography variant="h1">Hospedagem - Nome do Hotel</Typography>
      </TitleBar>
      <HistoryNotifyText style={{ background: "#fff", color: "#000" }}>
        <Typography variant="h1" style={{ color: "#000" }}>
          Detalhes do Hotel
        </Typography>
      </HistoryNotifyText>
      <div className="grid grid-cols-2 gap-5 px-16 mt-8 container">
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography variant="h1">CNPJ ou CPF</Typography>
              <Typography variant="h2">30.300.530/0000-00</Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography variant="h1">Telefone</Typography>
              <Typography variant="h2">(34) 3237-7247</Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
      </div>
      <div className="grid grid-cols-2 gap-5 px-16 mt-8 container">
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography variant="h1">Nome Fantasia</Typography>
              <Typography variant="h2">Divino Hotel</Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonState>
              <BackButtonTitle>
                <Typography variant="h1">Razão Social</Typography>
                <Typography variant="h2">José Divino Hotelaria LTDA</Typography>
              </BackButtonTitle>
            </BackButtonState>
          </BackButtonState>
        </SubHeaderBar>
      </div>
      <Divider /> 
     
    </Box>
  );

  return (
    <div className="w-screen h-screen bg-[#EAF3FF]">
      <NavBar />
      <div className="flex items-center justify-center">
        <SubHeaderBar className="container px-16 mt-8">
          <BackButtonState>
            <ArrowBackIcon style={{ fontSize: "25px" }}></ArrowBackIcon>
            <BackButtonTitle>
              <Typography variant="h1">Júlia de Almeida Freitas</Typography>
              <Typography variant="h2">Gerente de Território</Typography>
            </BackButtonTitle>
          </BackButtonState>
          <ButtonGroup>
            <RejectButton>Reprovar despesas</RejectButton>
            <ApproveButton className="ml-3">Validar Despesas</ApproveButton>
          </ButtonGroup>
        </SubHeaderBar>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-5 px-16 mt-8 container">
          <div className="bg-white rounded-lg">
            <TitleBar>
              <Typography variant="h1">Despesas do período</Typography>
              <Typography variant="h2">Envio: 13/06/2022 às 09:43</Typography>
            </TitleBar>
            <HistoryNotifyText style={{ background: "#fff", color: "#000" }}>
              <Typography variant="h1" style={{ color: "#000" }}>
                Observação de Júlia
              </Typography>
              <Typography
                variant="h3"
                className="mt-3"
                style={{ color: "rgba(189, 189, 189, 1)" }}
              >
                We work with clients big and small across a range of sectors and
                we utilise all forms of media to get your name out there in a
                way that’s right for you.We work with clients big and small
                across a range of sectors and
              </Typography>
            </HistoryNotifyText>
            <ContentRoot className="scroll">
              <ContentItemBody
                href="#"
                onClick={() => {
                  toggleDrawer(true);
                }}
              >
                <HistoryInfo>
                  <HistoryImage
                    src="/img/icons/file_blue.svg"
                    alt="file"
                    width={30}
                    height={30}
                  />
                  <HistoryContent>
                    <Typography variant="h1">
                      Camila Rodrigues dos Santos
                    </Typography>
                    <Typography variant="h2">Emitido em 07/06/2022</Typography>
                  </HistoryContent>
                </HistoryInfo>
                <ConfirmDate>
                  <Typography>R$ 240,00</Typography>
                </ConfirmDate>
              </ContentItemBody>
              <ContentItemBody href="/approve_pending">
                <HistoryInfo>
                  <HistoryImage
                    src="/img/icons/file_blue.svg"
                    alt="file"
                    width={30}
                    height={30}
                  />
                  <HistoryContent>
                    <Typography variant="h1">
                      Camila Rodrigues dos Santos
                    </Typography>
                    <Typography variant="h2">Emitido em 07/06/2022</Typography>
                  </HistoryContent>
                </HistoryInfo>
                <ConfirmDate>
                  <Typography>R$ 240,00</Typography>
                </ConfirmDate>
              </ContentItemBody>
            </ContentRoot>
          </div>
          <div className="bg-white rounded-lg">
            <TitleBar>
              <Typography variant="h1">Agenda de Júlia</Typography>
              <Typography variant="h2">06 a 12 de junho de 2022</Typography>
            </TitleBar>
            <NoStyleContentRoot className="scroll">
              <NoStyleContentTitle>
                <Typography variant="h1">Segunda-feira, 06 de junho</Typography>
              </NoStyleContentTitle>
              <NoStyleContentItemBody href="/approve_pending">
                <HistoryInfo>
                  <HistoryContent>
                    <Typography variant="h1">
                      Júlia de Almeida Freitas
                    </Typography>
                    <Typography variant="h2">06-12 de junho</Typography>
                    <Typography variant="h3">R$ 240,00</Typography>
                  </HistoryContent>
                </HistoryInfo>
                <ConfirmDate>
                  <Typography>Hoje</Typography>
                </ConfirmDate>
              </NoStyleContentItemBody>

              <NoStyleContentTitle>
                <Typography variant="h1">Segunda-feira, 06 de junho</Typography>
              </NoStyleContentTitle>
              <NoStyleContentItemBody href="/approve_pending">
                <HistoryInfo>
                  <HistoryContent>
                    <Typography variant="h1">
                      Júlia de Almeida Freitas
                    </Typography>
                    <Typography variant="h2">06-12 de junho</Typography>
                    <Typography variant="h3">R$ 240,00</Typography>
                  </HistoryContent>
                </HistoryInfo>
                <ConfirmDate>
                  <Typography>Hoje</Typography>
                </ConfirmDate>
              </NoStyleContentItemBody>
            </NoStyleContentRoot>
          </div>
        </div>
      </div>
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
        {list()}
      </Drawer>
    </div>
  );
}
