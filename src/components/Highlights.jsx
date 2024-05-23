import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { rightImg, watchImg } from '../utils';
import VedioCarousel from './vedioCarousel';

export const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: -0, delay: 0.2 })

   gsap.to('.link', { opacity: 1, y: -0, delay: 0.2, duration: 0.5,
    stagger:0.2
    })

  
  }, [])

  return (
    <section id="highlights" className="bg-zinc overflow-hidden
           h-full w-screen common-padding">
        <div className="screen-max-width">

            <div className="mb-12 w-full  md:flex justify-between items-end">
            <h2 id="title" className="section-heading">
                 get the Highlights</h2>

            <div className="flex flex-wrap items-end gap-5">
                 <p className="link">
                    watch the film
                    <img src={watchImg} alt="watch" />
                 </p>

                 <p className="link">
                    watch the event
                    <img src={rightImg} alt="right" />
                 </p>
            </div>
            </div>

        <VedioCarousel />


        </div>
    </section>
  )
}

export default Highlights;