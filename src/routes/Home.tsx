import { WavyLink } from 'react-wavy-transitions';
const Home = () => (
  <div className="home flex items-center justify-center h-full">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 mb-36 lg:mb-48 container mx-auto px-4 md:px-12">
      <div className="left col-span-1 lg:col-span-2 block lg:flex flex-col justify-center">
        <h2 className="text-2xl md:text-5xl font-bold mb-4">Hi, I am Nimesh Maharjan</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, sapiente voluptas? Recusandae cumque impedit facere debitis sed
          incidunt nisi ea dolorum dolor, obcaecati optio ipsum aliquid! Quo consequuntur odio velit?
        </p>
        <WavyLink to="/about">
          <a className="group relative inline-block focus:outline-none focus:ring mt-4">
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
              Download
            </span>
          </a>
        </WavyLink>
      </div>
      <aside className="right hidden lg:block h-16 lg:order-last lg:col-span-2 lg:h-full text-center py-12">
        <img alt="Pattern" src="/hero-img.png" className="object-cover h-[24rem] w-[24rem]" />
      </aside>
    </div>
  </div>
);

export default Home;
