import React, { useState } from 'react';

const ModifySpaceForm = () => {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('');
  const [capacite, setCapacite] = useState(0);
  const [duree, setDuree] = useState('');
  const [horairesOuverture, setHorairesOuverture] = useState('');
  const [accesHandicape, setAccesHandicape] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Effectuer des actions avec les données du formulaire
    console.log({
      nom,
      description,
      image,
      type,
      capacite,
      duree,
      horairesOuverture,
      accesHandicape,
    });

    // Réinitialiser les valeurs des champs
    setNom('');
    setDescription('');
    setImage('');
    setType('');
    setCapacite(0);
    setDuree('');
    setHorairesOuverture('');
    setAccesHandicape(false);
  };

  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Modifier un espace</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="nom">
          Nom
        </label>
        <input
          type="text"
          id="nom"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
          Image
        </label>
        <input
          type="text"
          id="image"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="type">
          Type
        </label>
        <input
          type="text"
          id="type"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="capacite">
          Capacité
        </label>
        <input
          type="number"
          id="capacite"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          value={capacite}
          onChange={(e) => setCapacite(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="duree">
          Durée
        </label>
        <input
          type="text"
          id="duree"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          value={duree}
          onChange={(e) => setDuree(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="horairesOuverture">
          Horaires d'ouverture
        </label>
        <input
          type="text"
          id="horairesOuverture"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          value={horairesOuverture}
          onChange={(e) => setHorairesOuverture(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="accesHandicape">
          Accès handicapé
        </label>
        <input
          type="checkbox"
          id="accesHandicape"
          className="mr-2"
          checked={accesHandicape}
          onChange={(e) => setAccesHandicape(e.target.checked)}
        />
        <span className="text-gray-700">Oui</span>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full"
        onClick={handleSubmit}
      >
        Enregistrer les modifications
      </button>
    </form>
  );
};

export default ModifySpaceForm;
