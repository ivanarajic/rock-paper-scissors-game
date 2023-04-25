import Image from 'next/image';

function Header({ score }) {
  return (
    <div className="max-w-xl w-full border-2 border-[#606e85] rounded-xl p-5 flex gap-2 justify-between items-center">
      <div>
        <Image
          src="/logo.svg"
          alt="logo"
          width={80}
          height={80}
          className="sm:w-36 sm:h-auto"
          priority
        />
      </div>
      <div className="bg-white rounded-md w-20 sm:w-28 sm:h-24 h-16 flex flex-col justify-center items-center">
        <span className="uppercase text-xs sm:text-base font-semibold text-[#2a46c0] tracking-widest">
          Score
        </span>
        <h1 className="text-4xl leading-8 sm:text-5xl font-bold text-[#3b4363]">
          {score}
        </h1>
      </div>
    </div>
  );
}

export default Header;
