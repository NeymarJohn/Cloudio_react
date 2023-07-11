import Image from "next/image";
import styled, { css } from "styled-components";
import Link from "next/link";
import { Button } from "@mui/material";

export const HistoryNotifyText = styled.div`
  background: rgba(43, 82, 221, 1);
  padding: 20px 40px;
  h1 {
    font-family: Rubik;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(255, 255, 255, 1);
  }
  h3 {
    font-family: Rubik;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(255, 255, 255, 1);
  }
`;

export const ContentRoot = styled.div`
  padding: 0px 30px 30px 30px;
  max-height: 500px;
  overflow: auto;
`;

export const NoStyleContentRoot = styled.div`
  max-height: 500px;
  overflow: auto;
`;

export const ContentItemBody = styled(Link)`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const NoStyleContentItemBody = styled(Link)`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0px 30px 30px 30px;
`;

export const HistoryInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const HistoryImage = styled(Image)`
  width: 30px;
  height: 30px;
`;

export const HistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  h1 {
    font-family: Rubik;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(43, 82, 221, 1);
  }
  h2 {
    font-family: Rubik;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(58, 64, 80, 1);
  }
  h3 {
    //styleName: Body/Regular;
    font-family: Rubik;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(58, 64, 80, 1);
  }
`;

export const ConfirmDate = styled.div`
  font-family: Rubik;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(153, 157, 169, 1);
`;

export const SubHeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackButtonState = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &:hover {
    background: #eaf3ff;
  }
`;

export const BackButtonTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
  h1 {
    //styleName: Headline / Headline 4;
    font-family: Rubik;
    font-size: 24px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(58, 64, 80, 1);
  }

  h2 {
    //styleName: Body / Body 16;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(89, 95, 112, 1);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RejectButton = styled(Button)`
  font-family: Rubik;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  color: rgba(7, 42, 216, 1);
  border: 1px solid rgba(7, 42, 216, 1);
  padding: 10px 20px;
  &:hover {
    background: rgb(250 103 5);
    color: rgba(255, 255, 255, 1);
    border: none;
  }
`;

export const ApproveButton = styled(Button)`
  font-family: Rubik;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  background: rgba(43, 82, 221, 1);
  padding: 10px 20px;
  &:hover {
    color: rgba(7, 42, 216, 1);
    border: 1px solid rgba(7, 42, 216, 1);
  }
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border-bottom: 0.4px solid rgba(179, 182, 187, 1);
  h1 {
    //styleName: Title/Medium;
    font-family: Rubik;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(25, 32, 45, 1);
  }
  h2 {
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(131, 136, 150, 1);
  }
`;

export const NoStyleContentTitle = styled.div`
  background: rgba(234, 243, 255, 1);
  padding: 20px;
  h1 {
    font-family: Rubik;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(58, 64, 80, 1);
  }
`;
