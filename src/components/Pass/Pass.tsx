import backgroundImage from "./girafes.jpg"


function Pass(){
    return(
        <main className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="flex flex-row h-100">
                <ul className="menu bg-base-200 w-56 h-80 rounded-box m-10">
                    <li>
                        <h2 className="menu-title text-black">PASS Journée 
                        <button className="btn btn-xs m-1 btn-outline btn-warning">Modify</button>
                        </h2>
                        <ul>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </li>
                </ul>
            
                <ul className="menu bg-base-200 w-56 h-80 rounded-box m-10 ">
                    <li>
                        <h2 className="menu-title text-black">PASS Week-End
                        <button className="btn btn-xs m-1 btn-outline btn-warning">Modify</button>
                        </h2>
                        <ul>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </li>
                </ul>

                <ul className="menu bg-base-200 w-56 h-80 rounded-box m-10">
                    <li>
                        <h2 className="menu-title text-black">PASS Annuel
                        <button className="btn btn-xs m-1 btn-outline btn-warning">Modify</button>
                        </h2>
                        <ul>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </li>
                </ul>

                <ul className="menu bg-base-200 w-56 h-80 rounded-box m-10">
                    <li>
                        <h2 className="menu-title text-black">PASS 1day/month
                        <button className="btn btn-xs m-1 btn-outline btn-warning">Modify</button>
                        </h2>
                        <ul>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </li>
                </ul>

                <ul className="menu bg-base-200 w-56 h-80 rounded-box m-10">
                    <li>
                        <h2 className="menu-title text-black">PASS Escape Game
                        <button className="btn btn-xs m-1 btn-outline btn-warning">Modify</button>
                        </h2>
                        <ul>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </li>
                </ul>

                <ul className="menu bg-base-200 w-56 h-80 rounded-box m-10">
                <li>
                    <h2 className="menu-title text-black">PASS Night
                    <button className="btn btn-xs m-1 btn-outline btn-warning">Modify</button>
                    </h2>
                    <ul>
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </li>
                </ul>
            </div>
        </main>
    )
}

export default Pass