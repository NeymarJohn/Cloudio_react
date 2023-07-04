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
import { Link, Typography } from "@mui/material";
import Image from "next/image";
import { useAxios } from "../../../hooks/useAxios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BASE_URL, USER_INFO } from "../../../utils/constants";

import Cookies from "js-cookie";
// import DetailDrawer from "./DetailDrawer";
// import RejectDrawer from "./RejectDrawer";
// import ApproveDrawer from "./ApproveDrawer";
// import ScheduleDrawer from "./ScheduleDrawer";

export default function Dashboard() {
  const [approveData, setApproveData] = React.useState([]);
  const [schedule, setSchedule] = React.useState([]);
  const { _axios, access_token } = useAxios();
  const [expensePeriod, setExpensePeriod] = React.useState(false);
  const [rejectDrawer, setRejectDrawer] = React.useState(false);
  const [approveDrawer, setApproveDrawer] = React.useState(false);
  const [scheduleDrawer, setScheduleDrawer] = React.useState(false);


  const toggleExpensePeriod = (val) => {
    setExpensePeriod(val);
  };

  const toggleRejectDrawer = (val) => {
    setRejectDrawer(val);
  };

  const toggleApproveDrawer = (val) => {
    setApproveDrawer(val);
  };

  const toggleScheduleDrawer = (val) => {
    setScheduleDrawer(val);
  };

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
          <Typography style={{ fontSize: "16px", color: "#616161" }}>
            Aprovada em: 13/06/2022 às 09:43
          </Typography>
        </SubHeaderBar>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-5 px-16 mt-8 container">
          <div className="bg-white rounded-lg">
            <Link href="#" onClick={() => {toggleExpensePeriod(true)}} className="no-underline">
              <TitleBar>
                <Typography variant="h1">Despesas do período</Typography>
                <Typography variant="h2">Envio: 13/06/2022 às 09:43</Typography>
              </TitleBar>
            </Link>
            <NoStyleContentRoot className="scroll">
              <NoStyleContentTitle>
                <Typography variant="h1">Sua Observação</Typography>
                <Typography className="text-sm mt-3 text-[#616161]">
                  We work with clients big and small across a range of sectors
                  and we utilise all forms of media to get your name out there
                  in a way that’s right for you.We work with clients big and
                  small across a range of sectors and{" "}
                </Typography>
              </NoStyleContentTitle>
              <NoStyleContentItemBody
                href="#"
                onClick={() => {
                  toggleScheduleDrawer(true);
                }}
              >
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
              <NoStyleContentItemBody
                href="#"
                onClick={() => {
                  toggleScheduleDrawer(true);
                }}
              >
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
          <div className="bg-white rounded-lg">
            <TitleBar>
              <Typography variant="h1">Agenda de Júlia</Typography>
              <Typography variant="h2">06 a 12 de junho de 2022</Typography>
            </TitleBar>
            <NoStyleContentRoot className="scroll">
              <NoStyleContentTitle>
                <Typography variant="h1">Segunda-feira, 06 de junho</Typography>
              </NoStyleContentTitle>
              <NoStyleContentItemBody
                href="#"
                onClick={() => {
                  toggleScheduleDrawer(true);
                }}
              >
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
              <NoStyleContentItemBody
                href="#"
                onClick={() => {
                  toggleScheduleDrawer(true);
                }}
              >
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
    </div>
  );
}
