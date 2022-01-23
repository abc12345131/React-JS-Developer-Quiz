import ajax from './ajax';

//weather api
export const reqWords = (keyword) => {
    const apiUrl= `https://api.datamuse.com/words?rel_rhy=${keyword}`
    return ajax(apiUrl)}