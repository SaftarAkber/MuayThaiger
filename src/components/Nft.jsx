
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css/effect-creative';

const Nft = () => {
  return (
    <div className='grid-cols-2 md:grid h-screen w-full  bg-[#000000] w-full bg-cover h-screen'>
      <div className='grid-cols-1 items-center flex justify-center md:w-[100%] '>
        <Swiper
          className=' w-[70%]'
          grabCursor={true}
          effect={'creative'}
          loop={true}
          autoplay={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-120%', 0, -500],
            },
            next: {
              shadow: true,
              translate: ['120%', 0, -500],
            },
          }}
          modules={[EffectCreative, Autoplay]}
        >
          <SwiperSlide className='  flex justify-center mx-auto'>
            <img src="/images/warrior1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center mx-auto'>
            <img src="/images/warrior1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className='  flex justify-center mx-auto'>
            <img src="/images/warrior1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center mx-auto'>
            <img src="/images/warrior1.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='grid-cols-1 text-white my-5'><h1 className='font-bold my-4 text-8xl text-center'>NFT</h1>
        <div className='px-6 text-orange-500 text-xl'>
          <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.   recusandae praesentium dolor sunt inventore ea. Maiores dicta non consectetur explicabo recusandae!</p>
          <div className='grid gap-4 grid-cols-2 my-3.5'>
            <div className="relative group inline-block leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
              <div className=" h-[70px] w-[100%] justify-center text-center flex items-center text-white px-4 py-2 rounded-lg  ">Legendary</div>
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute w-48 mt-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg py-2 z-10">
                <p className="px-4 py-2">This is a popover component.</p>
                <p className="px-4 py-2">You can customize it with your content.</p>
              </div>
            </div>
            <div className="relative group inline-block leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
              <div className=" h-[70px] w-[100%] justify-center text-center flex items-center text-white px-4 py-2 rounded-lg hover: ">Legendary</div>
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute w-48 mt-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg py-2 z-10">
                <p className="px-4 py-2">This is a popover component.</p>
                <p className="px-4 py-2">You can customize it with your content.</p>
              </div>
            </div>
            <div className="relative group inline-block leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
              <div className=" h-[70px] w-[100%] justify-center text-center flex items-center text-white px-4 py-2 rounded-lg hover: ">Legendary</div>
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute w-48 mt-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg py-2 z-10">
                <p className="px-4 py-2">ARIF NECESEN.</p>
                <p className="px-4 py-2">You can customize it with your content.</p>
              </div>
            </div>
            <div className="relative group inline-block leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
              <div className=" h-[70px] w-[100%] justify-center text-center flex items-center text-white px-4 py-2 rounded-lg hover: ">Legendary</div>
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute w-48 mt-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg py-2 z-10">
                <p className="px-4 py-2">This is a popover component.</p>
                <p className="px-4 py-2">You can customize it with your content.</p>
              </div>
            </div>
            <div className="relative group inline-block col-span-2 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
              <div className="justify-center h-[70px] text-center flex items-center text-white px-4 py-2 rounded-lg  tracking-widest ">Legendary</div>
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute  mt-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg py-2 z-10">
                <p className="px-4 py-2">This is a popover component. asfaaaaaaaaaaaaaaaaaaaaaaaaaaa dfassssssssssaaaaaaaaaaaaaaaaa</p>
                <p className="px-4 py-2">You can customize it with your content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nft
