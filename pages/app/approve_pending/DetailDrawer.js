import React from "react";
import { Drawer, Box, Typography, Divider, Button } from "@mui/material";
import {
  HistoryNotifyText,
  SubHeaderBar,
  BackButtonState,
  BackButtonTitle,
  TitleBar,
} from "./index.styled";
import { BASE_URL, USER_INFO } from "../../../utils/constants";
import { useAxios } from "../../../hooks/useAxios";

const DetailDrawer = ({ openDrawer, toggleDrawer, accommodation }) => {
  const { _axios, access_token } = useAxios();
  const [accommodationData, setAccommodationData] = React.useState({});
  React.useEffect(() => {
    if (accommodation && accommodation.sequential_number) {
      const employee_id = 109974;
      _axios
        .get(
          `${BASE_URL}/employees/${employee_id}/weeks/2023-06-12/expenses/accommodation/${accommodation.sequential_number}`
        )
        .then((res) => {
          console.log(res.data.accommodation_expenses);
          res.data.accommodation_expenses.length > 0
            ? setAccommodationData(res.data.accommodation_expenses[0])
            : setAccommodationData({});
        });
    }
  }, [accommodation]);
  const content = () => (
    <Box role="presentation">
      <TitleBar>
        <Typography variant="h1">Hospedagem - Nome do Hotel</Typography>
      </TitleBar>
      <HistoryNotifyText style={{ background: "#fff", color: "#000" }}>
        <Typography variant="h1" style={{ color: "#000" }}>
          Detalhes do Hotel
        </Typography>
      </HistoryNotifyText>
      <div className="grid grid-cols-2 gap-3 px-16 container">
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography
                variant="h1"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                CNPJ ou CPF
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                {accommodationData.cnpj_cpf ? accommodationData.cnpj_cpf : ""}
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
                Telefone
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                {accommodationData.phone_number ? accommodationData.phone_number : ""}
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
                Nome Fantasia
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                {accommodationData.trade_name ? accommodationData.trade_name : ""}
              </Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonState>
              <BackButtonTitle>
                <Typography
                  variant="h1"
                  style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
                >
                  Razão Social
                </Typography>
                <Typography
                  variant="h2"
                  style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
                >
                  {accommodationData.company_name ? accommodationData.company_name : ""}
                </Typography>
              </BackButtonTitle>
            </BackButtonState>
          </BackButtonState>
        </SubHeaderBar>
      </div>
      <Divider />
      <div className="grid grid-cols-2 gap-5 px-16 mt-2 container">
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography
                variant="h1"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                Cidade
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                Divinópolis
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
                Estado
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                MG
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
                Data de Entrada
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                08/06/2022
              </Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonState>
              <BackButtonTitle>
                <Typography
                  variant="h1"
                  style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
                >
                  Data de Saída
                </Typography>
                <Typography
                  variant="h2"
                  style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
                >
                  10/06/2022
                </Typography>
              </BackButtonTitle>
            </BackButtonState>
          </BackButtonState>
        </SubHeaderBar>
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonTitle>
              <Typography
                variant="h1"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                Número (nota ou recibo)
              </Typography>
              <Typography
                variant="h2"
                style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
              >
                123456
              </Typography>
            </BackButtonTitle>
          </BackButtonState>
        </SubHeaderBar>
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonState>
              <BackButtonTitle>
                <Typography
                  variant="h1"
                  style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
                >
                  Valor Total
                </Typography>
                <Typography
                  variant="h2"
                  style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
                >
                  R$ 400,00
                </Typography>
              </BackButtonTitle>
            </BackButtonState>
          </BackButtonState>
        </SubHeaderBar>
        <SubHeaderBar>
          <BackButtonState>
            <BackButtonState>
              <BackButtonTitle>
                <Typography
                  variant="h1"
                  style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
                >
                  Data de Emissão
                </Typography>
                <Typography
                  variant="h2"
                  style={{ fontSize: "14px", color: "rgba(131, 136, 150, 1)" }}
                >
                  10/06/2022
                </Typography>
              </BackButtonTitle>
            </BackButtonState>
          </BackButtonState>
        </SubHeaderBar>
      </div>
      <Divider />
      <div className="px-12 flex justify-start items-center">
        <Typography
          variant="h1"
          style={{ fontSize: "16px", fontFamily: "Rubik" }}
        >
          Comprovante
        </Typography>
        <Typography
          className="ml-3"
          variant="h1"
          style={{ color: "rgba(31, 31, 31, 0.5)", fontSize: "12px" }}
        >
          Clique para expandir a imagem
        </Typography>
      </div>
      <div className="px-12 flex justify-start items-center">
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

export default DetailDrawer;
