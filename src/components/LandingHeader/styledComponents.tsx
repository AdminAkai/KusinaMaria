import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: relative;
  border-radius: 24px;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      farthest-corner,
      rgba(0, 0, 0, 50%) 0%,
      rgba(0, 0, 0, 70%) 70%,
      rgba(0, 0, 0, 100%) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 24px;
  }
`

export const HeaderBackground = styled.img`
  border-radius: 24px;
`

export const HeaderText = styled.div`
  flex-direction: column;
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  z-index: 2;
`

export const HeaderTitle = styled.h1`
  font-size: 64px;
  color: ${({ theme }) => theme.text.secondary};
  text-align: center;
  line-height: normal;
`

export const HeaderSubtitle = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.text.secondary};
  text-align: center;
`

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`
