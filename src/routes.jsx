import { Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';
import ItemsList from './components/Items/ItemsList';

const routes = [
  {path: '/', element: <ItemsList />},
  {path: '/counter', element: <Counter />}
]

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;