'use client';

import React, { useEffect, useState } from 'react';
import { Bubble } from '@ant-design/x';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication status here (e.g., using localStorage, cookies, or an API call)
    const token = localStorage.getItem('token'); // Example: Check for a token
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Or a loading indicator
  }

  return (
    <div className="App">
      <Bubble content="Hello world!" />
    </div>
  );
};

export default Home;