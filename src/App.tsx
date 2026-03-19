import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ConnectionSection } from './components/ConnectionSection'
import { DonateSection } from './components/DonateSection'
// import { DownloadSection } from './components/DownloadSection'
import { FeaturesSection } from './components/FeaturesSection'
import { HeroSection } from './components/HeroSection'
import { InstallSection } from './components/InstallSection'
import { TestimonialsSection } from './components/TestimonialsSection'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function App() {
  const appRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const animatedTargets = [
        '.js-header',
        '.js-hero-line',
        '.js-hero-item',
        '.js-hero-visual',
        '.js-hero-phone',
        '.js-floating-chip',
        '.js-reveal',
      ]

      const media = gsap.matchMedia()

      media.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(animatedTargets, { clearProps: 'all' })
      })

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const introTimeline = gsap.timeline({
          defaults: {
            duration: 0.88,
            ease: 'power3.out',
          },
        })

        introTimeline
          .from('.js-header', { y: -24, autoAlpha: 0 })
          .from('.js-hero-line', { yPercent: 110, autoAlpha: 0, stagger: 0.14 }, '-=0.4')
          .from('.js-hero-item', { y: 22, autoAlpha: 0, stagger: 0.1 }, '-=0.45')
          .from('.js-hero-visual', { x: 46, autoAlpha: 0, scale: 0.96 }, '-=0.62')
          .from('.js-floating-chip', { y: 18, autoAlpha: 0, stagger: 0.12 }, '-=0.46')

        gsap.to('.js-hero-phone', {
          yPercent: -2,
          repeat: -1,
          yoyo: true,
          duration: 3.8,
          ease: 'sine.inOut',
        })

        gsap.to('.js-device-card--front', {
          y: -10,
          rotation: -8,
          repeat: -1,
          yoyo: true,
          duration: 3.2,
          ease: 'sine.inOut',
        })

        gsap.to('.js-device-card--back', {
          y: 10,
          rotation: 10,
          repeat: -1,
          yoyo: true,
          duration: 3.6,
          ease: 'sine.inOut',
        })

        gsap.utils.toArray<HTMLElement>('.js-reveal-group').forEach((group) => {
          const items = Array.from(group.querySelectorAll<HTMLElement>('.js-reveal'))

          if (!items.length) {
            return
          }

          gsap.from(items, {
            y: 36,
            autoAlpha: 0,
            duration: 0.82,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 80%',
            },
          })
        })

        const hoverCards = gsap.utils.toArray<HTMLElement>('.js-hover-card')
        const hoverCleanup = hoverCards.map((card) => {
          const handleEnter = () => {
            gsap.to(card, {
              y: -10,
              duration: 0.25,
              ease: 'power2.out',
              boxShadow: '0 28px 56px rgba(15, 23, 42, 0.14)',
              overwrite: 'auto',
            })
          }

          const handleLeave = () => {
            gsap.to(card, {
              y: 0,
              duration: 0.28,
              ease: 'power2.out',
              boxShadow: '',
              overwrite: 'auto',
            })
          }

          card.addEventListener('pointerenter', handleEnter)
          card.addEventListener('pointerleave', handleLeave)

          return () => {
            card.removeEventListener('pointerenter', handleEnter)
            card.removeEventListener('pointerleave', handleLeave)
          }
        })

        return () => {
          hoverCleanup.forEach((cleanup) => cleanup())
        }
      })

      return () => media.revert()
    },
    { scope: appRef },
  )

  return (
    <div className="site-shell" ref={appRef}>
      <HeroSection />
      <main>
        <FeaturesSection />
        <ConnectionSection />
        <InstallSection />
        <DonateSection />
        <TestimonialsSection />
        {/* <DownloadSection /> */}
      </main>
    </div>
  )
}

export default App
