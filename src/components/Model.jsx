
import { useGsap } from 'gsap'
import gsap from 'gsap'
export const Model = () => {
useGsap(() => {
 gsap.to('#heading', {
         opacity: 0, y: 0,
 })


  
}, [])


  return (
    <section className='common-padding'>
    <div className='screen-max-width'>
    
        <h1 id='heading' className='section-heading'>
        Take colser look.
        </h1>
        <div className='flex flex-col  items-center mt-5'>
        <div className=' w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>




        </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        </div>



    </section>
  )
}

export default Model;
