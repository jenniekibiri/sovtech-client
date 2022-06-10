export type film = {
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
};
export type person = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    eye_color: string;
    birth_year: string;
    skin_color:string;
    planet: string;
    films: film[];
    gender:string;
      

    url: string;
}

