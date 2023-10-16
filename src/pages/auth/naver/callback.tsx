'use client'

// 사용자를 인증하고 토큰을 얻기 위해 네이버 로그인 연동을 위한 라우팅을 설정(임시)
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getNaverToken } from '@/libs/naver/naverLogin';


const NaverAuthCallback = () => {
  const router = useRouter();

  const { code, state } = router.query;

  useEffect(() => {
    if (typeof code === 'string' && typeof state === 'string') {
      // 토큰 얻기
      getNaverToken(code, state)
        .then((token) => {
          console.log('네이버 로그인 성공', token);
          // 성공시 redirect 또는 처리 로직 실행
        })
        .catch((err) => {
          console.error('네이버 로그인 에러', err);
          // 에러시 처리 로직 실행
        });
    }
  }, [code, state]);

  return <div>네이버 로그인 중...</div>;
};

export default NaverAuthCallback;