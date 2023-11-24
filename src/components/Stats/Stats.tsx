import backgroundStat from "./backgroundStat.jpg"

function Stats(){
    return(
        <main className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgroundStat})`}}>
            <div className="flex flex-row">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-row">
                        <div className="w-1/2  m-14">
                            <h1 className="bg-white text-4xl text-center py-4 rounded-xl">Statistiques Journée</h1>
                            <div className="stats shadow m-14">
                                <div className="stat">
                                    <div className="stat-title">Stat1</div>
                                    <div className="stat-value">89,400</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div>
                            </div>
                            <div className="stats shadow m-14">
                                <div className="stat">
                                    <div className="stat-title">Stat2</div>
                                    <div className="stat-value">89,400</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div> 
                            </div>
                            <div className="stats shadow m-14">
                                <div className="stat">
                                    <div className="stat-title">Stat3</div>
                                    <div className="stat-value">89,400</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div> 
                            </div>
                            <div className="stats shadow m-14">
                                <div className="stat">
                                    <div className="stat-title">Stat4</div>
                                    <div className="stat-value">89,400</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div> 
                            </div>
                        </div>
                        <div className="w-1/2  m-14">
                            <h1 className="bg-white text-4xl text-center py-4 rounded-xl">Statistiques Semaine</h1>
                            <div className="stats shadow m-14">
                                <div className="stat">
                                    <div className="stat-title">Stat1</div>
                                    <div className="stat-value">89,400</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div> 
                            </div>
                            <div className="stats shadow m-14">
                                <div className="stat">
                                    <div className="stat-title">Stat2</div>
                                    <div className="stat-value">89,400</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div> 
                            </div>
                            <div className="stats shadow m-14">
                                <div className="stat">
                                    <div className="stat-title">Stat3</div>
                                    <div className="stat-value">89,400</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div> 
                            </div>
                            <div className="stats shadow m-14">
                                <div className="stat">
                                    <div className="stat-title">Stat4</div>
                                    <div className="stat-value">89,400</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Stats