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
export const generateCastUrl = (id: number) => `${baseUrl}movie/${id}/credits${movieAuth}${apiKey}`;
export const generateRequestTokenUrl = () => `${baseUrl}authentication/token/new?api_key=${apiKey}`;
export const generateLoginUrl = () => `${baseUrl}authentication/token/validate_with_login?api_key=${apiKey}`;
export const generateSessionUrl = () => `${baseUrl}authentication/session/new?api_key=${apiKey}`;
export const generateUserDetailsUrl = (sessionId: string) => `${baseUrl}account?api_key=${apiKey}&session_id=${sessionId}`;
export const generateDeleteSessionUrl = () => `${baseUrl}authentication/session?api_key=${apiKey}`;
// tslint:disable-next-line:max-line-length
export const generateFavoritesUrl = (sessionId: string) => `${baseUrl}account/{account_id}/favorite/movies?api_key=${apiKey}&session_id=${sessionId}&language=en-US&sort_by=created_at.asc&page=1`;






