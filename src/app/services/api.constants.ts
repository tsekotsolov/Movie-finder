
const apiKey = 'c7141429c3455427c3801180a641ad9b';
const baseUrl = 'https://api.themoviedb.org/3/';
const popular = 'discover/movie?sort_by=popularity.desc';
const kids = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const drama = 'discover/movie?with_genres=18&primary_release_year=2018';
const theaters = 'discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-02';
const authentication = '&api_key=';

export const popularUrl = `${baseUrl}${popular}${authentication}${apiKey}`;
export const theatersUrl = `${baseUrl}${theaters}${authentication}${apiKey}`;
export const kidsUrl = `${baseUrl}${kids}${authentication}${apiKey}`;
export const dramaUrl = `${baseUrl}${drama}${authentication}${apiKey}`;


