import { logo } from "../assets";

const Hero = () => {
  return (
    <header
      className="w-full flex 
    justify-center items-center flex-col"
    >
      <nav
        className="flex justify-between
         items-center w-full mb-10 pt-10"
      >
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open(`https://gitlab.com/arunjith.official/summerizer`);
          }}
          className="gitlab_btn"
        >
          Gitlab
        </button>
      </nav>
      <h1 className="head_text">
        Summerize articles with <br className="max-md:hidden" />
        <span className="orange_gradient">Open AI GPT-4</span>
      </h1>
      <h2 className="desc">
        simplify your articles by summize an open-source article summerizer that
        transforms leangthy articles into clear and consise summeries
      </h2>
    </header>
  );
};

export default Hero;
