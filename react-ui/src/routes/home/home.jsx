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
          <div className="front-arts">
            <h1>Helpful Articles for Better Software</h1>
            <ul>
              <li><h4><a href="https://dev.to/akashshyam/7-tips-for-clean-code-3nk1" target="_blank" rel="noreferrer" style={{color: "black"}}>7 Tips For Clean Code - DEV Community</a></h4></li>
              <li><h4><a href="https://dev.to/ruppysuppy/5-ui-tips-to-become-a-better-front-end-developer-1ae1" target="_blank" rel="noreferrer" style={{color: "black"}}>5 UI Tips to Become a Better Front End Developer - DEV Community</a></h4></li>
              <li><h4><a href="https://dev.to/kalashin1/solid-design-principles-5621" target="_blank" rel="noreferrer" style={{color: "black"}}>Solid Design Principles - DEV Community</a></h4></li>
              <li><h4><a href="https://betterprogramming.pub/5-clean-code-tips-every-developer-should-know-by-heart-6b632e397278" rel="noreferrer" style={{color: "black"}}>5 Clean Code Tips Every Developer Should Know by Heart - Better Programming</a></h4></li>
              <li><h4><a href="https://www.geeksforgeeks.org/12-tips-to-write-efficient-sql-queries/" target="_blank" rel="noreferrer" style={{color: "black"}}>12 Tips to Write Efficient SQL Queries - GeeksforGeeks</a></h4></li>
              <li><h4><a href="https://dev.to/aidenybai/get-s-on-your-github-project-17o1" target="_blank" rel="noreferrer" style={{color: "black"}}>Tips to get Visibility + Feedback to your GitHub project - DEV Community</a></h4></li>
            </ul>  
          </div>  
        </>
    )
};

export default Home;