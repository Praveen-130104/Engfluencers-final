import {
    FaWhatsapp,
    FaInstagram,
    FaTelegram,
    FaBlog,
    FaFacebook,
} from "react-icons/fa";

import { IoMdCall } from "react-icons/io";

const Footer = () => {
    return (
        <div className="py-4 bg-blue-950 w-full " id="contact">
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-10 md:gap-2 ">
                <div className="text-white mt-4 md:mt-8 md:mx-auto mx-12  order-last md:order-first">
                    <h1 className="text-lg  font-bold underline underline-offset-4">
                        USEFUL LINKS
                    </h1>
                    <ul className="mt-4">
                        <li className="text-md mb-2">suppoert@Sigmaxx.com</li>
                        <li className="text-md mb-2">Our Blog</li>
                        <li className="text-md mb-2 flex gap-2 items-center">Contact Us <IoMdCall /> :</li>
                        <li className="text-md ms-12 md:mx-6 ">
                            0421-1234567890
                        </li>
                        <li className="text-md ms-12 md:mx-6">
                            91 9876543210
                        </li>
                    </ul>
                </div>
                <div className="text-white text-center order-first  ">
                    <h1 className="text-2xl  font-bold tracking-widest ">
                        SIGMAXX <br /> ACADEMY
                    </h1>
                    <ul className="flex justify-center space-x-4 mt-8 pb-6  gap-4">
                        <li className="text-4xl text-orange-200">
                            <FaWhatsapp />
                        </li>
                        <li className="text-4xl text-orange-200">
                            <FaInstagram />
                        </li>
                        <li className="text-4xl text-orange-200">
                            <FaTelegram />
                        </li>
                        <li className="text-4xl text-orange-200">
                            <FaBlog />
                        </li>
                        <li className="text-4xl text-orange-200">
                            <FaFacebook />
                        </li>
                    </ul>
                    <hr className="w-3/4 md:w-full mx-auto border border-orange-500" />
                </div>
                <div className="text-white flex flex-col items-center md:mt-8 mx-auto md:order-last ">
                    <h1 className="text-lg font-bold underline underline-offset-4 mb-4">
                        USEFUL LINKS
                    </h1>
                    <div className="space-y-3 mt-2">
                        <div className="w-[160px]">
                            <button className="tracking-widest  border-2 border-orange-500 w-full px-6 py-2 hover:bg-white hover:text-black ">
                                EMAIL
                            </button>
                        </div>
                        <div className="w-[160px]">
                            <button className="tracking-widest  border-2 border-orange-500 w-full px-6 py-2  hover:bg-white hover:text-black">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <p
                className="mt-12 text-center text-white w-full text- "
                style={{ fontFamily: "poppins" }}
            >
                Copyrights @ 2023, Sigmaxxacademy.com - Privacy | Terms of Service
            </p>
        </div>
    )
}

export default Footer;
