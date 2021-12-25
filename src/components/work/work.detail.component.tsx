import React from 'react';
import {useParams} from 'react-router-dom';


const WorkDetailComponent: React.FC = (): JSX.Element => {

    const params = useParams();

    return (
        <>
            <header className="about-masthead">
                <div className="container h-100 py-5 align-items-center justify-content-center" style={{ position: "relative", top: "50px"}}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                        <iframe width="100%" height="450" 
                        src={`https://www.youtube.com/embed/${params.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        
                    </div>
                </div>
            </header>
        </>
    )
}
export default WorkDetailComponent