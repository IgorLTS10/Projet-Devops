import { createContext } from 'react';
import { Employee } from '../dto/employee';

// On définit notre modéle de context côté react
interface UserContext {
    zooId:string,
    setZooId: () => void,

    zooAccueil: Employee[],
    setZooAccueil: () => void,

    zooSeller: Employee[],
    setZooSeller: () =>void,

    zooGroomer: Employee[],
    setZooGroomer: () =>void,

    zooMaintainer: Employee[],
    setZooMaintainer: () =>void,

    logged: false,
    setLogged: () => void
};