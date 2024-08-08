import ParallaxScroll from 'parallaxScroll';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='' element={<ParallaxScroll />}></Route>
    </Routes>
  );
};

export default App;
