import playstore from "../assets/images/icons/playstore.png";
import applestore from  "../assets/images/icons/appstore.png";
import sideImg from "../assets/images/sideImg.jpeg"
export function AppDownload() {
  return (
    <section className=" lg:h-[798px] md:h-[500px] sm:h-[400px] overflow-hidden bg-heavy">
      <div className="w-full h-full  flex">
        <div className=" h-full lg:pl-4 p-4 lg:p-0 w-full my-5 ">
          <div className="lg:mt-20 md:mt-10 md:pl-5 2xl:pl-72">
            <h1 className="font-bold lg:text-[96px] md:text-[40px] text-[30px] text-medium">
              Baixe agora
            </h1>
            <span className="text-light md:text-[55px]">nosso app</span>
          </div>
          <div className="mt-10 sm:flex  md:pl-5 2xl:pl-72 2xl:gap-40 pr-2">
            <div className="xl:w-[369px] xl:h-[340px] lg:w-[349px] lg:h-[330px] sm:mr-2  lg:p-0 p-5 w-[179px] h-[150px] rounded-lg bg-[#3a683c] border border-light flex flex-col justify-center items-center">
              <h1 className="text-medium font-bold text-[24px]">iOS</h1>
              <img
                src={applestore}
                className="lg:w-[250px] md:w-[160px] w-[160px]"
              />
              <a
                href=""
                className={` lg:w-80  w-36 p-2 h-[66px] lg:mt-10 rounded-full text-white lg:text-[20px] font-bold uppercase bg-[#04BA21] flex items-center justify-center `}
              >
                baixar app
              </a>
            </div>
            <div className="xl:w-[369px] xl:h-[340px] lg:w-[349px] lg:h-[330px] sm:mt-0 mt-2   lg:p-0 p-5 w-[179px] h-[150px] rounded-lg bg-[#3a683c] border border-light flex flex-col justify-center items-center">
              <h1 className="text-medium font-bold text-[24px]">Android</h1>
              <img
                src={playstore}
                className="lg:w-[260px] md:w-[170px] w-[160px]"
              />
              <a
                href=""
                className={` lg:w-80  w-36 p-2 h-[66px] lg:mt-10 rounded-full text-white lg:text-[20px] font-bold uppercase bg-[#04BA21] flex items-center justify-center `}
              >
                baixar app
              </a>
            </div>
          </div>
        </div>
        <img
          src={sideImg}
          className="2xl:w-[900px] lg:w-[537px] md:w-[300px] w-[360px]  lg:float-right"
        />
      </div>
    </section>
  );
}
