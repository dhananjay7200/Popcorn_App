import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  video:any="../../assets/BB_1856ad5e-74ce-4389-862c-eba0b201f6dc_preview.mp4";

  play(link:string){
    this.video=link;
    console.log("video");
    window.scroll(0,0);
  }

  OpenModal1(){
    const ModalElement = document.getElementById("exampleModal1")
    if (ModalElement!=null){
      ModalElement.style.display = 'block'
    }
  }

  OpenModal2(){
    const ModalElement = document.getElementById("exampleModal2")
    if (ModalElement!=null){
      ModalElement.style.display = 'block'
    }
  }

  OpenModal3(){
    const ModalElement = document.getElementById("exampleModal3")
    if (ModalElement!=null){
      ModalElement.style.display = 'block'
      
    }
  }


  CloseModal1(){
    const ModalElement = document.getElementById("exampleModal1")
    if (ModalElement!=null){
      ModalElement.style.display = 'none'
    }
  }

  CloseModal2(){
    const ModalElement = document.getElementById("exampleModal2")
    if (ModalElement!=null){
      ModalElement.style.display = 'none'
    }
  }

  CloseModal3(){
    const ModalElement = document.getElementById("exampleModal3")
    if (ModalElement!=null){
      ModalElement.style.visibility = 'hidden'
    }
  }
  

}
