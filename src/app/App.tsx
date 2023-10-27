import { classNames } from 'shared/lib'
import { Navbar, Sidebar } from 'widgets'
import { AppRouter } from 'app/providers'
import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

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
