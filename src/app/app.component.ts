import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Distributor, distributors } from './distributors';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  distributors: Distributor[] = [];
  ngAfterViewInit(): void {
    this.distributors = distributors;
  }
  search(e: any) {
    const value = e.target.value;
    this.distributors = distributors.filter((dist) =>
      dist.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
  }
}
