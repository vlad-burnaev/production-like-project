import { type RouteProps } from 'react-router-dom'
import { AboutPage, MainPage } from 'pages'

export enum AppRoutes {
  Main = 'main',
  About = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Main]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.About]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
}
