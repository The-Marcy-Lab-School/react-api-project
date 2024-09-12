import NourishContext from "./NourishContext";

const NourishProvider = ({ children }) => {

    return (
        <NourishContext > 
            { children }
        </NourishContext > 
    )
}

export default NourishProvider