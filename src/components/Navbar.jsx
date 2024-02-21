import Logo from '../assets/mortallogo.jpg'
import { Link } from 'react-scroll'
function Navbar() {
    return (
        <div>
            <div className='bg-[url("/src/mortalbackg.png")] w-full bg-cover h-screen'>
                <div className="flex text-2xl justify-around items-center gap-4 flex-row text-white text-bold m-auto w-full max-h-[150px] p-2" >
                    <div className='bg-cover bg-white'>
                        <img src={Logo} className='h-14'></img>
                    </div>
                    <div>
                        <ul className="flex-row flex gap-4">
                            <li className='hover:text-orange-500 hover:duration-300 cursor-pointer'><Link
                                activeClass="active"
                                to="game"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >Game</Link></li>
                            <li className='hover:text-orange-500 hover:duration-300 cursor-pointer'><Link
                                activeClass="active"
                                to="aboutus"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >About us</Link></li>
                            <li className='hover:text-orange-500 hover:duration-300 cursor-pointer'><Link
                                activeClass="active"
                                to="nft"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >Nft</Link></li>
                            <li className='hover:text-orange-500 hover:duration-300 cursor-pointer'><Link
                                activeClass="active"
                                to="faq"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >Faq</Link></li>
                            <li className='hover:text-orange-500 hover:duration-300 cursor-pointer'><Link
                                activeClass="active"
                                to="team"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >Team</Link></li>
                            <li className='hover:text-orange-500 hover:duration-300 cursor-pointer'><Link
                                activeClass="active"
                                to="roadmap"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >Roadmap</Link></li>
                            <li className='hover:text-orange-500 hover:duration-300 cursor-pointer'><Link
                                activeClass="active"
                                to="partners"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >Partners</Link></li>
                        </ul>
                    </div>
                    <div>
                        <button className="hidden hover:bg-black rounded-full  border-[#a34d0085] hover:border-white active:scale-95  px-4 py-2 border-2 md:flex  bg-[#a34d0085] text-white font-bold py-2 px-4">
                            <span className=" flex items-center   rounded-[14px] gap-[10px]">
                                <svg
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z">
                                    </path></svg>Wallet</span>
                        </button>
                    </div>
                </div>
                <div className='gap-16 mx-auto text-center font-bold bg-center p-24'>
                    <div className=''>
                        <h1 className='text-6xl text-white text-bold text-left'>
                            Welcome to <br /> <span className='text-7xl text-orange-500'>Mortal Tiger</span> Community
                        </h1>
                        <div className='flex justify-center mt-[150px] '>
                            <button className="hidden rounded-full border-[#a34d0085]  active:scale-95  px-7 py-4 text-2xl border-2 md:flex hover:bg-[#a34d0085]  hover:border-[#a34d0085] text-white font-bold py-2 px-4">
                                <span className=" flex items-center rounded-[14px] gap-[10px]">
                                    <svg
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="none"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z">
                                        </path></svg>Play Demo</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar