import '../styles/globals.css';
import { Barlow_Semi_Condensed } from 'next/font/google';

const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['600', '700'],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${barlow.className} min-h-screen bg-gradient-primary`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
