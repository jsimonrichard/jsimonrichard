import './index.css';
import { TerminalAnimated, TerminalLink } from './components/terminal';
import profile from "./img/simon.jpg";
import forestBackground from './img/forest_background.jpg';

function App() {
  return (
    <div className="App min-h-screen bg-fixed" style={{backgroundImage: `url(${forestBackground})` }}>
      <header className="fixed p-6 w-screen text-3xl font-bold">
        J. Simon Richard
      </header>
      
      <section className="w-screen min-h-75-screen p-6 grid">
        <TerminalAnimated className="place-self-center w-full max-w-screen-lg mx-auto min-h-96 shadow-2xl mt-20 mb-20" command="whoami">
          <br />
          Hi, my name is J. Simon Richard. I'm an aspiring full-stack developer with a wide range of <TerminalLink>interests</TerminalLink> and <TerminalLink>skills</TerminalLink>. There's a lot I don't know, but when I'm faced with something new I'm good at learning it quickly.

          <br/><br/>

          I'm only graduating high school this year, but I've already had some great <TerminalLink>education</TerminalLink> and <TerminalLink>work</TerminalLink> experiences. 
        </TerminalAnimated>
      </section>

      <section className="w-screen bg-white about-bg-shape -mt-8">
        <div className="container mx-auto grid md:grid-cols-2 p-10 gap-8">
          <div className="self-center">
            <img src={profile} className="mx-auto w-auto h-auto max-h-96 rounded-full" />
          </div>
          <div className="">
            <h1 className="text-3xl">About</h1>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare interdum malesuada. Nunc tellus lorem, posuere sed ultricies id, tempor eget sapien. Nullam eget massa consectetur, tristique nibh id, faucibus risus. Nunc ut tincidunt urna. In sit amet cursus odio. Ut accumsan nisi neque, vitae consequat nisi ultricies ultricies. Aenean pulvinar leo velit, ornare auctor quam rhoncus quis. Cras tempus in lorem vitae convallis. Nulla efficitur varius hendrerit. Aenean id dui at lorem ornare fermentum. Nullam tempus nulla quis semper mattis. Nulla volutpat nibh in aliquam fermentum. Sed eu urna vitae ipsum suscipit congue ut in enim. 
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

//Photo by <a href="https://unsplash.com/@jaymantri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jay Mantri</a> on <a href="https://unsplash.com/s/photos/forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
