import playstore from '../assets/images/icons/playstore.png';
import applestore from '../assets/images/icons/appstore.png';
import sideImg from '../assets/images/sideImg.jpeg';
export function AppDownload() {
  return (
    <section className=" lg:h-[758px] md:h-[500px] sm:h-[500px] overflow-hidden bg-mediumlight">
      <div className="w-full h-full mx-auto flex md:flex-row flex-col items-center container relative">
        <div className=" py-20  ">
          <div className="">
            <h1 className="font-bold lg:text-[4.8em] md:text-[2.9em] text-[2.9em] text-[#ffffff]">
              Baixe agora
            </h1>
            <span className="text-light md:text-[2.4em] text-[1.7rem]">
              nosso app
            </span>
          </div>
          <div className="mt-10  flex sm:flex-row flex-col justify-center items-center   gap-5 ">
            <div className="xl:w-[369px] xl:h-[340px] lg:w-[249px] lg:h-[230px] sm:mr-2 pb-4 pt-2  w-[179px] h-[150px] rounded-lg bg-heavy border flex flex-col justify-center items-center">
              <h1 className="text-[#ffffff]  font-bold text-[24px]">iOS</h1>
              <img
                src={applestore}
                className="xl:w-[260px] lg:w-[160px] md:w-[160px] w-[160px]"
              />
              <a
                href=""
                className={` xl:w-80 lg:w-52  w-36 p-2 h-[66px] xl:mt-10 lg:mt-2 rounded-full text-black lg:text-[20px] font-bold uppercase bg-light flex items-center justify-center `}
              >
                baixar app
              </a>
            </div>
            <div className="xl:w-[369px] xl:h-[340px] lg:w-[249px] lg:h-[230px]  sm:mt-0 mt-2 pb-4 pt-2   w-[179px] h-[150px] rounded-lg bg-heavy border flex flex-col justify-center items-center">
              <h1 className="text-[#ffffff] font-bold text-[24px]">Android</h1>
              <img
                src={playstore}
                className="xl:w-[260px] lg:w-[160px] md:w-[160px] w-[160px]"
              />
              <a
                href=""
                className={` xl:w-80 lg:w-52  w-36 p-2 h-[66px] xl:mt-10 lg:mt-2 rounded-full text-black lg:text-[20px] font-bold uppercase bg-light  flex items-center justify-center `}
              >
                baixar app
              </a>
            </div>
          </div>
        </div>
        <img
          src={sideImg}
          className="2xl:w-  h-full object-center md:block hidden pl-14 lg:float-right"
        />
      </div>
    </section>
  );
}
