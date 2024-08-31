import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-500 flex flex-col items-center justify-center">
      <Head>
        <title>Fromis_9 Fanpage</title>
        <meta name="description" content="Welcome to the Fromis_9 fanpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-white text-4xl font-bold mt-8">Fromis_9 Fanpage</header>
      <main className="text-white text-center p-4">
        <h1 className="text-5xl mb-4">Welcome to Fromis_9 World!</h1>
        <p className="text-xl mb-8">Stay updated with the latest news and events</p>
        <button className="bg-white text-pink-500 px-6 py-3 rounded-full text-lg font-semibold">
          Explore Now
        </button>
      </main>
      <footer className="text-white mt-auto mb-4">
        <p>© 2024 Fromis_9 Fanpage. All rights reserved.</p>
      </footer>
    </div>
  );
}
