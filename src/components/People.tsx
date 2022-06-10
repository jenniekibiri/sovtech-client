import { Link } from "react-router-dom";
import "./css/people.css";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Pagination } from "./Pagination";
import { imgUrl, getCharacterId } from "./helpers/constants";
import { ErrorPage } from "./helpers/ErrorPage";
import { Spinner } from "./helpers/Spinner";
import { person } from "./queries/type";

const People = () => {
    const [page, setPage] = useState(1);

    const PEOPLE_QUERY = gql`
    {
      people(page: ${page})    {
        name
        url
        planet
      }
    }
  `;

    const { loading, error, data } = useQuery(PEOPLE_QUERY);

    if (loading) return <Spinner />;

    if (error) return <ErrorPage />;

    return (
        <div className="container">
            <div className="header">
                <div className="page-title">
                    <h1 className="title">Star Wars Characters</h1>
                </div>

                <Pagination
                    selectedPage={page}
                    handlePageChanged={(page: number) => {
                        setPage(page);
                    }}
                />
            </div>
            <div className="people">
                {data.people.map((person: person) => (
                    <Link to={`/person/${person.name}`} className="person-card" key={person.name}>
                        <img
                            src={`${imgUrl}${getCharacterId(person.url)}.jpg`}
                            alt={person.name}
                            className="person-card-image"
                        />
                        <div>
                            <h4 className="person-card-name">{person.name}</h4>
                            <span className="person-card-homeworld">
                                {person.planet}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default People;
