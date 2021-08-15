import { Component, OnInit } from '@angular/core';
import { PregnancyService } from 'src/app/services/pregnancy.service';
import { Pregnancy } from 'src/app/models/pregnancy';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-pregnancy-list',
  templateUrl: './pregnancy-list.component.html',
  styleUrls: ['./pregnancy-list.component.css'],
})
export class PregnancyListComponent implements OnInit {

  pregnancies: Pregnancy[] | any = [];
  selected: Pregnancy | null = null;
  selectedAddPregnancy: Pregnancy | null = null;
  editPregnancy: Pregnancy | null = null;
  newPregnancy: Pregnancy = new Pregnancy();
  id: number = 0;
  datePipe: any;

  getPregnancyCount(): Number {
    return this.pregnancies.length;
  }

  displayPregnancy(pregnancy: any): void {
    this.selected = pregnancy;
  }

  displayTable(): void {
    this.selected = null;
    this.selectedAddPregnancy = null;
  }

  constructor(private pregnancyService: PregnancyService) {}

  ngOnInit(): void {
    this.loadPregnancies();
  }

  loadPregnancies() {
    this.pregnancyService.index().subscribe(
      pregnancies => {
        this.pregnancies = pregnancies;
      },
      error => {
        console.error('PregnancyListComponent.loadPregnancies(): error getting pregnancy list');
        console.error(error);
      }
    );
  }

  displayAddPregnancyForm(pregnancy: Pregnancy) : void {
    this.selectedAddPregnancy = pregnancy;
  }

  addPregnancy(): void {
    this.pregnancyService.create(this.newPregnancy).subscribe(
      data => {
        this.loadPregnancies();
      },
      error => {
        console.log(error);
        console.log("Error creating pregnancy through service.")
      }
    );
    this.newPregnancy = new Pregnancy();
  }

  setEditPregnancy(): void {
    this.editPregnancy = Object.assign({}, this.selected);
  }

  updatePregnancy(pregnancy : Pregnancy) {
    this.pregnancyService.update(pregnancy).subscribe(
      data => {
        this.loadPregnancies();
      }, error => {
        console.error('PregnancyListComponent.udpatePregnancy(): error updating pregnancy');
        throwError(error);
      }
    );
    this.editPregnancy = null;
    this.selected = null;
  }

  deletePregnancy(id: number){
    this.pregnancyService.destroy(id).subscribe(
      data => {
        this.loadPregnancies();
      },
      error => {
        console.log(error);
        console.log("error deleting Pregnancy through service")
      }
    );
    this.displayTable();
  }

}
