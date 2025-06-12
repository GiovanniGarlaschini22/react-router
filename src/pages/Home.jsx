// IMPORT //
import Navbar from '../components/Navbar';
import legoSets from '../data/Lego.js';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid mx-auto mt-5">
                <div className="row">
                    {legoSets.map((set) => (
                        <div key={set.id} className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                            <div className="card h-100">
                                <img
                                    src={set.immagine}
                                    className="card-img-top figure-img img-fluid rounded"
                                    alt={set.nome}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{set.nome}</h5>
                                    <p className="card-text">
                                        Collezione: {set.collezione}<br/>
                                        Numero di serie: {set.numeroDiSerie}
                                    </p>
                                    <a href="#" className="btn btn-primary mt-auto">
                                        VISUALIZZA DETTAGLI
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Home;