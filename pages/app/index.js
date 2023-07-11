import React, { useEffect } from "react";
import NavBar from "../../components/navbar";
import {
  Title,
  HistoryNotifyText,
  ValidNotifyText,
  ContentRoot,
  ContentItemBody,
  HistoryInfo,
  HistoryImage,
  HistoryContent,
  ConfirmDate,
} from "./app.styled";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useAxios } from "../../hooks/useAxios";
import { BASE_URL, USER_INFO } from "../../utils/constants";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
export default function Dashboard() {
  const router = useRouter();
  const [approveData, setApproveData] = React.useState([]);
  const [pendingData, setPendingData] = React.useState([]);
  const { _axios, access_token } = useAxios();
  React.useEffect(() => {
    const cookieData = Cookies.get(USER_INFO);
    if (cookieData && cookieData != undefined) {
      const userInfo = JSON.parse(Cookies.get(USER_INFO));
      _axios
        .get(
          `${BASE_URL}/approvers/${userInfo.employee_id}/expenses/pending-approvals`
        )
        .then((res) => {
          setPendingData(res.data.expenses_pending_approvals);
        })
        .catch((err) => {});
    } else {
      router.push('/login')
    }
  }, []);
  return (
    <div className="w-screen h-screen bg-[#EAF3FF]">
      <NavBar />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-5 px-16 mt-8 container">
          <div className="bg-white rounded-lg">
            <Title>Histórico de despesas</Title>
            <HistoryNotifyText>
              <Typography variant="h1">
                As despesas referentes a estes períodos já foram aprovadas
              </Typography>
              <Typography variant="h3">
                Clique em alguma despesa abaixo para ver detalhes
              </Typography>
            </HistoryNotifyText>
            <ContentRoot className="scroll">
              <ContentItemBody href="/app/history_expense">
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
                    <Typography variant="h2">01-08 de maio</Typography>
                    <Typography variant="h3">R$ 240,00</Typography>
                  </HistoryContent>
                </HistoryInfo>
                <ConfirmDate>
                  <Typography>Aprovada em 12/05/2022</Typography>
                </ConfirmDate>
              </ContentItemBody>
              <ContentItemBody href="/app/history_expense">
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
                    <Typography variant="h2">01-08 de maio</Typography>
                    <Typography variant="h3">R$ 240,00</Typography>
                  </HistoryContent>
                </HistoryInfo>
                <ConfirmDate>
                  <Typography>Aprovada em 12/05/2022</Typography>
                </ConfirmDate>
              </ContentItemBody>
            </ContentRoot>
          </div>
          <div className="bg-white rounded-lg">
            <Title>Despesas a validar</Title>
            <ValidNotifyText>
              <Typography variant="h1">
                Você tem despesas a serem aprovadas
              </Typography>
              <Typography variant="h3">
                Clique em alguma despesa abaixo para ver detalhes e validar
              </Typography>
            </ValidNotifyText>
            <ContentRoot className="scroll">
              {pendingData.map((item) => {
                return (
                  <ContentItemBody href={{
                    pathname: '/app/approve_pending',
                    query: item
                  }}>
                    <HistoryInfo>
                      <HistoryImage
                        src="/img/icons/file_red.svg"
                        alt="file"
                        width={30}
                        height={30}
                      />
                      <HistoryContent>
                        <Typography variant="h1">
                          {item.employee_name}
                        </Typography>
                        <Typography variant="h2">{item.period}</Typography>
                        <Typography variant="h3">R$ 240,00</Typography>
                      </HistoryContent>
                    </HistoryInfo>
                    <ConfirmDate>
                      <Typography>{item.sending_date}</Typography>
                    </ConfirmDate>
                  </ContentItemBody>
                );
              })}
            </ContentRoot>
          </div>
        </div>
      </div>
    </div>
  );
}
