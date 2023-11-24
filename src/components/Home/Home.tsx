import ButtonBadge from "../UniqueComponent/BouttonBadge"
import { FormEvent, useState, useEffect } from "react";
import axios from "axios";
import { Employee } from "../../dto/employee";

function Home() {


    const [zooId, setZooId] = useState<string>("");
    const [zooName, setZooName] = useState<string>()
    const [zooStatus, setZooStatus] = useState<boolean>()
    const [zooVisitor, setZooVisitor] = useState<number>()
    const [zooAccueil, setZooAccueil] = useState<Employee[]>()
    const [zooSeller, setZooSeller] = useState<Employee[]>()
    const [zooGroomer, setZooGroomer] = useState<Employee[]>()
    const [zooMaintainer, setZooMaintainer] = useState<Employee[]>()


    const { baseUri } = require("../../baseUri")
    const path = "/zoo"

    const [message, setMessage] = useState('')

    async function GetZoo() {
        try {
            const response = await axios.get(encodeURI(baseUri + path + "/649b4b3cb65880740cbc7019"))
            setZooId(response.data._id);
            setZooName(response.data.name);
            setZooAccueil(response.data.accueil)
            setZooGroomer(response.data.zooGroomer)
            setZooMaintainer(response.data.maintainer)
            setZooSeller(response.data.seller)

            if (response.data.status) {
                setZooStatus(true)
            } else {
                setZooStatus(false)
            }
        } catch (err: unknown) {
            console.log(err)
        }
    }

    async function getVisitor() {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'zoo': "649b4b3cb65880740cbc7019"

            }
            const response = await axios.get(encodeURI(baseUri + path + "/visitor"), { headers: headers })
            setZooVisitor(response.data)
        } catch (err: unknown) {
            console.log(err)
        }
    }

    useEffect(() => {
        GetZoo();

        const interval = setInterval(() => {
            GetZoo();
            getVisitor();
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, [])

    return (
        <main>
            <div className="flex flex-row">
                <div className="w-1/2 border border-black m-5">
                    <img src="https://cdn.dribbble.com/users/4834000/screenshots/16754506/media/e9229964ee21660f3598531aee49ae15.png" alt="Zoo" className="w-full h-auto" />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex flex-row">
                        <div>
                            <div className="card w-96 bg-neutral m-5 text-neutral-content">
                                <div className="card-body items-center text-center rounded-sm">
                                    <h2 className="card-title font-bold">{zooName}</h2>
                                    <p className="font-semibold">ID: {zooId}</p>
                                    <p className="font-semibold">Statut: {zooStatus ? 'Ouvert' : 'Fermé'}</p>
                                </div>
                            </div>
                            <div className="card w-96 bg-neutral m-5 text-neutral-content">
                                <div className="card-body items-center text-center rounded-sm">
                                    <h2 className="card-title font-bold">Employés présents :</h2>
                                    <ul className="list-disc list-inside">

                                        {zooAccueil?.map((emp) => (
                                            <div key={emp._id}>
                                                <li>{emp.login} - {emp.scopes}</li>
                                            </div>))}

                                        {zooGroomer?.map((emp) => (
                                            <div key={emp._id}>
                                                <li>{emp.login} - {emp.scopes}</li>
                                            </div>))}

                                        {zooMaintainer?.map((emp) => (
                                            <div key={emp._id}>
                                                <li>{emp.login} - {emp.scopes}</li>
                                            </div>))}

                                        {zooSeller?.map((emp) => (
                                            <div key={emp._id}>
                                                <li>{emp.login} - {emp.scopes}</li>
                                            </div>))}

                                    </ul>
                                </div>
                            </div>
                            <div className="card w-96 bg-neutral m-5 text-neutral-content">
                                <div className="card-body items-center text-center rounded-sm">
                                    <h2 className="card-title font-bold">Affluence LIVE<span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span></h2>
                                    <p className="font-semibold">{zooVisitor}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card  mt-5 sw-60 h-20 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Ouverture nocturne <input type="checkbox" className="toggle toggle-success" /></h2>
                            </div>
                            <div className="flex justify-center items-center h-screen">
                                <ButtonBadge />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home