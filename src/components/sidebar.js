import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import ThemeToggle from "./theme-toggle"
import { devices, H1 as DefaultH1, StyledLink, NavSectionHeading } from "./base"

const navItems = [
  { name: "pubs", label: "publications", path: "/pubs/" },
  { name: "grants", label: "funding", path: "/grants/" },
]

const projectItems = [
  { name: "fasting", label: "fasting", path: "/fasting/" },
  { name: "ssa", label: "sedation state", path: "/ssa/" },
  { name: "apnea", label: "apnea prediction", path: "/apnea/" },
  { name: "capacity", label: "capacity building", path: "/capacity/" },
]

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--fontSecondary);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const Aside = styled.aside`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  height: max-content;
  justify-content: space-between;
  background: var(--sidebarBg);
  padding: 2rem;
  color: var(--fontSecondary);
  display: none;
  gap: 4rem;

  &.showSidebarOnMobile {
    display: grid;
    transition: all 0.2s ease;
  }

  @media ${devices.tablet} {
    grid-row: span 2;
    gap: 2rem;
    display: grid;
    grid-template-rows: 6rem 1fr 1fr max-content;
    min-height: 100%;
  }
`

const LogoLink = styled(StyledLink)`
  line-height: 1.2em;
  transition: all 0.1s ease 0s;
  color: var(--fontPrimary);
  --wght: "wght" 900;
  --casl: "CASL" 1;
  --slnt: "slnt" -15;

  &:hover {
    color: var(--fontSecondary);
    text-decoration: none;
    --casl: "CASL" 0;
    --slnt: "slnt" 0;
    --wght: "wght" 900;
  }
`

const Nav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
`

const H1 = styled(DefaultH1)`
  margin-bottom: 0;
  display: none;

  @media ${devices.tablet} {
    display: block;
  }
`

const NavLink = styled(StyledLink)`
  &:hover,
  &:focus,
  &.isActive {
    color: var(--fontPrimary);
  }
  &.isActive::after {
    content: " 📍";
  }
`

const HamburgerMenu = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2.5rem;
  padding: 1rem;
  background-color: var(--sidebarBg);

  max-height: 6rem;

  @media ${devices.tablet} {
    display: none;
  }
`

// const HelpText = styled.span`
//   font-size: 1rem;
//   margin-right: 1rem;
// `

const Button = styled.button`
  height: 100%;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  color: var(--fontSecondary);
  --casl: "CASL" 1;
  --wght: "wght" 400;
  // outline: 3px solid var(--other);

  & .helpText {
    text-decoration: underline;
  }

  &:hover {
    color: var(--fontPrimary);
    --slnt: "slnt" -15;
    --wght: "wght" 800;

    & .helpText {
      text-decoration: none;
    }
  }

  &:focus {
    outline: 3px solid var(--other);
  }
`

const Sidebar = ({ siteTitle }) => {
  const [showSidebarOnMobile, setshowSidebarOnMobile] = useState(false)
  const pathName =
    typeof window !== "undefined" ? window.location.pathname : "/"
  const isCurrentRoute = routeName => routeName === pathName && "isActive"

  const [open, setOpen] = useState(false)

  return (
    <>
      <HamburgerMenu>
        <Button onClick={() => setshowSidebarOnMobile(!showSidebarOnMobile)}>
          <Burger open={open} setOpen={setOpen} />
        </Button>
      </HamburgerMenu>
      <Aside className={showSidebarOnMobile && "showSidebarOnMobile"}>
        <H1>
          <LogoLink to="/">{siteTitle}</LogoLink>
        </H1>
        <Nav>
          <NavSectionHeading>Progress</NavSectionHeading>
          {navItems.map((navItem, index) => (
            <NavLink
              key={index}
              className={isCurrentRoute(navItem.path)}
              to={navItem.path}
            >
              {navItem.label}
            </NavLink>
          ))}
        </Nav>
        <Nav>
          <NavSectionHeading>Ongoing work</NavSectionHeading>
          {projectItems.map((projectItem, index) => (
            <NavLink
              key={index}
              className={isCurrentRoute(projectItem.path)}
              to={projectItem.path}
            >
              {projectItem.label}
            </NavLink>
          ))}
        </Nav>

        <ThemeToggle />
      </Aside>
    </>
  )
}

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Sidebar
