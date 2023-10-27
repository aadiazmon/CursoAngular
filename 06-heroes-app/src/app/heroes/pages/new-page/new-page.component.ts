import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';

import { Hero, Publisher } from '../../interfaces/hero-interface';

import { HeroesService } from '../../services/heroes.service';

import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {
  public heroForm = new FormGroup({
    id: new FormControl('', {nonNullable:true}),
    superhero: new FormControl<string>('', {nonNullable:true}),
    publisher: new FormControl<Publisher>(Publisher.DCComics, {nonNullable:true}),
    alter_ego: new FormControl('', {nonNullable:true}),
    first_appearance: new FormControl('', {nonNullable:true}),
    characters: new FormControl('', {nonNullable:true}),
    alt_img: new FormControl('')
  });

  public publishers = [
    {id: 'DC Comics', description:'DC Comics'},
    {id: 'Marvel Comics', description:'Marvel Comics'}
  ]

  constructor(
    private heroesService:HeroesService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private matSnackBar:MatSnackBar,
    private matDialog:MatDialog
  ){}

  get currentHero():Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  ngOnInit():void {
    if (!this.router.url.includes('/edit/')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroById(id))
      )
      .subscribe(hero => {
        if (!hero) return this.router.navigate(['/heroes/list']);

        this.heroForm.reset(hero);
        return;
      });
  }

  public onSubmit():void {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero)
        .subscribe(hero => {
          this.showSnackBar('Héroe actualizado correctamente.');
        });
    } else {
      this.heroesService.addHero(this.currentHero)
        .subscribe(hero => {
          this.router.navigate(['/heroes/edit', hero.id]);
          this.showSnackBar('Héroe añadido correctamente.');
        });
    }
  }

  public onDeleteHero():void {
    if (!this.currentHero.id) throw Error('Hero\'s id is required.');

    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed()
      .pipe(
        filter((result:boolean) => result),
        switchMap(() => this.heroesService.deleteHeroById(this.currentHero.id))
      )
      .subscribe(result => {
        this.router.navigate(['/heroes/list']);

        if(result) this.showSnackBar('Se ha eliminado el héroe correctamente.');
        else this.showSnackBar('Ha habido un error al intentar eliminar al héroe.');
    });
  }

  private showSnackBar(message:string):void {
    this.matSnackBar.open(message, 'Cerrar', {
      duration: 2500
    });
  }
}
