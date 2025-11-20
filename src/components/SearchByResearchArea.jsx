const SearchByResearchArea = () => {
  return (
    <div>
      <p className="text-black font-bold text-xl">Áreas de pesquisa:</p>
      <form action="">
        <select
          name="areas-pesquisa"
          id="areas-pesquisa"
          className="border border-light-gray rounded-md shadow-md w-96 p-1 focus:outline-none"
        >
          <option value="exemplo1">Exemplo 1</option>
          <option value="exemplo2">Exemplo 2</option>
          <option value="exemplo3">Exemplo 3</option>
        </select>
      </form>
    </div>
  );
};

export { SearchByResearchArea };
