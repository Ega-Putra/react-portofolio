import wall from './assets/wallpaper.jpg'
import { tools,projects } from './data/tools.js'

function Tools() {
    return (
        <div className="p-16 h-fit">
            <h1 className='text-4xl font-bold pb-4'>Tools yang saya gunakan 🔧</h1>
            <div className='bg-zinc-800 rounded-2xl p-4 gap-4 w-full h-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                {tools.map((tool) => (
                    <div className='flex flex-row h-20 w-full overflow-hidden box-border border-zinc-900 border-4 rounded-2xl'>
                        <div className='bg-zinc-900'>
                            <img src={tool.image} className='size-full object-cover'/>
                        </div>
                        <div className='flex-1 p-2 pl-8 flex items-center font-semibold opacity-50'>{tool.name}</div>
                    </div>
                ))}
            </div>
            <h1 className='text-4xl font-bold pb-4 pt-8'>Projek saya</h1>
            <div className='bg-zinc-800 rounded-2xl p-4 gap-4 w-full h-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {projects.map((projek) => (
                    <div className='flex flex-col h-110 w-full overflow-hidden box-border border-zinc-900 border-4 rounded-2xl'>
                    <div>
                        <img src={projek.image} alt="" />
                    </div>
                    <div className='p-4 flex gap-4 flex-col items-center'>
                        <h1 className='text-2xl'>{projek.name}</h1>
                        <div className='flex flex-wrap gap-2'>
                            {projek.tags.map((tag) => (
                                <div className='bg-zinc-900 rounded-2xl w-fit p-2 pl-4 pr-4'>{tag}</div>
                            ))}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Tools