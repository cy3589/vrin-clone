import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useNavigateToRegister = () => {
  const navigate = useNavigate();
  const onNavigate = useCallback(() => void navigate('https://vrin.co.kr/register'), [navigate]);
  return { onNavigate };
};

export { useNavigateToRegister };
