import { Link } from 'react-router-dom';

const Home = () => {

    return <div className='home-page'>
        <h1>Fresh food always</h1>
        <link className='btn btn-primary' to='/catalog1'>
            Check out the catalog!
        </link >
    </div>
};

export default Home;