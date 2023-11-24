import React, { useState } from 'react';

const AccessForm = () => {
  const [accesHandicape, setAccesHandicape] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Effectuer des actions avec la valeur du boolean accès handicapé
    console.log(accesHandicape);

    // Réinitialiser la valeur du boolean accès handicapé
    setAccesHandicape(false);
  };

  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Modifier l'accès handicapé</h2>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="accesHandicape"
          className="mr-2"
          checked={accesHandicape}
          onChange={(e) => setAccesHandicape(e.target.checked)}
        />
        <label className="text-gray-700" htmlFor="accesHandicape">
          Accès handicapé
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full"
        onClick={handleSubmit}
      >
        Enregistrer
      </button>
    </form>
  );
};

export default AccessForm;
