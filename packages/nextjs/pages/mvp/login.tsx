import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-r from-bet-teal to-black">
      <div className="bg-hero-circle absolute top-0 left-0 w-[60%] aspect-square bg-contain bg-no-repeat" />
      <div className="container mx-auto h-full">
        <div className="flex flex-row mt-[15%] gap-auto">
          <img className="w-1/2 object-contain" src="/login/player.png" />
          <div className="ml-auto flex flex-col w-[50%] gap-y-4">
            <h1 className="text-6xl font-bold text-white">SIGN UP</h1>
            <h6 className="text-white text-xl mb-4">
              Already have an account? <a>Sign in</a>
            </h6>
            <label className="text-bet-cyan text-4xl">Email</label>
            <input className="text-4xl border-b-2 border-white bg-transparent"></input>
            <label className="text-bet-cyan text-4xl">Password</label>
            <input className="text-4xl border-b-2 border-white bg-transparent"></input>
            <button className="font-bold text-2xl bg-gradient-to-l from-bet-cyan to-bet-dark-cyan hover:opacity-75 text-white rounded-lg py-6 px-24">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
