import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {

  ID = 1;
  status = 'offline';

  getServerStatus() {
    return this.status
  }
}
