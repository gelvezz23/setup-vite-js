import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '@Components/Layout';
import Home from '@Container/Home';
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
