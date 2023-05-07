import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './routes/About';
import Home from './routes/Home';
import Contact from './routes/Contact';

import { Nav } from './layout/Nav';
import { Main } from './layout/Layout';

import { WavyContainer } from 'react-wavy-transitions';
import PrimaryButton from './components/buttons/PrimaryButton';
import Projects from "./routes/Projects";

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
          }
        >
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
            path="projects"
            element={
              <Suspense fallback={<>...</>}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <div className="min-h-screen flex px-12 container mx-auto items-center justify-center flex-col">
                <h2 className="text-2xl lg:text-5xl mb-4 font-bold text-primary">
                  Under Progress...😘😘{" "}
                </h2>
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
