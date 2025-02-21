'use client';

import React from 'react';
import LoginForm from './components/LoginForm';
import SocialLoginButtons from './components/SocialLoginButtons';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <LoginForm />
      <SocialLoginButtons />
    </div>
  );
};

export default LoginPage;