const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-[64rem] flex flex-col gap-2 pt-8 text-center text-sm capitalize">
      <div className="flex justify-center">
        <div className="w-8 aspect-square flex items-center justify-center text-[#1877F2] text-[23px]">
          <i className="fa-brands fa-facebook"></i>
        </div>
        <div className="w-8 aspect-square flex items-center justify-center bg-gradient-to-r from-[#00B2FF] to-[#006AFF] bg-clip-text text-transparent text-[23px]">
          <i className="fa-brands fa-facebook-messenger"></i>
        </div>
        <div className="w-8 aspect-square flex items-center justify-center text-[#181717] text-[23px]">
          <i className="fa-brands fa-github"></i>
        </div>
        <div className="w-8 aspect-square flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent text-[23px]">
          <i className="fa-brands fa-square-instagram"></i>
        </div>
        <div className="w-8 aspect-square flex items-center justify-center text-[#0A66C2] text-[23px]">
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <div className="w-full flex justify-center gap-2 text-center cursor-pointer">
        <p>Privary Policy</p>
        <p>terms of use</p>
        <p>about</p>
      </div>
      <p className="pb-6 px-8 text-xs">
        © 2025 Santa Cruz Parish Youth Ministry. This website is not officially
        affiliated with the Diocese of Novaliches or any other governing
        religious institution. The views and content shared here are created by
        and for the Youth Community and do not necessarily represent the
        official stance of the Catholic Church.
      </p>
    </footer>
  );
};

export default Footer;
