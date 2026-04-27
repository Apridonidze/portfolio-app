import Sidebar from "../components/Sidebar";

import '../style/main.css'

export default function Main(){
    return(
        <div className="main-container container-fluid row row-cols-sm-2 row-cols-1">
            <div className="main-start"><Sidebar /></div>
            <div className="main-end mx-auto border">
                asdadsadsad
            </div>
        </div>
    );
};