import Button from "../ui/button";

const Jumbotron = props => {
    
    return (
        <div className="relative">
            <div id="hero-banner-image">
            <div className="absolute top-0 flex flex-col gap-5 justify-center h-full px-5 md:px-10 lg:px-24 md:gap-7 lg:gap-10">
            <h2 className="text-3xl max-w-xl text-white font-bold md:text-6xl">Grow Your Player Base</h2>
            <p className="text-white max-w-2xl font-normal text-base md:text-xl">Based in UAE &amp; with an office in the UK, ESME was Launched in early 2012 and drew a top notch expertise in the business management as one of the best Esports operators in the Middle East</p>
            <Button title={"Start Now"} className="button-inc-mobile bg-yellow text-xs md:text-lg" />
            </div>
            </div>
        </div>
    );
};

export default Jumbotron;
