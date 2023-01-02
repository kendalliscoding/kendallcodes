import headshot from '../photos/headshot.jpeg';
import './Home.css';
const Home = () => {
    return (
        <div className='home'>
            <img src={headshot} alt="kendall's headshot"/>
            <h1 className="title_name"> Kendall Holmes </h1>
        </div>
    );
};

export default Home;