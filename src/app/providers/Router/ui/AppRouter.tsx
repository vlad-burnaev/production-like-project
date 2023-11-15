import React, { memo, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfg'
import { PageLoader } from 'widgets/PageLoader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

export const AppRouter = memo(() => {
  const authData = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => !(route.authOnly && !authData))
  }, [authData])

  return (
      <Routes>
        {routes.map(({ path, element }) => (
            <Route
                key={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                      <div className="page-wrapper">
                        {element}
                      </div>
                    </Suspense>
                )}
                path={path}
            />
        ))}
      </Routes>
  )
})
