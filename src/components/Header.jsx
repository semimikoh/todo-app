import React from "react";
import { css, styled } from "styled-components";
import { darken, lighten } from "polished";
import { useDarkMode } from "../context/DarkModeContext";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Menu>
      <Toggle onClick={toggleDarkMode}>
        {!darkMode && <RiMoonClearFill />}
        {darkMode && <RiSunFill />}
      </Toggle>
      <Filters>
        {filters.map((e, i) => (
          <li key={i}>
            {/* 버튼 */}
            <Filter onClick={() => onFilterChange(e)} selected={filter === e}>
              {e}
            </Filter>
          </li>
        ))}
      </Filters>
    </Menu>
  );
}

const Menu = styled.header`
  display: flex;
  // margin-left: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  background-color: var(--color-bg-dark);
  border-bottom: 1px solid var(--color-grey);
`;
const Toggle = styled.button`
  font-size: 1.4rem;
  background-color: transparent;
  color: var(--color-text);
  cursor : pointer;
  transition all 150ms ease-out;
  &:hover {
    color : #d7b0ee
  }
`;

const Filters = styled.ul`
  display: flex;
`;

const Filter = styled.button`
  font-size: 1.4rem;
  margin: 0.3rem;
  // padding: 0.25rem 1rem;
  text-transform: capitalize;
  color: var(--color-accent);
  background-color: transparent;
  opacity: 0.8;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.2rem;
  border: none;
  &:hover {
    background: ${lighten(0.1, "#d7b0ee")};
  }
  &:active {
    background: ${darken(0.1, "#d7b0ee")};
  }
  &::after {
    content: "";
  }
  // 선택된 버튼만 색상 주는 법
  ${(props) =>
    props.selected &&
    css`
      background: ${darken(0.1, "#d7b0ee")};
      color: var(--color-white);
    `}
`;
