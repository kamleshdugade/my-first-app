import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector:'.app-servers',
  selector:'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus='No server was created';
  serverName='';
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },5000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus='Server Was Created';
  }

  onUpdateServername(event: any){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}