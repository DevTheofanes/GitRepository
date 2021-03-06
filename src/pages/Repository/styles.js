import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform:rotate(360deg)
  }
`;

export const Loading = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }
`;
export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }
  li + li {
    margin-top: 10px;
  }
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
    margin-right: 15px;
  }
  div {
    flex: 1;
    strong {
      font-size: 16px;
      a {
        text-decoration: none;
        color: #333;
      }
      a:hover {
        color: #7159c1;
      }
      span{
        background:#eee;
        color:#333;
        border-radius:2px;
        font-size:12px;
        font-weight:600;
        height:20px;
        padding:2px 4px;
        margin-left:10px;
      }
    }
    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;
