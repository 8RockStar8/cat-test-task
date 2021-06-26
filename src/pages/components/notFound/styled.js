import styled from 'styled-components';
import image from 'components/assets/cat.png';

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1c1b1b;
`;

export const NotFoundImage = styled.img`
  width: auto;
  max-width: 383px;
  height: auto;
`;

export const NotFoundText = styled.p`
  font-size: 22px;
`;

export const NotFoundBtn = styled.button`
  color: #000;
  border: none;
  padding: 10px;
  outline: none;
  cursor: pointer;
  font-size: 22px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #ffa959;
`;

NotFoundImage.defaultProps = {
  src: image,
};
