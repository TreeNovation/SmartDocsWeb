export const setToken = (token: string) => {
localStorage.setItem('authToken', token);
};

export const getToken = () => {
return localStorage.getItem('authToken');
};

export const removeToken = () => {
localStorage.removeItem('authToken');
};

export const isAuthenticated = () => {
const token = getToken();
return token !== null;
};

export const redirectAfterLogin = (router: any) => {
router.push('/dashboard'); // Change '/dashboard' to your desired route after login
};


export const login = async (email: string, password: string): Promise<void> => {

    // Implement your login logic here
  
    // For example:
  
    if (email && password) {
  
      // Make API call or handle authentication
  
      return Promise.resolve();
  
    }
  
    throw new Error('Invalid credentials');
  
  };
  