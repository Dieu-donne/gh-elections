import "./globals.css";
import Script from 'next/script'

export const metadata = {
  title: 'Ghana Election Results Tracker 2024',
  description:
    'Live election result updates, maps, graphs and polls for the 2024 Ghana Presidential and Parliamentary Elections.',
  authors: [{ name: 'Internet People' }],
  icons: {
    icon: '/icons/ghana-icon.png',
    shortcut: '/icons/ghana-icon.png',
    apple: '/icons/ghana-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/icons/ghana-icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        url: '/icons/ghana-icon.png',
        type: 'image/png',
        sizes: '16x16',
      },
      {
        rel: 'apple-touch-icon',
        url: '/icons/ghana-icon.png',
        sizes: '72x72',
      },
      {
        rel: 'apple-touch-icon',
        url: '/icons/ghana-icon.png',
        sizes: '114x114',
      },
    ],
  },
  keywords: [
    'Internet People',
    'Designing Connections',
    'Web development',
    'App development',
    'David',
    'Dieudonne',
    'Adu-Amoani',
    'Portfolio',
    'Design',
    'UI/UX',
    'Clean',
    'Creative',
    'interprenoir',
  ],
  openGraph: {
    title: 'Ghana Election Results Tracker 2024',
    description:
      'Live election result updates, maps, graphs and polls for the 2024 Ghana Presidential and Parliamentary Elections.',
    url: 'https://myinternetpeople.com/gh-elections-2024/',
    siteName: 'Internet People',
    images: [
      {
        url: 'https://myinternetpeople.com/gh-elections-2024/gh-elections-results-tracker-sm.png',
        width: 470,
        height: 246,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: '@intpeoplehq',
    title: 'Ghana Election Results Tracker 2024',
    description:
      'Live election result updates, maps, graphs and polls for the 2024 Ghana Presidential and Parliamentary Elections.',
    images: ['https://myinternetpeople.com/gh-elections-2024/elect.png'],
  },
  themeColor: '#212121',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  );
}
