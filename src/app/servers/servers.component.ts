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
  serverName='TestServer';
  username='';
  serverCreated=false;
  servers=['Testserver', 'Testserver2'];

  constructor() {

    setTimeout(()=>{
      this.allowNewServer=true;
    },5000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server Was Created and name is ' + this.serverName;
  }

  onUpdateServername(event: any){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
