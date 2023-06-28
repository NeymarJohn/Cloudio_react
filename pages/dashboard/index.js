import React from "react";
import NavBar from "../../components/navbar";
import { Title, HistoryNotifyText, ValidNotifyText } from "./dashboard.styled";
import { Typography } from "@mui/material";
export default function Dashboard() {
  return (
    <div className="w-screen h-screen bg-[#EAF3FF]">
      <NavBar />
      <div className="grid grid-cols-2 gap-5 px-16 mt-8">
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
        </div>
        <div className="bg-white rounded-lg p-10">
          <Title>Histórico de despesas</Title>
        </div>
      </div>
    </div>
  );
}
