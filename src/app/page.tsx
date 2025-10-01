import { redirect } from 'next/navigation';

export default function Home() {
  // إعادة التوجيه مباشرة للغة الافتراضية (ar)
  redirect('/ar');
}
