import Head from 'next/head'

import About from '../components/home/about/About'
import Banner2 from '../components/home/banner2/Banner2'
import Create from '../components/home/create/Create'
import Quality from '../components/home/quality/Quality'
import Showcase from '../components/home/showcase/Showcase'
import Start from '../components/home/start/Start'
import Talk from '../components/home/talk/Talk'
import { TalkFormProvider } from '../context/TalkFormContext'

export default function Home() {
  return (
    <div>
      <Head>
        <title>IconicDev - Saint-Quentin</title>
        <meta name="description" content="Création de site internet. Location de site internet. Basé à Saint-Quentin, 02100 Aisne" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner2/>
        <About/>
        <Quality/>
        <Create/>
        <Start/>
        <Showcase/>
        <TalkFormProvider>
        <Talk/>
        </TalkFormProvider>
      </main>
    </div>
  )
}
