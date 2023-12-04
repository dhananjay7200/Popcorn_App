import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Series } from './interface/series';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SeriesserviceService } from './service/seriesservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  id:number=0;
  imgurl:any;
  movieurl:any;

  series:Series= {
    pkSeriesId: 0,
    seriesTitle: "",
    seriesDesc: "",
    imgUrl: "",
    vidUrl: "",
    country:"",
    fkCategoryId: 0,
    fkClientId: 0
  }

  seriesform:FormGroup; 

  constructor(private frombuilder:FormBuilder,private service:SeriesserviceService,private router :Router){
    this.seriesform=this.frombuilder.group({
      Title:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$")]),
      Description:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$")]),
      Thumbnail:new FormControl("",[Validators.required]),
      Video:new FormControl("",[Validators.required]),
      Category:new FormControl("",[Validators.required]),
      Country:new FormControl("",[Validators.required]),
    })
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

  ngOnInit(): void {
    this.decodetoken();
  }
 
  addSeries(){
    if(this.seriesform.valid){
      this.series.seriesTitle=this.seriesform.value.Title,
      this.series.seriesDesc=this.seriesform.value.Description,
      this.series.vidUrl=this.movieurl,
      this.series.imgUrl=this.imgurl,
      this.series.fkCategoryId=this.seriesform.value.Category,
     this.series.fkClientId=this.id
      this.service.AddSeries(this.series).subscribe({
        next:(data)=>{alert("Series Added"),this.router.navigate(['clientdashboard'])},error:(err)=>{
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
