import { redirect } from 'next/navigation';

// Signed-out visitors never get here (middleware sends them to /login); everyone else goes to the dashboard.
export default function HomePage() {
  redirect('/dashboard');
}
