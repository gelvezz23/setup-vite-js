/* eslint-disable react/prop-types */
import { Suspense } from 'react';
import { Navigate } from 'react-router';

export const ProtectedRouter = ({ children }) => {
  const token = '';
  if (!token) return <Navigate to={'/'} />;

  return <Suspense fallback={'loading...'}>{children}</Suspense>;
};
