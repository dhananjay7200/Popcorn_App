export interface Series {
  pkSeriesId: number,
  seriesTitle: string,
  seriesDesc: string,
  imgUrl: string,
  vidUrl: string,
  country:string,
  fkCategoryId: number,
  fkClientId: number
}
