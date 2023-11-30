import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowUpward } from 'react-icons/md';
import Loading from './Loading';


const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {

        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        console.log(`Time to fully render: ${loadTime}ms`);

        window.scrollTo(0, 0);

        setTimeout(() => {
            setDataLoaded(true);
        }, loadTime);

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            // console.log(window.scrollY);

        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, []);

    const svgTopPosition = -scrollPosition;



    return (

        <div className="w-full h-full overflow-hidde relative">

            {dataLoaded ?
                (
                    <>
                        <div className="w-full h-screen relative sm:flex flex-col justify-center items-center overflow-hidden" >

                            <div
                                className="absolute inset-0 bg-no-repeat -z-50 animate__animated animate__pulse "
                                style={{
                                    backgroundImage: "url('https://res.cloudinary.com/dfsvudyfv/image/upload/v1696753647/wp7490243_he8dqc_1_gkqwbd.jpg')",
                                    transform: "scaleX(-1) ",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>




                            <div className="z-50 flex flex-col justify-center items-center  w-full h-3/4  ">
                                <h1 className="my-element animate__animated animate__flipInX animate__slower text-[3.5rem] mx-auto md:text-[4.8rem] lg:text-[5.8rem] xl:text-[6.3rem] text-white font-bold sm:tracking-[1rem] tracking-[4.3px]" style={{
                                    fontFamily: "oswald",
                                    filter: "drop-shadow(0px 0px 6px #000000)",
                                }}>
                                    ENGFLUENCERS
                                </h1>
                                <p className="text-xl sm:text-3xl animate__animated animate__fadeInUp animate__delay-1s font-bold text-slate-200 z-30 tracking-widest  mt-4 mb-12 sm:my-12" style={{
                                    fontFamily: "Roboto",
                                    filter: "drop-shadow(-2px 2px  2px #131d45)",
                                }}>- BY SIGMAXX ACADEMY</p>

                                <Link to='/user/worksheets' className="animate__animated animate__fadeInUp cursor-pointer border-2 border-white z-30 font-semibold bg-blue-950 text-white   hover:border-sky-500 hover:bg-transparent hover:text-sky-500 transition-all ease-in-out rounded-lg sm:px-8 sm:py-3 px-4 py-2">
                                    <span className="tracking-[7px]  text-sm sm:text-xl"
                                        style={{ fontFamily: "Nunito" }}
                                    >
                                        WORKSHEETS
                                    </span>
                                </Link>
                            </div>

                            <div className="sticky bottom-0 sm:bottom-44 md:bottom-52 lg:bottom-72 xl:bottom-96 h-2  z-10  left-0 w-full"
                            >

                                <img
                                    style={{
                                        //background cover
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",

                                    }}
                                    className="w-full "
                                    src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1697127262/big_wave-removebg-preview_1_1_pm8rdm.png"
                                    alt=""
                                />

                            </div>



                            <div className="z-20 hidden md:block  absolute  left-0 bottom-0"
                                style={{
                                    bottom: -svgTopPosition * 0.5 + 'px', // Set the top position based on scroll
                                }}
                            >
                                <svg className="yellow-ring animate__animated animate__slideInLeft" width="600" height="600" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="0" cy="300" r="230" fill="none" stroke="#eec51d" strokeWidth="100" />                    </svg>
                            </div>

                            <div className="z-10 hidden md:block  absolute"
                                style={{
                                    position: 'fixed',
                                    transform: "scaleX(-1) ",
                                    top: -svgTopPosition + 'px', // Set the top position based on scroll
                                    right: svgTopPosition * 0.35 + 'px', // Set the top position based on scroll
                                }}
                            >
                                <svg className="ring-blue animate__animated animate__slideInLeft" width="600" height="600" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="0" cy="300" r="200" fill="none" stroke="#00BFFF   " strokeWidth="120" />
                                </svg>
                            </div>

                            <div className="hidden md:block overflow-visible absolute top-0 -z-50"
                                style={{
                                    position: 'fixed',
                                    transform: "scaleX(-1) ",
                                    rotate: "270deg",
                                    right: -svgTopPosition * 2 + 'px', // Set the top position based on scroll
                                }}
                            >
                                <svg className=" ring-orange animate__animated animate__slideInLeft" width="1000" height="1000" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="0" cy="650" r="300" fill="none" stroke="#e86c00   " strokeWidth="80" />
                                </svg>
                            </div>
                        </div>


                        <div className=" w-full" >
                            <div className="mx-auto flex justify-center items-center w-full bg-[#e6eff8]">
                                <div className="flex flex-col lg:flex-row justify-center items-center w-4/5 pb-16 sm:pb-28" >
                                    <div className="w-full sm:w-4/5 lg:w-1/2 mb-12 sm:mb-24 ">
                                        <img
                                            src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1696054284/tesst_zwgbqw.png"
                                            alt=""
                                            className="w-full lg:w-4/5 h-auto mx-auto "
                                        />
                                    </div>
                                    <div className="w-full lg:w-1/2 space-y-6 px-3">
                                        <h1 className="xl:my-8 underline font-bold text-xl lg:text-xl xl:text-3xl text-blue-800">
                                            ABOUT US
                                        </h1>
                                        <h3 className=" lg:text-2xl text-4xl font-bold pt-2 pb-4 xl:pb-8 xl:text-5xl">
                                            Embark on an Epic Learning Journey!
                                        </h3>
                                        <p className="text-md leading-6 xl:text-lg pb-12">
                                            At Wordcrafters, we believe that language is a tool for empowerment.<br></br> Our comprehensive English course offers four thrilling levels - Seeker, explorer, Adventurer, and Conqueror - each designed to equip you with essential language skills tailored to your academic and real-world needs.
                                        </p>

                                        <hr className=" w-1/4 xl:w-1/5 sm:mx-auto bg-orange-500   h-0.5" />
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className=" w-full h-full py-32 md:py-52 ">
                            <div className="relative mx-auto flex flex-col justify-center items-center z-40">

                                <div className="w-2/3 ">
                                    <img
                                        className="w-full mx-auto h-3/4 md:w-3/4 lg:w-2/3 xl:w-1/2 "
                                        src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1697131391/croped_steps_big_1_m8aumm.png"

                                        alt="" />
                                </div>


                                <div className="absolute yellow text-center flex flex-col justify-center items-center w-40 h-40 sm:w-48 sm:h-48  md:w-72 md:h-72 lg:w-80 lg:h-80  xl:w-96 xl:h-96 left-0 -top-8 sm:top-0 sm:left-0 md:left-2 md:-top-20 lg:left-4 lg:-top-10 xl:left-28  2xl:left-56 2xl:top-4   ">
                                    <div className="relative w-full h-full  ">
                                        <div className="absolute flex justify-center items-center inset-0 -z-20 ">
                                            <img
                                                className="h-full w-full object-cover "
                                                src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1696051900/yellow-removebg-preview_omwoyo.png"
                                                alt=""
                                            />
                                        </div>

                                        <div className="-z-10 absolute  inset-0 flex flex-col justify-center items-center  ">
                                            <h1 className="text-md md:text-2xl xl:text-4xl my-6 lg:my-8 font-bold tracking-widest" style={{ fontFamily: "Autour One" }}>ADVENTURER</h1>
                                            <ul className=" text-md text-left  space-y-2 ps-3 list-inside list-none md:text-sm lg:text-lg hidden md:block ">
                                                <li >Academic Grammar</li>
                                                <li>Creative Writing</li>
                                                <li>Public Speaking</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className=" absolute  blue text-center flex flex-col justify-center items-center w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 right-0 -top-28 sm:right-0 sm:-top-32 md:right-0 md:-top-52 lg:right-4 lg:-top-48 xl:right-32  2xl:right-56 2xl:-top-48">
                                    <div className="relative w-full h-full  ">
                                        <div className="absolute flex justify-center items-center inset-0 -z-10">
                                            <img
                                                className="h-full w-full object-cover"
                                                src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1696051805/blue-removebg-preview_dgedk4.png"
                                                alt=""
                                            />
                                        </div>

                                        <div className="mess absolute inset-0 flex flex-col justify-center items-center text-white ">
                                            <h1 className="text-md md:text-2xl xl:text-4xl my-6 lg:my-8 font-bold tracking-widest" style={{ fontFamily: "Autour One" }}>CONQUEROR</h1>
                                            <ul className="text-md text-left  space-y-2 ps-3 list-outside list-none md:text-sm lg:text-lg hidden md:block">
                                                <li>Grammar  Competitive Exams </li>
                                                <li>Creative Writing </li>
                                                <li>Negotiating Skills</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div className="absolute orange text-center flex flex-col justify-center items-center w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 -bottom-28 left-0  md:-bottom-48 md:left-2  lg:-bottom-48 lg:left-8 xl:left-32 xl:-bottom-56 2xl:left-72 2xl:-bottom-64 ">
                                    <div className="relative w-full h-full  ">
                                        <div className="absolute flex justify-center items-center inset-0 -z-10 ">
                                            <img
                                                className="h-full w-full object-cover"
                                                src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1696051805/orange-removebg-preview_qmrmza.png"
                                                alt=""
                                            />
                                        </div>

                                        <div className="mess absolute inset-0 flex flex-col justify-center items-center text-white ">
                                            <h1 className="text-md md:text-2xl xl:text-4xl my-6 lg:my-8 font-bold tracking-widest" style={{ fontFamily: "Autour One" }}>SEEKER</h1>
                                            <ul className="text-md text-left  space-y-2 ps-3 list-outside list-none md:text-sm lg:text-lg hidden md:block">
                                                <li>Basic Academic Grammar</li>
                                                <li>Reading</li>
                                                <li>Comprehending</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute skin text-center flex flex-col justify-center items-center w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 right-0 -bottom-9 sm:bottom-6 sm:right-0 md:-bottom-16 md:right-0 lg:-bottom-20 lg:right-16 xl:right-32 xl:-bottom-24 2xl:right-72 2xl:-bottom-16  ">
                                    <div className="relative w-full h-full  ">
                                        <div className="absolute flex justify-center items-center inset-0 -z-10 ">
                                            <img
                                                className="h-full w-full object-cover"
                                                src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1696051805/pale-removebg-preview_zryrd6.png"
                                                alt=""
                                            />
                                        </div>

                                        <div className=" absolute inset-0 flex flex-col justify-center items-center ">
                                            <h1 className="text-md md:text-2xl xl:text-4xl my-6 lg:my-8 font-bold tracking-widest" style={{ fontFamily: "Autour One" }}>EXPLORER</h1>
                                            <ul className="text-md text-left  space-y-2 ps-3 list-outside list-none md:text-sm lg:text-lg hidden md:block">
                                                <li >Academic Grammar</li>
                                                <li>Framing Sentences</li>
                                                <li>Building Conversations</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                        <div className="w-full h-auto bg-[#e6eff8] py-24">
                            <div className="w-full pt-24 pb-16 sm:py-52 lg:py-44 flex justify-center">
                                <div className="w-11/12 xl:w-3/4 2xl:w-2/3  relative rounded-[30px] sm:rounded-[50px] py-12 sm:py-32 lg:py-36 xl:py-44 md:flex justify-start items-center bg-blue-950"
                                    style={{
                                        boxShadow: "-5px 4px 25px 2px black"
                                    }}
                                >
                                    <p className="text-white text-center sm:text-left text-md sm:text-lg md:text-2xl lg:text-4xl mx-auto  lg:ps-36 lg:mx-0 w-9/12 lg:w-8/12 pt-24 sm:pt-16 md:pt-28 lg:pt-0 font-bold tracking-wider"
                                        style={{
                                            fontFamily: "Ysabeau Infant",
                                        }}
                                    >

                                        &ldquo;At Engfluencers, we believe that education is the key to a better future for everyone. That&apos;s why we are committed to making our courses accessible to everyone, regardless of their background. By investing in your language skills, you are investing in your future, and in a more equitable society.&rdquo;
                                    </p>

                                        <div className="absolute hover:scale-105 hover:shadow-none transition-all ease-in-out  w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 -top-20 right-24 md:right-16 md:-top-28 lg:-right-6 lg:-top-12 xl:-right-20 xl:-top-20  border border-blue-950 rounded-2xl "
                                            style={{
                                                boxShadow: "-2px 2px 10px 2px black",
                                            }}

                                        >
                                            <img src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1692457960/fin_log-removebg-preview_amehxy.png" alt="" />
                                        </div>
                                </div>
                            </div>
                        </div>


                        <div className="w-full h-auto">
                            <div className="flex flex-col text-center justify-center py-24 sm:py-36 md:py-44 items-center space-y-4 h-full ">
                                <div>
                                    <h1 className=" text-[2rem] font-extrabold md:text-[2rem] lg:text-[2.5rem] sm:mb-6 sm:pb-4 lg:mb-8 lg:pb-8" style={{ fontFamily: "Train One  " }}>WHY SIGMAXX ACADEMY ?</h1>
                                </div>

                                <div className="p-6 select-none">

                                    <div className=" w-3/4 sm:w-full md:w-5/6 lg:w-full xl:w-4/5 2xl:w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12  text-center">

                                        <div className="mx-auto  md:mx-0 md:w-full  hover:scale-105 transition-all ease-in-out hover:shadow-xl  sm:border  rounded-2xl">
                                            <div className="flex justify-center ">
                                                <div className="w-1/2 h-full">
                                                    <img
                                                        className="w-40 h-40  mx-auto"
                                                        src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1691295736/1-removebg-preview_kamcg2.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="pb-4">
                                                <h3
                                                    className="text-2xl font-bold  lg:text-2xl mt-2 text-orange-600"
                                                    style={{ fontFamily: "Julius sans One" }}
                                                >
                                                    Personalized Support

                                                </h3>
                                                <p
                                                    className="mt-4 py-2    px-8 font-bold text-md sm:text-lg md:text-[1rem] lg:text-lg"
                                                    style={{ fontFamily: "Ysabeau Infant" }}
                                                >
                                                    Sigmaxx offers exceptional personalized support.
                                                    Expert instructors provide tailored feedback, one-on-one guidance, and progress tracking for learner success.{" "}

                                                </p>
                                            </div>
                                        </div>

                                        <div className="mx-auto md:mx-0 md:w-full  hover:scale-105 transition-all ease-in-out hover:shadow-xl  sm:border rounded-2xl">
                                            <div className="flex justify-center">
                                                <div className="w-1/2 h-full">
                                                    <img
                                                        className="w-40 h-40   mx-auto"
                                                        src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1691295736/3-removebg-preview_rzqegl.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="pb-4">
                                                <h3
                                                    className="text-2xl font-bold lg:text-2xl mt-2 text-orange-600"
                                                    style={{ fontFamily: "Julius sans One" }}
                                                >
                                                    Meticulously Crafted Syllabus
                                                </h3>
                                                <p
                                                    className="mt-4 py-2 px-8 font-bold text-md sm:text-lg md:text-[1rem] lg:text-lg"
                                                    style={{ fontFamily: "Ysabeau Infant" }}
                                                >
                                                    Sigmaxx&apos;s meticulously designed syllabus ensures comprehensive English mastery,
                                                    covering fundamental grammar to advanced communication for all learners.{" "}

                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-span-1 sm:col-span-2 lg:col-span-1 lg:w-full sm:w-1/2 mx-auto   hover:scale-105 transition-all ease-in-out hover:shadow-xl  sm:border rounded-2xl">
                                            <div className="flex justify-center">
                                                <div className="w-1/2 h-full">
                                                    <img
                                                        className="w-40 h-40  mx-auto"
                                                        src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1691295736/2-removebg-preview_i9sqzp.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="pb-4">
                                                <h3
                                                    className="text-2xl font-bold lg:text-2xl mt-2 text-orange-600"
                                                    style={{ fontFamily: "Julius sans One" }}
                                                >
                                                    Quality Content
                                                </h3>
                                                <p
                                                    className="mt-4 py-2 px-8 font-bold text-md sm:text-lg md:text-[1rem] lg:text-lg"
                                                    style={{ fontFamily: "Ysabeau Infant" }}
                                                >
                                                    Sigmaxx&apos;s diverse, engaging content guarantees an immersive,
                                                    enjoyable learning experience, aiding effective language acquisition with real-life examples.

                                                </p>
                                            </div>
                                        </div>






                                    </div>


                                </div>
                            </div>
                        </div>

                        <button className="z-50 h-10 w-10 sm:h-12 sm:w-12 opacity-60 bg-blue-400 hover:bg-white text-white hover:border-2 border-blue-600 hover:text-blue-400 fixed rounded-xl bottom-6 right-6 sm:right-8  "
                            onClick={
                                () => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth',
                                    });
                                }
                            }
                        >
                            <span className='flex justify-center items-center text-3xl'>
                                <MdArrowUpward />
                            </span>
                        </button>
                    </>
                ) :
                (
                    <Loading />

                )}




        </div>

    );
};

export default Home;
