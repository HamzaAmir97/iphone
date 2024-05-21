import Navbar from './components/Navbar';
import Hero from './components/Hero';



import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
     
    </main>
  )
}

export default Sentry.withProfiler(App);
