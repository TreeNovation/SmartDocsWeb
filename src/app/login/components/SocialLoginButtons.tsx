import React from 'react';
import Image from 'next/image';

const SocialLoginButtons = () => {
  const handleGoogleLogin = () => {
    // Logic for Google login
    window.location.href = '/api/auth/google'; // Adjust the endpoint as necessary
  };

  const handleGitHubLogin = () => {
    // Logic for GitHub login
    window.location.href = '/api/auth/github'; // Adjust the endpoint as necessary
  };

  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-100"
      >
        <Image src="/images/google.svg" alt="Google" width={24} height={24} />
        <span className="ml-2">Login with Google</span>
      </button>
      <button
        onClick={handleGitHubLogin}
        className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-100"
      >
        <Image src="/images/github.svg" alt="GitHub" width={24} height={24} />
        <span className="ml-2">Login with GitHub</span>
      </button>
    </div>
  );
};

export default SocialLoginButtons;