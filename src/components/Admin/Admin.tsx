import {FormEvent, SyntheticEvent, useState} from "react";
import axios from "axios";

export interface LogFormAttributes{
    userName?:string;
    password?: string;
    onValidate?: (userName: string, password:string, log:boolean) => void
}

function Admin(attributes: LogFormAttributes){

    const { baseUri } = require("../../baseUri")
    const path = "/employee"

    const [userName, setUserName] = useState(attributes.userName ?? '')
    const [password, setPassword] = useState(attributes.password ?? '')

    const handleChangeName = (event: FormEvent<HTMLInputElement>)=> {
        setUserName(event.currentTarget.value)
    }

    const handleChangePassword = (event: FormEvent<HTMLInputElement>)=> {
        setPassword(event.currentTarget.value)
    }


    async function Connexion(e:SyntheticEvent){
        e.preventDefault();

        try {
            const response = await axios.post(encodeURI(baseUri + path + "/login"), { login: userName, password:password })
            console.log(response);

            if(attributes.onValidate){
                attributes.onValidate(userName,password, (response.status == 200 ? true : false))
            }
        } catch (err: unknown) {
            console.log(err)
        }
    }

    return(
        <main className="">
            <h1 className="text-4xl">Admin</h1>
            <form className="w-full flex justify-center h-full" onSubmit={Connexion}>
                <div className="">
                    <div className="w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Identifiant</span>
                        </label>
                        <input type="text" placeholder="Identifiant" className="input input-bordered w-full max-w-xs" value={userName} onChange={handleChangeName}/>
                    </div>
                    <div className="w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" value={password} onChange={handleChangePassword} />
                    </div>
                    <div className="flex justify-center mt-3">
                        <button className="btn bg-emerald-500 text-white" type="submit">Connexion</button>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default Admin