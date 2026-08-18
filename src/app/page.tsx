import { GammaBackground } from '@/components/GammaBackground'
import { GradientProvider } from '@/components/GradientProvider'
import { GradientsSection } from '@/components/GradientsSection'
import { Customizer } from '@/components/customizer/Customizer'
import { CopyToastWrapper } from '@/components/ui/CopyToastWrapper'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { BackToGalleryButton } from '@/components/ui/BackToGalleryButton'

export default function Home() {
  return (
    <GradientProvider>
      <GammaBackground />
      <div className='relative z-10 flex min-h-full flex-1 flex-col'>
        <Header />
        <main id='main' tabIndex={-1} className='flex-1 outline-none'>
          <GradientsSection />
        </main>
        <Footer />
        <BackToGalleryButton />
        <ScrollToTopButton />
        <Customizer />
        <CopyToastWrapper />
      </div>
    </GradientProvider>
  )
}
