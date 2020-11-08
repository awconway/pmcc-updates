import React from "react"
import styled from "styled-components"
import { ThemeContext } from './ThemeContext';

const ThemeOptionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-end;
`

const ThemeSwitchWrapper = styled.div`
  display: flex;
  align-items: center;

  em {
    margin-left: 10px;
    font-size: 1rem;
}
`

const Slider = styled.div`
background-color: #ccc;
bottom: 0;
cursor: pointer;
left: 0;
position: absolute;
right: 0;
top: 0;
transition: .4s;
border-radius: 34px;


&:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 26px;
  border-radius: 50%;

}
`

const Input = styled.input`

&:checked + ${Slider} {
  // background-color: #66bb6a;
}


&:checked + ${Slider}::before {
  transform: translateX(26px);
}
`

const ThemeSwitch = styled.label`
display: inline-block;
height: 34px;
position: relative;
width: 60px;

${Input} {
  display: none;
}
`




function ThemeToggle() {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }


  return (
    <ThemeOptionContainer>
    <ThemeSwitchWrapper>
    <ThemeSwitch>
      <Input
        type="checkbox"
        checked={colorMode === 'dark'}
        onChange={ev => {
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />{' '}
      <Slider />
    </ThemeSwitch>
    <em>Dark Mode</em>

    </ThemeSwitchWrapper>
    </ThemeOptionContainer>
  )
}

export default ThemeToggle
