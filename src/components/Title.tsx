import logo from "../assets/logo-full.svg";
import patternSquigglyLineTop from "../assets/pattern-squiggly-line-top.svg";

const Title = () => {
  return (
    <div className="max-w-4xl mx-auto pt-12 px-4 flex flex-col items-center justify-center">
      <img src={logo} alt="title" />
      <img
        src={patternSquigglyLineTop}
        alt="pattern squiggly line top"
        className="absolute top-[100px] right-0"
      />

      <h1 className="mt-12 text-neutral-0 text-5xl font-bold text-center text-shadow-lg font-inconsolata leading-normal">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="mt-4 text-neutral-300 text-xl font-inconsolata opacity-80 tracking-wide">
        Secure your spot at next year's biggest coding conference.
      </p>
    </div>
  );
};

export default Title;
