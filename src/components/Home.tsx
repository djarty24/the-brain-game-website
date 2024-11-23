const Home = () => {
	return (
		<div>
			<div className="w-full h-[100vh] flex flex-col items-center justify-center gap-4">
				<h1 className="font-pressStart text-center text-white text-7xl">The Brain Game</h1>
				<p className="font-pressStart text-center text-white text-3xl">The Rolling Stones</p>
				<p className="font-sans text-3xl text-white text-center">By Revati Tambe, Yara Abu Saude, Kiara Gerdes, Sanah Bhandari</p>
			</div>
			<div className="w-full h-[100vh] flex flex-col items-center justify-center gap-4">
				<p className="font-pressStart text-center text-white text-4xl">Artwork</p>
				<p className="font-sans text-3xl text-white text-center">Proudly created by Kiara Gerdes</p>
				<div className="flex flex-row justify-evenly w-5/12 gap-8">
					<div className="w-1/3 bg-white h-72">.</div>
					<div className="w-1/3 bg-white h-72">.</div>
					<div className="w-1/3 bg-white h-72">.</div>
				</div>
				<p className="font-sans text-xl text-white text-center w-1/2">Note! These pieces are still in the process of being made, and will be periodically updated until they are finished.</p>
			</div>
			<div className="w-full my-16 flex flex-col items-center justify-center gap-4">
				<p className="font-pressStart text-center text-white text-4xl py-4">Credits</p>
				<p className="font-pressStart text-3xl text-white text-center">Gameplay</p>
				<p className="font-pressStart text-xl text-white text-center w-1/2">Physics</p>
				<p className="font-sans text-xl text-white text-center w-1/2">Yara Abu Saude</p>
				<p className="font-pressStart text-xl text-white text-center w-1/2">Animations</p>
				<p className="font-sans text-xl text-white text-center w-1/2">Sanah Bhandari</p>
				<p className="font-pressStart text-xl text-white text-center w-1/2">Level Design</p>
				<p className="font-sans text-xl text-white text-center w-1/2">Revati Tambe</p>

				<p className="font-pressStart text-3xl text-white text-center">Website</p>
				<p className="font-sans text-xl text-white text-center w-1/2">Everyone!</p>

				<p className="font-pressStart text-3xl text-white text-center">Art</p>
				<p className="font-sans text-xl text-white text-center w-1/2">Kiara Gerdes</p>

				<p className="font-pressStart text-3xl text-white text-center">Music (Coming Soon)</p>
				<p className="font-sans text-xl text-white text-center w-1/2">Revati Tambe</p>
			</div>
			<div className="w-full h-[50vh] flex flex-col items-center justify-end">
				<div className="w-11/12 border border-dashed border-white text-center">
					<p className="py-4 text-2xl text-white font-pressStart">Created for Counterspell Hacks 2024 @ Silicon Valley</p>
				</div>
			</div>
		</div>
	)
}

export default Home