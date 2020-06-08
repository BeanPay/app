import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import EnsureLoggedIn from '../../hooks/ensure-logged-in';
import EnsureLoggedOut from '../../hooks/ensure-logged-out';

export default function BaseLayout({className, pageTitle, authExpected=true, children}) {
  const router = useRouter()
  if(authExpected) {
    useEffect(EnsureLoggedIn(router))
  } else {
    useEffect(EnsureLoggedOut(router))
  }
  return (
    <>
      <Head>
        <title>BeanPay - {pageTitle}</title>
        <link rel="icon" href="/logos/logo.svg" />
        <meta name="og:title" content={`BeanPay - ${pageTitle}`} />
        <meta name="description" content="Bill Payment Tracker" />
        <meta property="og:image" content="/logos/share-card.png" />
        <meta property="twitter:image" content="/logos/share-card.png" />
        <meta property="twitter:creator" content="@BrandonRRomano" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <div id="modal-portal"/>
      <div className={className}>
        {children}
      </div>
    </>
  )
}
