import Button from '../Button'
import Homeslider from '../HomeSlider/Homeslider'
import eskroImage2 from '../../assets/EskroImage2.png'
import ellipse920 from '../../assets/Ellipse920.png'

const HomeHeroSection = () => {
    return (
        <div className='bg-neutral-100'>
            <div className='relative sf-font '>
                <div className='flex justify-between items-center w-[95%] mx-auto  overflow-hidden'>
                    <div className="h-[70vh] w-[40%] flex flex-col justify-center items-start p-8">
                        <h1 className="text-5xl font-bold mb-16 "> Buying Affordable Items Just Got Better
                        </h1>
                        <p className="text-sm text-neutral-400 mb-4">
                        Let Eskro Africa be your bridge between affordable and safe items.
                        </p>
                        
                        <div className='w-[40%] py-2 '><Button text='Shop Now' className='w-50 bg-secondary py-4 rounded-md text-black' /></div>
                    </div>

                    <div className="h-[70vh] w-[70%] flex justify-center items-center overflow-hidden relative">
                        <img src={eskroImage2} alt="eskro" className="h-full w-full object-contain scale-150 " />
                    </div>
                </div>
                <img
                    className="w-[30%] h-auto md:w-[20%] md:h-auto absolute right-[5%] top-20 z-0"
                    src={ellipse920}
                    alt=""
                />
            </div>
        </div>
    )
}

export default HomeHeroSection
