import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { plan } = (await request.json()) as { plan: string };
  if (!plan || !['monthly', 'one_time'].includes(plan)) {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
  }

  // TODO: Replace with real Stripe/Paddle session creation
  // Example for Stripe:
  // const checkoutSession = await stripe.checkout.sessions.create({
  //   customer_email: session.user.email,
  //   line_items: [{ price: STRIPE_PRICE_IDS[plan], quantity: 1 }],
  //   mode: plan === 'monthly' ? 'subscription' : 'payment',
  //   success_url: `${process.env.AUTH_URL}/course`,
  // });
  // return NextResponse.json({ clientSecret: checkoutSession.client_secret });

  return NextResponse.json({
    clientSecret: 'mock_client_secret',
    message: 'Stub endpoint — replace with real payment provider',
  });
}
