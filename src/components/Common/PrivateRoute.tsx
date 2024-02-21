import React from 'react'
import { Navigate, Outlet, Route, RouteProps } from 'react-router-dom'

export function PrivateRoute(props: RouteProps) {
  const isAuthenticated = Boolean(localStorage.getItem('access_token'))
  if (!isAuthenticated) return <Navigate to="/login"/>
  return <Outlet />
}