export interface Movie {
    pkMovieId:number
    movieTitle: string,
    movieDesc: string,
    imgUrl: any,
    vidUrl: any,
    fkCategoryId: number,
    fkClientId: number,
}
