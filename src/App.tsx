import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(10);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = 'https://github.com/silasoli';
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(timer); // Para o timer quando o countdown chega a 0
          return 0; // Garante que o valor do countdown não seja negativo
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 className="text-4xl text-green-500 mb-4">Site em construção</h1>
        <p className="text-2xl text-white">
          Você será redirecionado para o meu GitHub em {countdown} segundos
        </p>
      </div>
    </div>
  );
};

export default App;
