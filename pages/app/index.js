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
import { useAxios } from '../../hooks/useAxios'
export default function Dashboard() {
  const [approveData, setApproveData] = React.useState([]);
  const { _axios, access_token } = useAxios();
  console.log(access_token);
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
                    <Typography variant="h2">01-08 de maio</Typography>
                    <Typography variant="h3">R$ 240,00</Typography>
                  </HistoryContent>
                </HistoryInfo>
                <ConfirmDate>
                  <Typography>Aprovada em 12/05/2022</Typography>
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
              <ContentItemBody href="/app/approve_pending">
                <HistoryInfo>
                  <HistoryImage
                    src="/img/icons/file_red.svg"
                    alt="file"
                    width={30}
                    height={30}
                  />
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
              </ContentItemBody>
            </ContentRoot>
          </div>
        </div>
      </div>
    </div>
  );
}
