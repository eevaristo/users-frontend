import { useEffect, useState } from 'react';
import { LayoutPagina } from '../../components/layout/LayoutPagina';
import { Menu } from '../../components/menu/Menu';

export const Home = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches,
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <>
      {matches && <Menu />}
      <LayoutPagina></LayoutPagina>
    </>
  );
};
