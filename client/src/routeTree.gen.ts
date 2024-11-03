/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PublicImport } from './routes/_public'
import { Route as PrivateImport } from './routes/_private'
import { Route as AuthImport } from './routes/_auth'
import { Route as PublicRegisterImport } from './routes/_public/register'
import { Route as PublicLoginImport } from './routes/_public/login'
import { Route as PublicUsernameImport } from './routes/_public/$username'
import { Route as PrivateProfileImport } from './routes/_private/profile'
import { Route as PrivatePrivateImport } from './routes/_private/private'
import { Route as PrivateLogoutImport } from './routes/_private/logout'
import { Route as PrivateContributionsImport } from './routes/_private/contributions'
import { Route as AuthAuthLinkedinImport } from './routes/_auth/auth.linkedin'

// Create Virtual Routes

const PublicIndexLazyImport = createFileRoute('/_public/')()
const PublicMembersLazyImport = createFileRoute('/_public/members')()

// Create/Update Routes

const PublicRoute = PublicImport.update({
  id: '/_public',
  getParentRoute: () => rootRoute,
} as any)

const PrivateRoute = PrivateImport.update({
  id: '/_private',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const PublicIndexLazyRoute = PublicIndexLazyImport.update({
  path: '/',
  getParentRoute: () => PublicRoute,
} as any).lazy(() => import('./routes/_public/index.lazy').then((d) => d.Route))

const PublicMembersLazyRoute = PublicMembersLazyImport.update({
  path: '/members',
  getParentRoute: () => PublicRoute,
} as any).lazy(() =>
  import('./routes/_public/members.lazy').then((d) => d.Route),
)

const PublicRegisterRoute = PublicRegisterImport.update({
  path: '/register',
  getParentRoute: () => PublicRoute,
} as any)

const PublicLoginRoute = PublicLoginImport.update({
  path: '/login',
  getParentRoute: () => PublicRoute,
} as any)

const PublicUsernameRoute = PublicUsernameImport.update({
  path: '/$username',
  getParentRoute: () => PublicRoute,
} as any)

const PrivateProfileRoute = PrivateProfileImport.update({
  path: '/profile',
  getParentRoute: () => PrivateRoute,
} as any)

const PrivatePrivateRoute = PrivatePrivateImport.update({
  path: '/private',
  getParentRoute: () => PrivateRoute,
} as any)

const PrivateLogoutRoute = PrivateLogoutImport.update({
  path: '/logout',
  getParentRoute: () => PrivateRoute,
} as any)

const PrivateContributionsRoute = PrivateContributionsImport.update({
  path: '/contributions',
  getParentRoute: () => PrivateRoute,
} as any)

const AuthAuthLinkedinRoute = AuthAuthLinkedinImport.update({
  path: '/auth/linkedin',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_private': {
      id: '/_private'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PrivateImport
      parentRoute: typeof rootRoute
    }
    '/_public': {
      id: '/_public'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PublicImport
      parentRoute: typeof rootRoute
    }
    '/_private/contributions': {
      id: '/_private/contributions'
      path: '/contributions'
      fullPath: '/contributions'
      preLoaderRoute: typeof PrivateContributionsImport
      parentRoute: typeof PrivateImport
    }
    '/_private/logout': {
      id: '/_private/logout'
      path: '/logout'
      fullPath: '/logout'
      preLoaderRoute: typeof PrivateLogoutImport
      parentRoute: typeof PrivateImport
    }
    '/_private/private': {
      id: '/_private/private'
      path: '/private'
      fullPath: '/private'
      preLoaderRoute: typeof PrivatePrivateImport
      parentRoute: typeof PrivateImport
    }
    '/_private/profile': {
      id: '/_private/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof PrivateProfileImport
      parentRoute: typeof PrivateImport
    }
    '/_public/$username': {
      id: '/_public/$username'
      path: '/$username'
      fullPath: '/$username'
      preLoaderRoute: typeof PublicUsernameImport
      parentRoute: typeof PublicImport
    }
    '/_public/login': {
      id: '/_public/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof PublicLoginImport
      parentRoute: typeof PublicImport
    }
    '/_public/register': {
      id: '/_public/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof PublicRegisterImport
      parentRoute: typeof PublicImport
    }
    '/_public/members': {
      id: '/_public/members'
      path: '/members'
      fullPath: '/members'
      preLoaderRoute: typeof PublicMembersLazyImport
      parentRoute: typeof PublicImport
    }
    '/_public/': {
      id: '/_public/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof PublicIndexLazyImport
      parentRoute: typeof PublicImport
    }
    '/_auth/auth/linkedin': {
      id: '/_auth/auth/linkedin'
      path: '/auth/linkedin'
      fullPath: '/auth/linkedin'
      preLoaderRoute: typeof AuthAuthLinkedinImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  AuthRoute: AuthRoute.addChildren({ AuthAuthLinkedinRoute }),
  PrivateRoute: PrivateRoute.addChildren({
    PrivateContributionsRoute,
    PrivateLogoutRoute,
    PrivatePrivateRoute,
    PrivateProfileRoute,
  }),
  PublicRoute: PublicRoute.addChildren({
    PublicUsernameRoute,
    PublicLoginRoute,
    PublicRegisterRoute,
    PublicMembersLazyRoute,
    PublicIndexLazyRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/_auth",
        "/_private",
        "/_public"
      ]
    },
    "/_auth": {
      "filePath": "_auth.jsx",
      "children": [
        "/_auth/auth/linkedin"
      ]
    },
    "/_private": {
      "filePath": "_private.jsx",
      "children": [
        "/_private/contributions",
        "/_private/logout",
        "/_private/private",
        "/_private/profile"
      ]
    },
    "/_public": {
      "filePath": "_public.jsx",
      "children": [
        "/_public/$username",
        "/_public/login",
        "/_public/register",
        "/_public/members",
        "/_public/"
      ]
    },
    "/_private/contributions": {
      "filePath": "_private/contributions.jsx",
      "parent": "/_private"
    },
    "/_private/logout": {
      "filePath": "_private/logout.jsx",
      "parent": "/_private"
    },
    "/_private/private": {
      "filePath": "_private/private.jsx",
      "parent": "/_private"
    },
    "/_private/profile": {
      "filePath": "_private/profile.jsx",
      "parent": "/_private"
    },
    "/_public/$username": {
      "filePath": "_public/$username.jsx",
      "parent": "/_public"
    },
    "/_public/login": {
      "filePath": "_public/login.jsx",
      "parent": "/_public"
    },
    "/_public/register": {
      "filePath": "_public/register.jsx",
      "parent": "/_public"
    },
    "/_public/members": {
      "filePath": "_public/members.lazy.jsx",
      "parent": "/_public"
    },
    "/_public/": {
      "filePath": "_public/index.lazy.jsx",
      "parent": "/_public"
    },
    "/_auth/auth/linkedin": {
      "filePath": "_auth/auth.linkedin.jsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
