import logo from "../assets/logo-full.svg";
const Title = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
      <img src={logo} alt="title" />
      

      <h1 className="mt-12 text-neutral-0 text-5xl max-[430px]:text-2xl font-bold text-center text-shadow-lg font-inconsolata leading-tight">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="mt-4 px-2 text-neutral-300 text-xl max-[430px]:text-md2 text-center font-inconsolata opacity-80 tracking-wide">
        Secure your spot at next year's biggest coding conference.
      </p>
    </div>
  );
};

export default Title;
