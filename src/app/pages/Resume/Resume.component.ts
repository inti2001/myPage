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
    const urlArchivo = '../../../assets/Inti_Martinez_Resume.pdf';

    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = urlArchivo;
    enlaceDescarga.download = 'Inti_Martinez_Resume.pdf';
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();

    document.body.removeChild(enlaceDescarga);
  }
}
