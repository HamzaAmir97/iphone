import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';


import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
     <Highlights />
    </main>
  )
}

export default Sentry.withProfiler(App);
