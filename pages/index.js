import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo Apps</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Navbar/>
      
      <main>
        <h1>Todo App</h1>
      </main>
    </div>
  )
}
