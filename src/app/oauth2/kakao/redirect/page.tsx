'use client';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Spinner } from '@/components/common/Spinner';
import { getAccessToken } from '@/api/user/api';

const OAuth = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && pathname === '/oauth2/kakao/redirect') {
      const code = new URL(window.location.href).searchParams.get('code');
      if (typeof code === 'string') {
        getAccessToken('kakao', code);

        router.push('/');
      }
    }
  }, [pathname, router]);

  return (
    <div className="flex items-center justify-center h-3/5">
      <Spinner />
    </div>
  );
};

export default OAuth;
