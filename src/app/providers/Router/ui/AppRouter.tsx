import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfg'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => {
  return (
      <Routes>
          {Object.values(routeConfig).map(({ path, element }) => (
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
}
