import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-r from-bet-teal to-black">
      <div className="bg-hero-circle absolute top-0 left-0 w-[60%] aspect-square bg-contain bg-no-repeat" />
      <div className="container mx-auto h-full">
        <div className="flex flex-row mt-[15%] gap-auto">
          <div className="mr-auto">
            <h1 className="text-6xl font-bold mb-12 text-white">
              Bet 365
              <br />
              Sport Betting Platform
            </h1>
            <h3 className="text-2xl mb-8 text-white">Some Description Here Some Description Here</h3>
            <button className="font-bold text-2xl bg-gradient-to-l from-bet-cyan to-bet-dark-cyan hover:opacity-45 text-white rounded-lg py-6 px-24">
              Get Started
            </button>
          </div>
          <img className="w-1/2 object-contain" src="/login/cup.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
