import { useCallback } from 'react';

const useNavigateToRegister = () => {
  // const onNavigate = useCallback(() => void navigate('https://vrin.co.kr/register'), [navigate]);
  const onNavigate = useCallback(() => void (window.location.href = 'https://vrin.co.kr/register'), []);
  return { onNavigate };
};

export { useNavigateToRegister };
