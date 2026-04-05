export type PlanId = 'monthly' | 'one_time';

export interface CheckoutPlan {
  id: PlanId;
  name: string;
  price: string;
  priceSuffix: string;
  priceDisplay: string;
  dbPlan: string;
  highlights: string[];
}

export const CHECKOUT_PLANS: Record<PlanId, CheckoutPlan> = {
  monthly: {
    id: 'monthly',
    name: 'מנוי חודשי',
    price: '₪97',
    priceSuffix: '/ חודש',
    priceDisplay: '₪97 / חודש',
    dbPlan: 'full_course',
    highlights: [
      'גישה מלאה לקורס Cursor',
      'כל הקורסים שיעלו בעתיד',
      'ביטול בכל רגע',
    ],
  },
  one_time: {
    id: 'one_time',
    name: 'קנייה חד-פעמית',
    price: '₪379',
    priceSuffix: 'תשלום אחד',
    priceDisplay: '₪379',
    dbPlan: 'full_course',
    highlights: [
      'גישה לצמיתות לקורס Cursor',
      '28 שיעורי וידאו מעשיים',
      'עדכונים שוטפים לקורס',
    ],
  },
} as const;

export const SESSION_STORAGE_KEY = 'checkout-pending';
