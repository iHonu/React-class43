import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  let pageTitle;

  if (location.pathname.startsWith('/product/')) {
    pageTitle = '';
  } else {
    switch (location.pathname) {
      case '/':
        pageTitle = 'Products';
        break;
      case '/favorites':
        pageTitle = 'Favorites';
        break;
      default:
        pageTitle = 'Products';
    }
  }

  return (
    <nav className="p-3 flex justify-between items-center">
      <h1 className="text-3xl font-semibold my-4">{pageTitle}</h1>
      <div className="flex">
        <Link
          to="/"
          className="text-gray-700 hover:text-black mx-2 underline decoration-solid underline-offset-4"
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className="text-gray-700 hover:text-black mx-2 underline decoration-solid underline-offset-4"
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}
