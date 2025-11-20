import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo_Unesp.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-dark-blue text-white p-4 font-medium drop-shadow">
      <div className="flex justify-between items-center">
        <Link to="">
          <img src={logo} alt="Logo da Unesp" className="h-10 ml-4 lg:ml-10" />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="text-white lg:hidden mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex justify-evenly items-center gap-10">
            <li>
              <Link className="hover:underline" to="../grupos-de-pesquisa-dir">
                Grupos de Pesquisa
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="../projetos-dir">
                Projetos
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="../pesquisadores-dir">
                Membros
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="../noticias-dir">
                Notícias
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="../como-ajudar">
                Como ajudar?
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login Link */}
        <div className="hidden lg:block mr-8">
          <Link className="hover:underline" to="../login">
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-dark-blue">
          <ul className="flex flex-col gap-4 p-4 text-center">
            <li>
              <Link
                to="../grupos-de-pesquisa-dir"
                onClick={() => setMenuOpen(false)}
              >
                Grupos de Pesquisa
              </Link>
            </li>
            <li>
              <Link to="../projetos-dir" onClick={() => setMenuOpen(false)}>
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="../pesquisadores-dir"
                onClick={() => setMenuOpen(false)}
              >
                Membros
              </Link>
            </li>
            <li>
              <Link to="../noticias-dir" onClick={() => setMenuOpen(false)}>
                Notícias
              </Link>
            </li>
            <li>
              <Link to="../como-ajudar" onClick={() => setMenuOpen(false)}>
                Como ajudar?
              </Link>
            </li>
            <li>
              <Link to="../login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
