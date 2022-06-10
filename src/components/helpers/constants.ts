
  export const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";
 export const getCharacterId = (url: string) => {
    const arr = url.split("/");
    return arr[arr.length - 2];
  };
