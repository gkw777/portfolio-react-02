import useScrollFadeIn from 'hooks/useScrollFadeIn';
import ParallaxScroll from 'parallaxScroll';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const animations = [useScrollFadeIn('up', 1, 1, 0.2), useScrollFadeIn('up', 1, 1, 0.2)];
  return (
    <Routes>
      <Route path='' element={<ParallaxScroll />}></Route>
    </Routes>
  );
};

export default App;
