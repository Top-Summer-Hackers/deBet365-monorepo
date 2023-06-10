// TODO: replace with live data

const LIVE_GAMES = [
  "Premier League",
  "NFL",
  "XXX League",
  "XXX League"
]

const UPCOMING_GAMES = [
  "XXX League",
  "XXX League",
  "XXX League",
  "XXX League"
]

export default function App() {
  const liveGames = LIVE_GAMES;
  const upcomingGames = UPCOMING_GAMES;

  return <div className="bg-black h-screen w-screen">
    <div className="px-8 mx-auto text-white">
      <div className="flex flex-row">
        {/* Left Games Bar */}
        <div className="flex flex-col bg-bet-black-light w-1/5 m-12 mr-0 h-fit">
          <div className="flex flex-row items-center bg-gradient-to-r from-bet-teal to-white/0 p-2">
            <img className="mr-3 w-6" src="/app/aperture.png" />
            <h1 className="text-xl m-0">Live Games</h1>
          </div>
          {liveGames.map((name) => <div className="flex flex-row items-center p-2">
            <img className="mr-3 rounded-full border-2 border-white w-6" src="/app/aperture.png" />
            <h1 className="text-md m-0">{name}</h1>
          </div>)}
          <button className="text-left p-2">More games</button>

          <div className="flex flex-row items-center bg-gradient-to-r from-bet-teal to-white/0 p-2">
            <img className="mr-3 w-6" src="/app/aperture.png" />
            <h1 className="text-xl m-0">Upcoming Games</h1>
          </div>
          {upcomingGames.map((name) => <div className="flex flex-row items-center p-2">
            <img className="mr-3 rounded-full border-2 border-white w-6" src="/app/aperture.png" />
            <h1 className="text-md m-0">{name}</h1>
          </div>)}
          <button className="text-left p-2 text-slate">More games</button>
        </div>
        <div className="flex flex-col w-4/5 p-16">
          <div className="flex flex-row">
            <div className="flex flex-col w-2/3 bg-match-circuit bg-no-repeat bg-bet-darker-cyan mr-8 p-8 rounded-lg">
              <div className="flex flex-row gap-x-4 items-center mb-4">
                <div className="bg-bet-black-light rounded-full w-8 h-8 p-2">
                  <img className="object-contain" src="/app/aperture.png" />
                </div>
                VS
                <div className="bg-bet-black-light rounded-full w-8 h-8 p-2">
                  <img className="object-contain" src="/app/aperture.png" />
                </div>
              </div>
              <h6 className="text-white text-sm mb-2">English FA Cup</h6>
              <h1 className="text-4xl font-bold text-white mb-20">LIVERPOOL VS CHELSEA</h1>
              <button className="w-fit font-bold text-sm bg-bet-cyan text-bet-black-light rounded-lg py-2 px-6">BET NOW</button>
            </div>
            <div className="flex flex-col w-1/3 grow-1 gap-y-4">
              <h1 className="text-3xl">Popular Live Matches</h1>
              <div className="bg-bet-black-light rounded-lg px-4">
                <div className="flex flex-row items-center border-b-2 border-white">
                  <div className="flex flex-col p-4 gap-y-4 mr-auto">
                    <div className="flex flex-row items-center">
                      <img className="mr-3 rounded-full border-2 border-white w-6" src="/app/aperture.png" />
                      <h1 className="text-md m-0">Liverpool</h1>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="mr-3 rounded-full border-2 border-white w-6" src="/app/aperture.png" />
                      <h1 className="text-md m-0">Liverpool</h1>
                    </div>
                  </div>
                  <div className="text-bet-black-light bg-white rounded-full text-sm px-4 py-2">
                    19 Jun, 9:00
                  </div>
                </div>
                <div className="flex flex-row items-center border-b-2 border-white">
                  <div className="flex flex-col p-4 gap-y-4 mr-auto">
                    <div className="flex flex-row items-center">
                      <img className="mr-3 rounded-full border-2 border-white w-6" src="/app/aperture.png" />
                      <h1 className="text-md m-0">Liverpool</h1>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="mr-3 rounded-full border-2 border-white w-6" src="/app/aperture.png" />
                      <h1 className="text-md m-0">Liverpool</h1>
                    </div>
                  </div>
                  <div className="text-bet-black-light bg-white rounded-full text-sm px-4 py-2">
                    19 Jun, 9:00
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="flex flex-col p-4 gap-y-4 mr-auto">
                    <div className="flex flex-row items-center">
                      <img className="mr-3 rounded-full border-2 border-white w-6" src="/app/aperture.png" />
                      <h1 className="text-md m-0">Liverpool</h1>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="mr-3 rounded-full border-2 border-white w-6" src="/app/aperture.png" />
                      <h1 className="text-md m-0">Liverpool</h1>
                    </div>
                  </div>
                  <div className="text-bet-black-light bg-white rounded-full text-sm px-4 py-2">
                    19 Jun, 9:00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="my-4 text-4xl">Live Games</h1>
          <div className="flex flex-col bg-bet-black-light min-h-[30vh]">
            <div className="flex flex-row bg-bet-black-lighter w-full p-8 py-3 mb-4">
              <h1>Match</h1>
            </div>
            <div className="flex flex-row items-center pl-4">
              22:20
              <div className="flex flex-row items-center ml-12">
                <img className="rounded-full border-2 border-white w-12 h-12" src="/app/aperture.png" />
                <img className="rounded-full border-2 border-white w-12 h-12" src="/app/aperture.png" />
              </div>
              <div className="flex flex-row gap-x-2 mx-auto">
                <button className="bg-bet-cyan/30 rounded-lg h-fit p-2 px-4">
                  1.752
                </button>
                <button className="bg-bet-yellow/30 rounded-lg h-fit p-2 px-4">
                  3.205
                </button>
                <button className="bg-bet-green/30 rounded-lg h-fit p-2 px-4">
                  6.488
                </button>
              </div>
              <button className="bg-bet-deposit rounded-lg h-fit p-2 px-4 mr-2">
                  Deposit
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}