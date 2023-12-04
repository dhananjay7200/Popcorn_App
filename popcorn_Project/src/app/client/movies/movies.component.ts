import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { MovieserviceService } from './service/movieservice.service';
import { Movie } from './interface/movie';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  id:number=0;
  imgurl:any;
  movieurl:any;


  movie:Movie={
    pkMovieId:0,
    movieTitle: "",
    movieDesc: "",
    imgUrl: "",
    vidUrl: "",
    fkCategoryId: 0,
    fkClientId: 0,
  }

 

  movieform:FormGroup; 

  constructor(private frombuilder:FormBuilder,private service:MovieserviceService,private router :Router){
    this.movieform=this.frombuilder.group({
      Title:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$")]),
      Description:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$")]),
      Thumbnail:new FormControl("",[Validators.required]),
      Video:new FormControl("",[Validators.required]),
      Category:new FormControl("",[Validators.required]),
    })
  }
  ngOnInit(): void {
    this.decodetoken()
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

  addMovie(){
    if(this.movieform.valid){
      this.movie.movieTitle=this.movieform.value.Title,
      this.movie.movieDesc=this.movieform.value.Description,
      this.movie.vidUrl=this.movieurl,
      this.movie.imgUrl=this.imgurl,
      this.movie.fkCategoryId=this.movieform.value.Category,
     this.movie.fkClientId=this.id
      this.service.Addmovie(this.movie).subscribe({
        next:(data)=>{ /*this.router.navigate([''])*/ alert("Movie Added")},error:(err)=>{
       alert("Movie Already Present!")
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
