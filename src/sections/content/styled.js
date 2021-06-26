import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  overflow-y: auto;
  padding: 0px 20px;
  overflow-x: hidden;
  margin-left: 200px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  width: calc(100% - 200px);
`;

export const SIMGDIV = styled.div`
  width: 248px;
  height: 248px;
  overflow: hidden;
  border-radius: 124px;
  margin: 0px 30px 30px 0px;
  border: 1px solid #ffa959;
  transition: all 0.5s ease;
  &:hover {
    border-radius: 0px;
    transition: all 0.5s ease;
  }
`;

export const SIMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 124px;
  transition: all 0.5s ease;
  &:hover {
    border-radius: 0px;
    transition: all 0.5s ease;
  }
`;
