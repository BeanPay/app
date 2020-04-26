import Head from 'next/head'

export default function BaseLayout({className, pageTitle, children}) {
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
      <div className={className}>
        {children}
      </div>
    </>
  )
}
