import { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 *
 * @returns Page contact
 */
export default function Contact() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#contact');
  }, [router]);

  return null;
}
