import Image from "next/image";
import styled, { css } from "styled-components";

export const Title = styled.div`
  padding: 40px;
  font-family: Rubik;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(25, 32, 45, 1);
`;

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

export const ValidNotifyText = styled.div`
  background: rgba(250, 103, 5, 1);
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

export const ContentItemBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
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
