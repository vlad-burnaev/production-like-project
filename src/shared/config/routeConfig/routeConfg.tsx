import { type RouteProps } from 'react-router-dom'
import { AboutPage, MainPage, NotFoundPage, ProfilePage } from 'pages'

interface AppRouteProps extends RouteProps {
  authOnly?: boolean
}

export enum AppRoutes {
  Main = 'main',
  About = 'about',
  Profile = 'profile',
  NotFound = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.Profile]: '/profile',
  [AppRoutes.NotFound]: '*',
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.Main]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.About]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.Profile]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.NotFound]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
}
