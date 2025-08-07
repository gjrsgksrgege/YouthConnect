import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-screen w-full flex flex-row bg-white md:text-[16px]">
      {/* Left side */}
      <div className="h-full md:w-[40%] p-16 flex flex-col justify-between items-stretch gap-8">
        <div className="flex flex-row justify-between items-center ">
          <div className="uppercase text-xl font-bold text-[#3E414B]">
            admin
          </div>
          <button className="capitalize text-[14px] px-5 py-1 rounded-2xl border-2 border-[#f2f2f2] shadow-md cursor-pointer">
            lang
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-around items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="text-4xl capitalize font-semibold mb-2">
              create an account
            </div>
            <div className="capitalize">welcome, new member</div>
          </div>
          <form
            action=""
            className="w-full flex flex-col items-stretch space-y-6"
          >
            <input
              type="text"
              placeholder="email"
              className="px-4 py-2 capitalize rounded-2xl border-2 border-[#f2f2f2] shadow-xs placeholder:text-gray-700"
            />
            <input
              type="text"
              placeholder="password"
              className="px-4 py-2 capitalize rounded-2xl border-2 border-[#f2f2f2] shadow-xs placeholder:text-gray-700"
            />
            <div className="flex justify-start text-[14px]">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms">
                I agree to the <span>terms and conditions</span>
              </label>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="h-1 w-6 border-t-2 border-[#3E414B]/50"></div>
              <div className="text-[14px]">or</div>
              <div className="h-1 w-6 border-t-2 border-[#3E414B]/50"></div>
            </div>
            <button className="px-4 py-2 capitalize rounded-2xl border-2 border-[#f2f2f2] shadow-xs text-gray-900">
              signup with google
            </button>
            <button
              type="submit"
              className="px-4 py-2 capitalize rounded-2xl border-2 border-[#f2f2f2] bg-[#1B1B1B] shadow-xs text-white"
            >
              Register
            </button>

            <div className="flex justify-center items-center capitalize text-[14px]">
              <div>already have an account?</div> &nbsp;
              <Link to="/" className="text-[#3E414B] hover:underline">
                login
              </Link>
            </div>
          </form>

          <div className="text-[14px] text-center">
            The Official page of SKPYM with aims to reach young people.
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="h-full md:w-[60%] p-3">
        <div className="relative h-full w-full bg-[#1B1B1B] rounded-2xl">
          <div className="absolute bottom-4 right-4">
            <div className="w-12 aspect-square bg-white rounded-full cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
