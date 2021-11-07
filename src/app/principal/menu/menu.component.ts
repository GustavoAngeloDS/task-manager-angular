import { Component, OnInit } from '@angular/core';
import { Quadro } from 'src/app/shared/models/quadro.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public quadros!: Quadro[];

  constructor(private quadroService: MenuService) { }

  ngOnInit(): void {
    this.buscarQuadrosAtivos();
  }

  buscarQuadrosAtivos(): void{
    this.quadroService.findAll().subscribe(
      (quadros: Quadro[]) => {
        this.quadros = quadros;
      },
      (error) => {
        alert(error);
      }
    )
  }
}
