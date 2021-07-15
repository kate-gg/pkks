import 'tailwindcss/tailwind.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
 return <>
  <Head>
   <title>รวมดาราผู้น่ารักที่เป่านกหวีดมาก่อน</title>
  </Head>
  <Component {...pageProps} />
 </>
}

export default MyApp
