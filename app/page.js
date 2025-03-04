"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/about');
  }, [router]);
  
  return null; // This component won't render anything as it immediately redirects
}