import "./globals.css";
import Script from 'next/script'
import "@/styles/bootstrap.min.css";
import "@/styles/mine.css"
import "@/styles/style.css"
import "@/styles/swiper.min.css"
import "@/styles/lighbox.min.css"
import "@/styles/unicons.css"
import "@/styles/animsition.min.css"

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
}

const GA_ID = 'G-BMSVK0LSW7'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 1) Load gtag.js asynchronously */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        {/* 2) Initialize dataLayer and config */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>
        {children}

        <Script src="/js/jquery.min.js"></Script>
        <Script src="/js/bootstrap.min.js"></Script>
        <Script src="/js/plugins.js"></Script> 
        <Script src="/js/anime.js"></Script> 
        <Script src="/js/uncover.js"></Script>  
        <Script src="/js/sliceRevealer.js"></Script> 
        <Script src="/js/custom.js"></Script>  
        <Script src="/js/iconify.min.js"></Script>  
        <Script src="/js/mine.js"></Script>  
      </body>

    </html>
  );
}
