const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = `${year}-${month}-${day}`;


const apiKey = 'c7141429c3455427c3801180a641ad9b';
const baseUrl = 'https://api.themoviedb.org/3/';
export const imageBaseUrl = 'http://image.tmdb.org/t/p/w500';
const popular = 'discover/movie?sort_by=popularity.desc';
const kids = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const drama = `discover/movie?with_genres=18&primary_release_year=${year}`;
const theaters = `discover/movie?primary_release_date.gte=${date}&primary_release_date.lte=${date}`;
const authentication = '&api_key=';
const movieAuth = '?api_key=';


export const popularUrl = `${baseUrl}${popular}${authentication}${apiKey}`;
export const theatersUrl = `${baseUrl}${theaters}${authentication}${apiKey}`;
export const kidsUrl = `${baseUrl}${kids}${authentication}${apiKey}`;
export const dramaUrl = `${baseUrl}${drama}${authentication}${apiKey}`;
export const generateMovieUrl = (id: number) => `${baseUrl}movie/${id}${movieAuth}${apiKey}`;
export const generateSearchUrl = (query: string) => `${baseUrl}search/movie?query=${query}${authentication}${apiKey}`;


