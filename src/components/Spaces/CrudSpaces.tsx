import backgroundZoo from "./backgroundZoo.jpg"

function Crud(){
    return(
        <main className="bg-cover bg-center min-h-screen" style={{backgroundImage: `url(${backgroundZoo})`}}>
            <div className="flex items-center justify-center">
                <button className="btn btn-success mt-4">Ajouter un espace</button>
            </div>
            <div className="flex flex-wrap">
                <div className="card card-compact w-96 bg-base-100 shadow-xl m-10 border border-black">
                    <figure><img src="https://www.oregonzoo.org/sites/default/files/styles/exhibit_photo/public/2015/10/28/H_Zawadi-cubs-lions.jpg?itok=p516fbl_" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Espace Lion</h2>
                        <p>Modifier l'espace Lion</p>
                        <div className="card-actions flex justify-center">
                            <button className="btn btn-warning mr-2">Maintenance</button>
                            <button className="btn btn-primary mr-2">Modify</button>
                            <button className="btn btn-secondary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        
    )
}

export default Crud