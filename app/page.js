import Banner from '@/components/Banner'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import Testamonial from '@/components/Testamonial'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Features />
      <Testamonial />
      <Pricing />
      <Footer />
    </main>
  )
}
