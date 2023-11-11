import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 0 calc(8px + 12.5vw);
`
