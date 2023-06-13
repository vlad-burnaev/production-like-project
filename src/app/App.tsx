import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar, Sidebar } from 'widgets'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers'
import { Suspense } from 'react'

const App = () => {
  const { theme } = useTheme()

  return (
        <div className={classNames('app', {}, [theme])} >
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
  )
}

export default App
