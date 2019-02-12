import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ServersService} from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    const serverId = +this.router.snapshot.params['id'];
    this.server = this.serversService.getServer(serverId);
  }

}
