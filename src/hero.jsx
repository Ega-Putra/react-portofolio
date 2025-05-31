import profile from './assets/profile.jpg';

function Hero() {
    return (
        <div className="p-16 h-lvh items-center w-auto gap-10 grid grid-cols-1 md:grid-cols-2">
            <div>
                <h1 className='text-7xl font-bold'>Hello.👋</h1>
                <h1 className='text-5xl font-medium pt-2 text-blue-400 underline'>Saya Ega Putra Firmansyah</h1>
                <h1 className='text-2xl font-normal pt-2'>Seorang fullstack programmer, yang berfokus pada framework <span className='text-yellow-500'>javascript</span></h1>
            </div>
            <div>
                <img src={profile} className='rounded-4xl md:w-[750px] w-[400px] mx-auto aspect-square object-cover mask-b-from-5%'/>
            </div>
        </div>
    )
}

export default Hero