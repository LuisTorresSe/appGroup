export const Conditions = () => {
  const conditions = [
    `1) En caso de que ya no quieras que sea recopilado tus datos, puedes abandonar el grupo en el momento que lo requieras y tambien deberas quitar el acceso de la app a tu cuenta ingresando a https://www.facebook.com/help/170585223002660}`,
    "2) Los datos podrian ser usados para verificar la antiguedad del miembro y ver la posibilidad de promociones",
  ];
  return (
    <div>
      <h1>CONDICIONES</h1>
      {conditions.map((condition) => (
        <p key={condition}>{condition}</p>
      ))}
    </div>
  );
};
