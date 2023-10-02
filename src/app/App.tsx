import { classNames } from 'shared/lib'
import { Navbar, Sidebar } from 'widgets'
import { AppRouter } from 'app/providers'
import { Suspense } from 'react'

const App = () => {
  return (
        <div className={classNames('app', {}, [])} >
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
