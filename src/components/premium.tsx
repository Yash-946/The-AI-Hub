function Premium() {
  return (
    <div className="bg-[#47474F] p-4 py-7 xmd:py-20 vvsm:p-12 space-y-7 text-white md:flex">
      <div className="space-y-7 md:w-1/2">
        <p className="  font-bold text-[24px] xmd:text-[42px] ">
          Get more with Premium
        </p>
        <p className="xmd:text-[22px]">
          Complete projects faster with batch file processing, convert scanned
          documents with OCR and e-sign your business agreements.
        </p>
        <button className="bg-[#FFC233] p-2 text-black font-bold text-sm rounded-lg w-full xmd:w-fit">
          Get Premium
        </button>
      </div>
      <div className=" flex justify-center items-center">
        <img src="/docs.png" />
      </div>
    </div>
  );
}

export default Premium;
