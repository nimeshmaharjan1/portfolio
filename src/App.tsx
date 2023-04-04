import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './routes/About';
import Home from './routes/Home';
import Contact from './routes/Contact';

import { Nav } from './layout/Nav';
import { Main } from './layout/Main';

import { WavyContainer } from 'react-wavy-transitions';
import PrimaryButton from './components/buttons/PrimaryButton';

function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Nav /> */}
              <Main />
            </>
          }>
          <Route index element={<Home />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<>...</>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<>...</>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <div className="min-h-screen flex  items-center justify-center flex-col">
                <h2 className="text-6xl mb-4 font-semibold text-primary">Under Progress...😘😘 </h2>
                <PrimaryButton to="/">Go Back</PrimaryButton>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
