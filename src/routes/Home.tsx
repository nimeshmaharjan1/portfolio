import PrimaryButton from '../components/buttons/PrimaryButton';
const Home = () => (
  <div className="home-page flex items-center justify-center">
    <div className="grid lg:ml-6 xl:ml-32 grid-cols-1 lg:grid-cols-4 mb-52 lg:mb-52 xl:mb-56 container mx-auto px-8 md:px-12 xl:px-24">
      <div className="left col-span-1 py-11 lg:py-12 lg:col-span-2 block lg:flex flex-col justify-center lg:mt-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I am Nimesh Maharjan</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, sapiente voluptas? Recusandae cumque impedit facere debitis sed
          incidunt nisi ea dolorum dolor, obcaecati optio ipsum aliquid! Quo consequuntur odio velit?
        </p>
        <div className="text-left">
          <PrimaryButton to="/about">About</PrimaryButton>
        </div>
      </div>
      <aside className="right ml-12 hidden lg:block h-16 lg:order-last lg:col-span-2 lg:h-full text-center py-12">
        <img alt="Pattern" src="/hero-img.png" className="object-cover h-[24rem] w-[24rem]" />
      </aside>
    </div>
  </div>
);

export default Home;
