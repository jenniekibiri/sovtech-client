import { Link } from "react-router-dom";
import "./css/person.css";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ErrorPage } from "./helpers/ErrorPage";
import { Spinner } from "./helpers/Spinner";
import { getCharacterId, imgUrl } from "./helpers/constants";
import { film, person } from "./queries/type";

const Person = () => {
    const params = useParams();
    const name = params.name;
    const PERSON_QUERY = gql` 
      {
    person(name: "${name}") {
      name
      height
      mass
      url
      count
      gender
      homeworld
      birth_year
      skin_color
      hair_color
      eye_color
      planet
    films {
      title
      release_date
      director
      producer
      opening_crawl
    } 


    }
  }
    
  `;

    const { loading, error, data } = useQuery(PERSON_QUERY);
    if (loading) return <Spinner />;
    if (error) return <ErrorPage />;
    const person: person = data.person;

    return (
        <div className="container">
            <div className="person">
                <div className="person-profile">
           <div className="sidebar-header">
           <Link to="/" className="back-link">
                        <span className="back-link-icon">&lt;</span>
                        <span className="back-link-text"> Back</span>
                    </Link>

                    <img
                        src={`${imgUrl}${getCharacterId(person.url)}.jpg`}
                        alt="Luke Skywalker"
                        className="person-image"
                    />
           </div>
                    <div className="person-details">
                        <h6 className="person-name">{person.name}</h6>
                        <h4 className="person-homeworld">{person.planet}</h4>
                        <div className="person-desc">
                            <p>
                                <b>Gender</b>
                                <span>{person.gender}</span>
                            </p>
                            <p>
                                <b>Birth Year</b>
                                <span>{person.birth_year}</span>
                            </p>
                            <p>
                                <b>Height</b>
                                <span>{person.height}</span>
                            </p>
                        </div>
                        <div className="person-desc">
                            <p>
                                <b>Hair Color</b>
                                <span>{person.hair_color}</span>
                            </p>
                            <p>
                                <b>Skin Color</b>
                                <span>{person.skin_color}</span>
                            </p>
                            <p>
                                <b>Eye Color</b>
                                <span>{person.eye_color}</span>
                            </p>
                            <p>
                                <b>Mass</b>
                                <span>{person.mass}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="person-films">
                    <h2>
                        <b>Films</b>
                        <small>Appeared in {person.films.length} films</small>
                    </h2>
                    <div className="person-film-list">
                        {person.films.map((film: film) => (
                            <div className="person-film-card" key={film.title}>
                                <div>
                                    <div className="person-film-date">
                                        {film.release_date}
                                    </div>
                                    <h4 className="person-film-title">
                                        {film.title}
                                    </h4>
                                </div>
                                <div>
                                    <p className="person-film-director">
                                        Director - {film.director}
                                    </p>
                                    <p className="person-film-producer">
                                        Producer - {film.producer}
                                    </p>
                                    {/* heading */}
                                    <p className="person-opening-crawl-title text-muted">
                                        Opening Crawl:
                                    </p>
                                    <p className="person-opening-crawl">
                                        {film.opening_crawl.length > 200
                                            ? `${film.opening_crawl.substring(
                                                  0,
                                                  200
                                              )}...`
                                            : film.opening_crawl}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;
