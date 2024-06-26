import { render } from 'react-dom'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import {
  ThemeProvider,
  StoreProvider,
  ErrorBoundary,
} from 'app/providers'
import 'app/styles/index.scss'

render(
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <App/>
          </ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
)
