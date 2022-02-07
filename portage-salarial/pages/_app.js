import Layout from "../layouts/layout"
import '../styles/globals.css'
//page des routes ili ybda mno kol chy
function MyApp({ Component, pageProps }) {


  return (
  
  
  <Layout>
  <Component {...pageProps} />
  </Layout>
  
  )
}

export default MyApp
