import Head from 'next/head'

export default function BaseLayout({className, pageTitle, children}) {
  return (
    <>
      <Head>
        <title>BeanPay - {pageTitle}</title>
        <link rel="icon" href="/logos/logo.svg" />
      </Head>
      <div className={className}>
        {children}
      </div>
    </>
  )
}
