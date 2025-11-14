import { useMemo } from 'react'
import TopBanner from './components/TopBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BestReformer from './components/BestReformer'
import StudioQuality from './components/StudioQuality'
import JourneySection from './components/JourneySection'
import ProductsSection from './components/ProductsSection'
import PerfectionSection from './components/PerfectionSection'
import AsSeenIn from './components/AsSeenIn'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { products } from './data/products'

function App() {
  // Memoize products to prevent recreation on every render
  const memoizedProducts = useMemo(() => products, [])

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans">
      <TopBanner />
      <Navbar />
      <Hero />
      <BestReformer />
      <StudioQuality />
      <JourneySection />
      <ProductsSection products={memoizedProducts} />
      <PerfectionSection />
      <AsSeenIn />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
