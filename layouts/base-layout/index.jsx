import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import apiClient from '../../util/api-client'
import styles from './BaseLayout.module.css'
import classNames from 'classnames';

function ensureLoggedOut(router, setAuthStatusVerified) {
  return () => {
    if(apiClient.isAuthenticated()) {
      router.push("/")
    } else {
      apiClient.refreshAuth()
        .then(response => {
          if (response.status_code == 200) {
            router.push("/")
          } else {
            setAuthStatusVerified(true)
          }
        })
    }
  }
}

function ensureLoggedIn(router, setAuthStatusVerified) {
  return () => {
    if(!apiClient.isAuthenticated()) {
      apiClient.refreshAuth()
        .then(response => {
          if (response.status_code != 200) {
            router.push("/sign-in")
          } else {
            setAuthStatusVerified(true)
          }
        })
    } else {
      setAuthStatusVerified(true)
    }
  }
}

export default function BaseLayout({className, pageTitle, authExpected=true, children}) {
  const router = useRouter()
  const [authStatusVerified, setAuthStatusVerified] = useState(false);
  if(authExpected) {
    useEffect(ensureLoggedIn(router, setAuthStatusVerified))
  } else {
    useEffect(ensureLoggedOut(router, setAuthStatusVerified))
  }
  return (
    <>
      <Head>
        <title>BeanPay - {pageTitle}</title>
        <link rel="icon" href="/logos/logo.svg" />
        <meta name="og:title" content={`BeanPay - ${pageTitle}`} />
        <meta name="description" content="A free and open source bill payment tracker for humans" />
        <meta property="og:image" content="https://app.beanpay.org/logos/share-card.png" />
        <meta name="twitter:image" content="https://app.beanpay.org/logos/share-card.png" />
        <meta name="twitter:creator" content="@BrandonRRomano" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div id="modal-portal"/>
      <div className={classNames(styles.baseLayout, className)}>
        {authStatusVerified && (<>
          {children}
        </>)}
      </div>
    </>
  )
}
