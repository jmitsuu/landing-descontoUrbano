export function MobileImg() {
  return (
    <section className=" w-full flex  h-full ">
      <div className="lg:h-[720px] w-full relative">
        <img
          src="../../src/assets/images/lead/simbolo.png"
          className="lg:h-[490px] float-right absolute right-0 bottom-30"
        />
        <img
          src="../../src/assets/images/lead/mobileMockup.png"
          className="lg:h-[720px] absolute left-0 bottom-0"
        />
      </div>
    </section>
  );
}
