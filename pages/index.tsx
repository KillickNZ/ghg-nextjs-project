import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Typeform from '../components/typeform'

const Home: NextPage = () => {
  return (
    <div className='h-100vh flex flex-col justify-between'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <header className='w-full h-10vh p-6 border-b-2 border-red'>
      <Image src="/EVA-transparent.png" width={200} height={80} />
    </header>

      <main className='flex flex-col justify-evenly items-center p-auto'>
        <div className='w-100vw h-80vh'>
          <Typeform />
        </div>
      </main>

      <footer className='flex flex-col justify-center items-center h-10vh'>
        <h5>notareal@email.com</h5>
      </footer>
    </div>
  )
}

export default Home
