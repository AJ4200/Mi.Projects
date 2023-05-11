import Image from 'next/image'
import Logo from '../../components/header/logo'
import MainPage from '../../components/home/mainPage'

export default function Home() {
  return (
    <main>
      <header>
        <Logo/>
      </header>
      <MainPage/>
    </main>
  )
}
