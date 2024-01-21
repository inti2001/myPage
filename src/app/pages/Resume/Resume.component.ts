import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Resume',
  templateUrl: './Resume.component.html',
  styleUrls: ['./Resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume:boolean = true;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  showAbout(){
    this.resume = false;
  }

  showResume(){
    this.resume = true;
  }

  redireccionarA(path:string){
    console.log(path)
    this.router.navigate(['/' + path])
  }

  downloadCV(){
    console.log("descargar CV");
  }
}
