// IMPORT //
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h1 className="display-4 fw-bold text-primary text-center mb-5">Chi Siamo</h1>
                    </div>
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <p className="lead text-muted mb-4">
                                "Mattoncini in Rete" è il punto di riferimento online per tutti gli appassionati del mondo LEGO.
                            </p>
                            <p className="fs-6 lh-lg">
                                Questo blog nasce dalla passione per i mattoncini più famosi del mondo e si rivolge sia ai collezionisti esperti che ai curiosi alle prime armi.
                                Ogni settimana vengono pubblicati articoli dedicati a nuove uscite, set rari, consigli per collezionare, interviste a fan designer e approfondimenti sul dietro le quinte del mondo LEGO!
                            </p>
                            <p className="fs-6 lh-lg">
                                Dalle serie classiche come City e Technic, alle collezioni da esposizione come Architecture e LEGO Ideas, fino ai crossover con il mondo del cinema e dei videogiochi,
                                "Mattoncini in Rete" esplora ogni aspetto di questo universo creativo.
                            </p>
                            <p className="fs-6 lh-lg">
                                Uno degli elementi distintivi del blog è la sezione dedicata alle collezioni: qui i lettori possono trovare guide dettagliate su come iniziare una raccolta, come conservarla al meglio,
                                e quali set stanno aumentando di valore nel mercato del collezionismo.
                            </p>
                            <p className="fs-6 lh-lg mb-0">
                                Che tu voglia restare aggiornato sulle novità, scoprire curiosità storiche o semplicemente condividere la tua passione con altri fan,
                                "Mattoncini in Rete" è il luogo perfetto per costruire, pezzo dopo pezzo, la tua avventura nel mondo LEGO!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;