import '@/styles/globals.css';
import '@/styles/characters/boy1.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
