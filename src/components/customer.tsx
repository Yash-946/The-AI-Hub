function Customer() {
  return (
    <div className="p-2 py-5 vvsm:p-9 xsm:p-20 xmd:p-32 bg-[#F5F5FA] space-y-7">
      <h1 className="text-center vvsm:text-[24px] font-bold xmd:text-[48px]">
        The PDF software trusted by millions of users
      </h1>
      <p className="text-center xmd:text-[22px] xmd:mt-[16px] ">
        iLovePDF is your number one web app for editing PDF with ease. Enjoy all
        the tools you need to work efficiently with your digital documents while
        keeping your data safe and secure.
      </p>
      <div className=" flex flex-col vsm:flex-row  vsm:space-x-8  justify-center items-center space-y-5">
        <div></div>
        <img className="w-fit h-8" src="/pdf-association-logo.svg" />
        <img className="w-fit h-8" src="/iso-logo.svg" />
        <img className="w-fit h-8" src="/ssl-encrypted-logo.svg" />
      </div>
    </div>
  );
}

export default Customer;
