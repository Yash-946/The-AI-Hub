function Navbar() {
  return (
    <div>
      <div className="bg-white shadow-2xl sticky h-14 top-0 z-50 shadow-[#ECECF1] flex justify-between p-4 items-center">
        <div className="flex space-x-8 font-semibold font-sans text-[14px]">
          <img
            className="w-32 sm:mr-3 hover:cursor-pointer"
            src="/ilovepdf.svg"
            alt="ilovepdf logo"
          />
          <p className=" hidden items-center hover:text-[#E5322D] hover:cursor-pointer  lg:flex">
            Merge PDF
          </p>
          <p className="hidden lg:flex items-center hover:text-[#E5322D] hover:cursor-pointer">
            Split PDF
          </p>
          <p className="hidden lg:flex items-center hover:text-[#E5322D] hover:cursor-pointer">
            Compress PDF
          </p>
          <p className="hidden lg:flex items-center hover:text-[#E5322D] hover:cursor-pointer">
            Convert PDF{" "}
            <img className="w-3 ml-1.5" src="/drop.png" alt="drop down" />
          </p>
          <p className="hidden sm:flex sm:items-center hover:text-[#E5322D] hover:cursor-pointer">
            All pdf tools{" "}
            <img className="w-3 ml-1.5" src="/drop.png" alt="drop down" />
          </p>
        </div>

        <div className="flex space-x-6">
          <img
            className="hidden sm:flex sm:items-center sm:justify-center cursor-pointer h-[32px] w-11"
            src="/dwnld.jpg"
            alt="download"
          />
          <p className="hidden sm:flex sm:items-center cursor-pointer font-sans text-[14px] hover:text-[#E5322D]">
            Login
          </p>
          <button className="hidden sm:flex bg-[#E5322D] hover:bg-[#BD060A] p-2 text-white font-bold font-sans text-[14px] rounded-lg">
            Sign Up
          </button>
          <img
            className="sm:hidden vsm:flex w-10 max-[350px]:hidden"
            src="/tool.svg"
            alt="tool"
          />
          <img
            className="sm:hidden vsm:flex w-10 max-[350px]:hidden"
            src="/user.png"
            alt="user"
          />
          <div className="space-y-2 flex flex-col justify-center mr-8 hover:cursor-pointer">
            <div className="w-8 h-0.5 rounded-xl bg-gray-600"></div>
            <div className="w-8 h-0.5 rounded-xl bg-gray-600"></div>
            <div className="w-8 h-0.5 rounded-xl bg-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
