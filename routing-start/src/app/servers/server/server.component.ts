import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';

import {ServersService} from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // use resolver to get the data
    this.route.data
      .subscribe((data: Data) => {
        this.server = data['server'];
      });

    // this.route.params.subscribe((params: Params) => {
    //   const serverId = +params['id'];
    //   this.server = this.serversService.getServer(serverId);
    // });
  }

  onEditServer() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    });
  }
}
