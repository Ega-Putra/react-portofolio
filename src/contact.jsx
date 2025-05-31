function Contact(){
    return (
        <>
                <div className="p-16 h-fit pb-8">
            <div>
                <h1 className="text-4xl font-bold pb-4">Personal Information 🔎</h1>
                <div className="bg-zinc-800 rounded-r-2xl rounded-tl-2xl p-4 w-fit">
                    <h1>Name : Ega Putra Firmansyah</h1>
                </div>
                <div className="bg-zinc-800 rounded-r-2xl p-4 w-fit">
                    <h1>Birth : 2 / June / 2006</h1>
                </div>
                <div className="bg-zinc-800 rounded-r-2xl rounded-bl-2xl p-4 w-fit">
                    <h1>Location : Surabaya, Jawa Timur, Indonesia</h1>
                </div>
            </div>
            <div className="bg-zinc-800 rounded-2xl p-4 mt-8 flex flex-col gap-4">
                <div className="flex justify-center align-middle">
                    <h1 className="text-2xl font-semibold">Education</h1>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="bg-zinc-900 rounded-2xl p-4 flex items-center justify-center">
                        <h1>SDN Wonokromo 1</h1>
                    </div>
                    <div className="bg-zinc-900 rounded-2xl p-4 flex items-center justify-center">
                        <h1>SMPN 32 Surabaya</h1>
                    </div>
                    <div className="bg-zinc-900 rounded-2xl p-4 flex items-center justify-center">
                        <h1>SMA Kartika IV-3 Surabaya</h1>
                    </div>
                    <div className="bg-zinc-900 rounded-2xl p-4 flex items-center justify-center">
                        <h1>UPN Veteran Jawa Timur - Informatika</h1>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-4xl font-bold pb-4 pt-4">Contact me 📩</h1>
                <div className="flex flex-wrap gap-4 flex-col">
                    <button className="bg-zinc-900  border-zinc-800 border-4 p-4 rounded-2xl active:bg-zinc-800 underline w-fit cursor-pointer">Facebook</button>
                    <button className="bg-zinc-900  border-zinc-800 border-4 p-4 rounded-2xl active:bg-zinc-800 underline w-fit cursor-pointer">Github</button>
                    <button className="bg-zinc-900  border-zinc-800 border-4 p-4 rounded-2xl active:bg-zinc-800 underline w-fit cursor-pointer">Email</button>
                </div>
            </div>
        </div>
        <div className="bg-zinc-800 p-16">
            <h1 className="text-2xl">About</h1>
            <p>This website created using : Vite, React, Tailwind</p>
        </div>
        </>

    )
}

export default Contact