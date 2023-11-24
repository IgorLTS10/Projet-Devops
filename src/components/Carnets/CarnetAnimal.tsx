import backgroundZoo from "../Spaces/backgroundZoo.jpg"

function CarnetAnimal(){
    return(
        <main className="bg-cover bg-center min-h-screen" style={{backgroundImage: `url(${backgroundZoo})`}}>
            <div className="flex items-center justify-center ">
            <h1 className="text-7xl font-bold text-center mt-5 relative">
            <span className="text-white shadow-lg bg-blur px-7 py-1">
                Carnet Animal
            </span>
            </h1>

            </div>
            <div className="flex items-center justify-center mt-5">
                <button className="btn btn-success">Ajouter un animal</button>
            </div>
            <div className="flex flex-wrap">
                <div className="card card-compact w-96 bg-base-100 shadow-xl m-10 border border-black">
                    <figure><img src="https://thumbs.dreamstime.com/z/babouin-m%C3%A2le-de-hamadryas-20852400.jpg?w=992" alt="Shoes" /></figure>
                    <div className="card-body flex text-center">
                        <h2 className="card-title mx-auto">Nom de l'animal</h2>
                        <p>Race de l'animal</p>
                        <p>Id de l'animal</p>
                        <div className="card-actions flex justify-center">
                            <button className="btn btn-warning mr-2">Modifier le carnet</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        
    )
}

export default CarnetAnimal