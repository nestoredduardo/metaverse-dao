import { useWeb3 } from '@3rdweb/hooks'

const App = () => {
  const { connectWallet, address, error, provider } = useWeb3()
  console.log('👋 Address:', address)

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      {!address ? (
        <>
          <h1 className="text-2xl">Welcome to MetaverseDAO</h1>
          <button
            onClick={() => connectWallet('injected')}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md mt-8 font-bold text-white"
          >
            Connect your wallet
          </button>
        </>
      ) : (
        <h1>👀 wallet connected, now what!</h1>
      )}
    </main>
  )
}

export default App
