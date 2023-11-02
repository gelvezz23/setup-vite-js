import { Suspense } from 'react';
import './styles.css';
const Home = () => {
  return (
    <Suspense fallback={<h1>loading ...</h1>}>
      <div className="home">Home</div>
    </Suspense>
  );
};
export default Home;
