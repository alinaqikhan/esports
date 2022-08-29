import { Jumbotron, Navigation } from "../components";

const HomePage = props => {
    return (
        <>
            <header>
              <Navigation />
            </header>
            <main>
                <Jumbotron />
            </main>
        </>
    );
};

export default HomePage;
