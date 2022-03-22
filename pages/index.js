import Head from 'next/head'
import Banner from '../components/home/banner/Banner'
import Contact from '../components/home/contact/Contact'
import Create from '../components/home/create/Create'
import Ecoute from '../components/home/ecoute/Ecoute'
import Project from '../components/home/projects/Project'
import Quality from '../components/home/quality/Quality'
import Showcase from '../components/home/showcase/Showcase'
import Start from '../components/home/start/Start'
import Talk from '../components/home/talk/Talk'
import { TalkFormProvider } from '../context/TalkFormContext'

export default function Home() {
  return (
    <div>
      <Head>
        <title>IconicDev - Camille Sylla</title>
        <meta name="description" content="Création de site internet. Location de site internet. Basé à Saint-Quentin, 02100 Aisne" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner/>
        <Quality/>
        <Ecoute/>
        <Create/>
        <Start/>
        {/* <Project/> */}
        <Showcase/>
        <TalkFormProvider>
        <Talk/>
        </TalkFormProvider>
        <Contact/>
      </main>
    </div>
  )
}
