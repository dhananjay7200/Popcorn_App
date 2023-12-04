import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { Song } from './interface/song';
import { SongsserviceService } from './service/songsservice.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  id:number=0;
  imgurl:any;
  movieurl:any;
  song:Song= {
    pkSongsId: 0,
    songTitle: "",
    songDesc:"",
    imgUrl: "",
    vidUrl: "",
    generation: "",
    releaseDate: new Date,
    songSinger: "",
    fkCategoryId: 0,
    fkClientId: 0
  }

  songform:FormGroup; 

  constructor(private frombuilder:FormBuilder,private service:SongsserviceService,private router :Router){
    this.songform=this.frombuilder.group({
      Title:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$")]),
      Description:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$")]),
      Thumbnail:new FormControl("",[Validators.required]),
      Audio:new FormControl("",[Validators.required]),
      Category:new FormControl("",[Validators.required]),
      Date:new FormControl("",[Validators.required]),
      Singer:new FormControl("",[Validators.required]),
      Genration:new FormControl("",[Validators.required]),
    })
  }
  ngOnInit(): void {
    this.decodetoken();
  }

  getFiledetials(element:any) {
    var path =element.value ;
    var filename = path.replace(/^.*\\/, "../../assets/");
    console.log(filename);
    this.imgurl=filename;
  }

  getMovieurl(element:any) {
    var path =element.value ;
    var filename = path.replace(/^.*\\/, "../../assets/");
    console.log(filename);
    this.movieurl=filename;
  }


 
  addSong(){
    if(this.songform.valid){
      this.song.songTitle=this.songform.value.Title,
      this.song.songDesc=this.songform.value.Description,
      this.song.vidUrl=this.movieurl,
      this.song.imgUrl=this.imgurl,
      this.song.fkCategoryId=this.songform.value.Category,
      this.song.songSinger=this.songform.value.Singer,
      this.song.generation=this.songform.value.Genration,
      this.song.releaseDate=this.songform.value.Date
     this.song.fkClientId=this.id
      this.service.Addsong(this.song).subscribe({
        next:(data)=>{alert("Song Added"),this.router.navigate(['clientdashboard'])},error:(err)=>{
       alert("fail")
    }});
    }

  }

  decodetoken(){
    const localToken=sessionStorage.getItem("Token");
   const helper = new JwtHelperService();
  const userInfo=localToken!=null?helper.decodeToken(localToken):null
  const data=userInfo?{
    id:userInfo.id
  }:null
  this.id=userInfo.id
  }

  

}
