import { Email } from '../components/Email';
import { Password } from '../components/Password';

const CreateAccount = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center font-semibold border-2 border-light-gray m-auto w-2/4 p-16 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold">Registrar</h1>
      <form action="" className="flex flex-col gap-8">
        <div className="flex font-normal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Nome"
            className="ml-4 w-96 focus:outline-none border-b-2 border-light-gray"
          />
        </div>
        <Email />
        <Password />
        <input
          type="password"
          placeholder="Confirme a senha"
          className="ml-11 w-96 focus:outline-none border-b-2 border-light-gray font-normal"
        />
        <select
          name=""
          id=""
          className="border border-light-gray rounded-md shadow-md p-1 focus:outline-none font-normal mt-4"
        >
          <option value="" disabled selected>
            Selecione uma opção
          </option>
          <option value="Doscente">Doscente</option>
          <option value="Discente">Discente</option>
          <option value="Externo">Externo</option>
        </select>
        <button className="bg-blue text-white text-sm font-semibold p-2 rounded-md shadow-md ">
          CRIAR CONTA
        </button>
      </form>
    </div>
  );
};

export { CreateAccount };
