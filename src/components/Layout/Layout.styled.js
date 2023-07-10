import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`

  input {
    width: 400px;
  }

  header {
    padding: 10px 0;
    margin-bottom: 20px;
    z-index: 1000;
    -webkit-box-shadow: 0px 5px 10px -8px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 5px 10px -8px rgba(66, 68, 90, 1);
    box-shadow: 0px 5px 10px -8px rgba(66, 68, 90, 1);
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding-left: 20px;
  font-size: 1.2em;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: black;
  transform: translate(1);

  &.active {
    color: orange;
  }
`;