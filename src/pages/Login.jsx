import { Email } from '../components/Email';
import { Password } from '../components/Password';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center font-semibold border-2 border-light-gray m-auto w-2/4 p-16 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold">Login</h1>
      <form action="" className="flex flex-col gap-8">
        <Email />
        <Password />
        <button className="bg-blue text-white text-sm font-semibold p-2 rounded-md shadow-md ">
          ENTRAR
        </button>
      </form>
      <p className="text-sm text-blue">ESQUECI MINHA SENHA</p>
      <p className="text-sm text-blue">
        <Link to="../createAccount">REGISTRAR</Link>
      </p>
    </div>
  );
};

export { Login };
