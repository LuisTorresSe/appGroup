export const Terms = () => {
  const terms = [
    "1) Estos datos proporcionados no serán usados para realizar ningún tipo de spam",
    "2) Los datos que nos permites obtener sirven para mejorar la calidad de los sorteos en la plataforma de facebook manteniendo la lista actualizada",
  ];

  return (
    <div>
      <h1>TERMINOS</h1>
      {terms.map((term) => (
        <p key={term}>{term}</p>
      ))}
    </div>
  );
};
