import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import Main from './Pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}
export default App;
