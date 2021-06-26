import styled from 'styled-components';

export const SidebarSection = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const SidebarNav = styled.ul`
  padding: 0px;
  list-style: none;
`;

export const SidebarNavItem = styled.li`
  margin-bottom: 8px;
  padding: 8px 20px;
  a {
    color: #fff;
    display: block;
    font-size: 18px;
    text-decoration: none;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.07);
  }
  &:hover a {
    color: #ffa959;
  }
`;
