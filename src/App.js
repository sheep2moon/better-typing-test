import styled, { ThemeProvider } from 'styled-components';
import { primaryTheme } from './commons/themes';
import Typer from './components/Typer';

function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <AppContainer>
        <h1>Esas</h1>
        <Typer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
