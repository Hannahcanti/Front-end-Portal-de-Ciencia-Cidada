const News = () => {
  return (
    <div className="w-9/12 m-auto mt-8">
      <h1 className="text-dark-blue font-bold text-2xl">
        Lorem ipsum dolor sit amet.
      </h1>
      <p>
        Publicado em 10 de maio de 2024, por{' '}
        <span className="underline text-dark-blue">Sabrina França</span>
      </p>
      <img
        className="h-60 w-96 mt-8 mb-8 m-auto"
        src="https://placehold.co/600x400"
      />
      <h2 className="text-black font-bold text-lg">
        Consectetur adipisicing elit.
      </h2>
      <p className="mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        delectus quo perferendis doloribus voluptatem doloremque, quis
        laboriosam similique? Quae dicta necessitatibus quas eligendi corporis
        pariatur quidem omnis saepe aliquam est! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nam cum, nostrum eveniet provident atque
        repellendus perspiciatis recusandae asperiores maxime laborum dolorum
        neque aperiam consequuntur, sequi cumque incidunt ex, nesciunt totam.
      </p>
      <h3 className="inline font-bold text-dark-blue">TAGS: </h3>
      <p className="inline text-gray text-sm">
        #TECNOLOGIA #PROGRAMAÇÃO #ENGENHARIA
      </p>
      <hr className="" />
    </div>
  );
};

export { News };
