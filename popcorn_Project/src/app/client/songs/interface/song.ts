export interface Song {
  pkSongsId: number,
  songTitle: string,
  songDesc: string,
  imgUrl: string,
  vidUrl: string,
  generation: string,
  releaseDate: Date,
  songSinger: string,
  fkCategoryId: number,
  fkClientId: number
}
