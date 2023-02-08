'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

function Login() {
  return (
    <div className="bg-[#000] flex flex-col items-center justify-center text-center h-screen">
      <Image
        src="https://openai.com/content/images/2022/05/openai-avatar.png"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn('google')}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
