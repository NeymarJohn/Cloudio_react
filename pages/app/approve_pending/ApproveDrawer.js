import React from "react";
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
  ApproveButton,
} from "./index.styled";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ApproveContentDrawer from "./ApproveContentDrawer";
import { BASE_URL, USER_INFO } from "../../../utils/constants";
import { useAxios } from "../../../hooks/useAxios";

const ApproveDrawer = ({ openDrawer, toggleDrawer }) => {
  const { _axios } = useAxios();
  const [comment, setComment] = React.useState("");
  const [approveContentDrawer, setApproveContentDrawer] = React.useState(false);
  const showApproveContent = (val) => {
    setApproveContentDrawer(val);
  };
  const closeDrawer = () => {
    toggleDrawer(false);
  };
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleReview = () => {
    const employeeId = 109974;
    _axios
      .patch(
        `${BASE_URL}/employees/${employeeId}/weeks/2023-06-12/expenses/approve`,
        { approver_id: employeeId, comments: comment }
      )
      .then((res) => {
        if (res.data.code == 0) {
          toast.success("Successfully Approved");
        } else {
          toast.error(res.data.message);
        }
      });
  };

  const content = () => (
    <Box role="presentation" className="h-5/6">
      <TitleBar>
        <Typography variant="h1">Concluir Análise: Aprovar Despesas</Typography>
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
            Abaixo, você pode incluir comentários adicionais sobre as despesas
            aprovadas.
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
            Comentários sobre as despesas aprovadas
          </Typography>
          <TextField
            className="w-5/6 mb-10 ml-14 mt-3"
            id="standard-basic"
            variant="standard"
            onChange={handleComment}
          />
          <Divider />
          <div className="flex flex-row items-center justify-between px-14 pt-5">
            <Typography
              variant="h1"
              style={{ fontSize: "16px", color: "rgba(43, 82, 221, 1)" }}
            >
              Visualizar histórico de aprovação
            </Typography>
            <Button onClick={() => showApproveContent(true)}>
              <ArrowForwardIcon fontSize="25" />
            </Button>
          </div>
        </div>
        <div className="px-14 flex justify-start items-center w-full">
          <RejectButton className="w-3/6" onClick={closeDrawer}>
            Cancelar
          </RejectButton>
          <ApproveButton className="ml-3 w-3/6" onClick={handleReview}>
            Aprovar para Reembolso
          </ApproveButton>
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
    <>
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
        <ToastContainer />
      </Drawer>
      <ApproveContentDrawer
        openDrawer={approveContentDrawer}
        toggleDrawer={showApproveContent}
      ></ApproveContentDrawer>
    </>
  );
};

export default ApproveDrawer;
