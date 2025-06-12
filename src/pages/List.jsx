// IMPORT //
import Navbar from '../components/Navbar';
import legoSets from '../data/Lego.js';

const List = () => {
    return (
        <>
            <Navbar />
            <table className="table ms-5 my-5">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOME</th>
                        <th scope="col">COLLEZIONE</th>
                        <th scope="col">NUMERO DI SERIE</th>
                        <th scope="col">IMMAGINE</th>
                    </tr>
                </thead>
                <tbody>
                    {legoSets.map((set) => (
                        <tr key={set.id}>
                            <th scope="row">{set.id}</th>
                            <td>{set.nome}</td>
                            <td>{set.collezione}</td>
                            <td>{set.numeroDiSerie}</td>
                            <td>
                                <img
                                    src={set.immagine}
                                    alt={set.nome}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
};

export default List;