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
import { Typography } from "@mui/material";
import Image from "next/image";
import { useAxios } from "../../../hooks/useAxios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BASE_URL, USER_INFO } from "../../../utils/constants";
import { getYearAndMonth } from "../../../utils/utils";

import Cookies from "js-cookie";
import DetailDrawer from "./DetailDrawer";
import RejectDrawer from "./RejectDrawer";
import ApproveDrawer from "./ApproveDrawer";
import ScheduleDrawer from "./ScheduleDrawer";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const query = router.query;
  const [expenseData, setExpenseData] = React.useState([]);
  const [appointmentData, setAppointmentData] = React.useState([]);
  const { _axios, access_token } = useAxios();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [rejectDrawer, setRejectDrawer] = React.useState(false);
  const [approveDrawer, setApproveDrawer] = React.useState(false);
  const [scheduleDrawer, setScheduleDrawer] = React.useState(false);
  useEffect(() => {
    const userInfo = JSON.parse(Cookies.get(USER_INFO));
    const employee_id = 109974;
    _axios
      .get(`${BASE_URL}/employees/${employee_id}/weeks/2023-06-12/expenses`)
      .then((res) => {
        console.log(res);
        setExpenseData(res.data.expenses);
      });
    _axios
      .get(`${BASE_URL}/employees/${employee_id}/weeks/2023-06-12/appointments`)
      .then((res) => {
        setAppointmentData(res.data.appointments);
      });
  }, []);

  const toggleDrawer = (val) => {
    setOpenDrawer(val);
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

  const goBack = () => {
    router.back();
  };

  const renderHistoryInfo = (item) => {
    if (item.status == "Em Andamento") {
      return (
        <HistoryContent>
          <Typography variant="h1" className="text-[#000]">
            {item.description}
          </Typography>
          {item.add_on != null ? (
            <Typography variant="h2">{item.add_on}</Typography>
          ) : (
            <></>
          )}
        </HistoryContent>
      );
    } else if (item.status == "Em Atraso") {
      return (
        <HistoryContent>
          <Typography variant="h1" className="text-[#f83939]">
            {item.description}
          </Typography>
          {item.add_on != null ? (
            <Typography variant="h2">{item.add_on}</Typography>
          ) : (
            <></>
          )}
        </HistoryContent>
      );
    } else {
      return (
        <HistoryContent>
          <Typography variant="h1" className="text-[#2b52dd]">
            {item.description}
          </Typography>
          {item.add_on != null ? (
            <Typography variant="h2">{item.add_on}</Typography>
          ) : (
            <></>
          )}
        </HistoryContent>
      );
    }
  };

  return (
    <div className="w-screen h-screen bg-[#EAF3FF]">
      <NavBar />
      <div className="flex items-center justify-center">
        <SubHeaderBar className="container px-16 mt-8">
          <BackButtonState onClick={goBack}>
            <ArrowBackIcon style={{ fontSize: "25px" }}></ArrowBackIcon>
            <BackButtonTitle>
              <Typography variant="h1">{query.employee_name}</Typography>
              <Typography variant="h2">{query.period}</Typography>
            </BackButtonTitle>
          </BackButtonState>
          <ButtonGroup>
            <RejectButton
              onClick={() => {
                toggleRejectDrawer(true);
              }}
            >
              Reprovar despesas
            </RejectButton>
            <ApproveButton
              onClick={() => {
                toggleApproveDrawer(true);
              }}
              className="ml-3"
            >
              Validar Despesas
            </ApproveButton>
          </ButtonGroup>
        </SubHeaderBar>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-5 px-16 mt-8 container">
          <div className="bg-white rounded-lg">
            <TitleBar>
              <Typography variant="h1">Despesas do período</Typography>
              <Typography variant="h2">
                {expenseData && expenseData.length > 0
                  ? expenseData[0].status
                  : ""}
              </Typography>
            </TitleBar>
            <HistoryNotifyText style={{ background: "#fff", color: "#000" }}>
              <Typography variant="h1" style={{ color: "#000" }}>
                Observação de {query.employee_name}
              </Typography>
              <Typography
                variant="h3"
                className="mt-3"
                style={{ color: "rgba(189, 189, 189, 1)" }}
              >
                {expenseData && expenseData.length > 0
                  ? expenseData[0].comments
                  : ""}
              </Typography>
            </HistoryNotifyText>
            <ContentRoot className="scroll">
              {expenseData.map((item, idx) => {
                return (
                  <ContentItemBody
                    key={idx}
                    href="#"
                    onClick={() => {
                      toggleDrawer(item.accommodation[0]);
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
                        <Typography variant="h2">{item.status}</Typography>
                      </HistoryContent>
                    </HistoryInfo>
                    <ConfirmDate>
                      <Typography>R$ {item.total_amount}</Typography>
                    </ConfirmDate>
                  </ContentItemBody>
                );
              })}
            </ContentRoot>
          </div>
          <div className="bg-white rounded-lg">
            <TitleBar>
              <Typography variant="h1">
                Agenda de {query.employee_name}
              </Typography>
            </TitleBar>
            <NoStyleContentRoot className="scroll">
              {appointmentData.map((item, idx) => {
                return (
                  <>
                    <NoStyleContentTitle>
                      <Typography variant="h1">
                        {getYearAndMonth(item.creation_date_time)}
                      </Typography>
                    </NoStyleContentTitle>
                    <NoStyleContentItemBody
                      href="#"
                      onClick={() => {
                        toggleScheduleDrawer(true);
                      }}
                    >
                      <HistoryInfo>{renderHistoryInfo(item)}</HistoryInfo>
                      <ConfirmDate>
                        <Typography>{item.start_date + ' a ' + item.end_date}</Typography>
                      </ConfirmDate>
                    </NoStyleContentItemBody>
                  </>
                );
              })}
            </NoStyleContentRoot>
          </div>
        </div>
      </div>
      <DetailDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
      <RejectDrawer
        openDrawer={rejectDrawer}
        toggleDrawer={toggleRejectDrawer}
      />
      <ApproveDrawer
        openDrawer={approveDrawer}
        toggleDrawer={toggleApproveDrawer}
      />
      <ScheduleDrawer
        openDrawer={scheduleDrawer}
        toggleDrawer={toggleScheduleDrawer}
      />
    </div>
  );
}
