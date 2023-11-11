import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CustomLink = styled(Link)<{ $isActive?: boolean; logo?: boolean }>`
  &:after {
    display: block;
    content: '';
    border-bottom: 2px solid
      ${({ theme, logo }) => (logo ? theme.logo : theme.nav.primary)};
    transform: ${({ $isActive }) => ($isActive ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }

  &:visited {
    color: none;
  }

  font-size: 24px;
  text-decoration: none;
  color: ${({ theme, logo }) => (logo ? theme.logo : theme.nav.primary)};
  text-align: right;
  font-style: normal;
  font-weight: 600;
  line-height: 22.923px;
`

export default CustomLink
