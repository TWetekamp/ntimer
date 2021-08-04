import Greeting from "../../components/usernameForm/greeting";
import UsernameForm from "../../components/usernameForm/usernameForm";

const Home = () => {
    return (
        <>
          <div>
            <div className="y-wrap">
              <h2>nTime - Home</h2>
              <p>nTime application helps developers measure their improvements for themselves.</p>
              {/* <div className="y-wrap">
                <img src="http://www.vangoghgallery.com/catalog/image/0467/Caf%C3%A9-Terrace-on-the-Place-du-Forum,-Arles,-at-Night,-The.jpg" alt="The Café Terrace on the Place du Forum, Arles, at Night"/>
              </div> */}
            </div>
          </div>
          <Greeting />
          <UsernameForm />
        </>
    )
};

export default Home;