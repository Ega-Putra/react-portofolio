function Navbar() {
    return (
        <div className="fixed bg-zinc-800 top-0 left-0 right-0 h-12 flex items-center justify-between p-4">
            <div className="text-3xl font-bold">Portofolio.</div>
            <div>
                <ul className="flex gap-8 font-medium">
                    <li className="cursor-pointer hover:text-zinc-300">Home</li>
                    <li className="cursor-pointer hover:text-zinc-300">Project</li>
                    <li className="cursor-pointer hover:text-zinc-300">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar