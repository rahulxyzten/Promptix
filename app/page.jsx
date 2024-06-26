import Nav from "@components/Nav";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="w-full mt-16 flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
          Promptopia is an open-source AI prompting tool for modern world to
          discover, create and share creative prompts
        </p>

        <Feed />
      </section>
    </>
  );
};

export default Home;
