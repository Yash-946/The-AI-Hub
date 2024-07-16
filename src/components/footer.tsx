function Footer() {
  return (
    <div className="bg-[#F5F5FA] vvsm:pl-16 space-y-7 vvsm:space-x-3 p-3 vvsm:p-6 xxsm:grid xxsm:grid-cols-2 xmd:grid-cols-4">
      <div className="mx-3 my-7  ">
        <h1 className="m-3 text-[#E5322D] font-bold">ILOVEPDF</h1>
        <ul className="mx-3 space-y-3">
          <li className="hover:cursor-pointer hover:text-[#e5322D]">Home</li>
          <li className="hover:cursor-pointer hover:text-[#e5322D]">
            Features
          </li>
          <li className="hover:cursor-pointer hover:text-[#e5322D]">Pricing</li>
          <li className="hover:cursor-pointer hover:text-[#e5322D]">Tools</li>
          <li className="hover:cursor-pointer hover:text-[#e5322D]">FAQ</li>
        </ul>
      </div>
      <div>
        <h1 className="m-3 text-[#E5322D] font-bold">PRODUCT</h1>
        <ul className="mx-3 space-y-3">
          <li className="hover:cursor-pointer hover:text-[#e5322D]">
            iLovePDF Desktop
          </li>
          <li className="hover:cursor-pointer hover:text-[#e5322D]">
            iLovePDF Mobile
          </li>
          <li className="hover:cursor-pointer hover:text-[#e5322D]">
            Developers
          </li>
          <li className="hover:cursor-pointer hover:text-[#e5322D]">
            Wordpress Plugin
          </li>
          <li className="hover:cursor-pointer hover:text-[#e5322D]">
            iloveimg.com
          </li>
        </ul>
      </div>
      <div>
        <h1 className="m-3 text-[#E5322D] font-bold">SOLUTIONS</h1>
        <ul className="mx-3 space-y-3">
          <li className="hover:cursor-pointer hover:text-[#e5322D]">
            Business
          </li>
          <li className="hover:cursor-pointer hover:text-[#e5322D]">
            Education
          </li>
        </ul>
      </div>

      <div>
        <h1 className="m-3 text-[#E5322D] font-bold">COMPANY</h1>
        <ul className="mx-3 space-y-3">
          <li className="hover:cursor-pointer hover:text-[#e5322D]">
            Our Story
          </li>
          <li className="hover:cursor-pointer hover:text-[#e5322D]">Blog</li>
          <li className="hover:cursor-pointer hover:text-[#e5322D]">Press</li>
          <li className="hover:cursor-pointer hover:text-[#e5322D]">
            Legal & Privacy
          </li>
          <li className="hover:cursor-pointer hover:text-[#e5322D]">Contact</li>
        </ul>
      </div>

      <p className="flex justify-start">© iLovePDF 2024 Your PDF Editor</p>
    </div>
  );
}

export default Footer;
