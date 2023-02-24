import styled from 'styled-components'

export const Container = styled.section`
  min-height: 100vh;
  min-width: 100vw;

  height: 100%;
  width: 100%;
  
  display: grid;
  grid-template-rows: minmax(50px, 70px) auto minmax(50px, 70px);
`
export const Main = styled.main`
  padding: ${({ theme }) => theme.padding.nano};
`