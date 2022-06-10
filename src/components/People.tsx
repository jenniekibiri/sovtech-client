import { Link } from "react-router-dom";
import "./css/people.css";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Pagination } from "./Pagination";

const People = () => {
  const [page, setPage] = useState(1);

  const PEOPLE_QUERY = gql`
    {
      people(page: ${page})    {
        name
        height
        mass
        gender
        url
        homeworld
        planet
      }
    }
  `;

  const { loading, error, data } = useQuery(PEOPLE_QUERY);

  if (loading)
    return (
      <div className="spinner">
        <div className="spinner-grow text-primary" role="status"></div>
        <div className="sr-only  text-white">
          <span>Loading please wait </span>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="text-white error">
        <span> Something went wrong :( </span>
        <span className="text-muted">Please try again</span>
      </div>
    );

  const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";
  const getCharacterId = (url: string) => {
    const arr = url.split("/");
    return arr[arr.length - 2];
  };

  return (
    <div className="container">
      <div className="header">
        <div className="page-title">
          <h1 className="title">Star Wars Characters</h1>
          {/* <span className="subtitle">Showing 1 of 20 storm troopers</span> */}
        </div>

        <Pagination
          className="pagination"
          selectedPage={page}
          handlePageChanged={(page: number) => {
            setPage(page);
          }}
        />
      </div>
      <div className="people">
        {data.people.map((person: any) => (
          <Link to={`/person/${person.name}`} className="person-card">
            <img
              src={`${imgUrl}${getCharacterId(person.url)}.jpg`}
              alt={person.name}
              className="person-card-image"
            />
            <div>
              <h4 className="person-card-name">{person.name}</h4>
              <span className='person-card-homeworld'>{person.planet}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default People;
