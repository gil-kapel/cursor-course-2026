import { auth } from '@/lib/auth';
import LandingPage from '@/components/landing/LandingPage';

interface HomeProps {
  searchParams: Promise<{ checkout?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const [session, params] = await Promise.all([auth(), searchParams]);
  const user = session?.user ?? null;
  const initialCheckoutStep = params.checkout ?? null;

  return (
    <LandingPage
      user={user}
      initialCheckoutStep={initialCheckoutStep}
    />
  );
}
