import { Component, signal } from '@angular/core';
import { Header } from './core/header/header';
import { Home } from './core/home/home';
import { Footer } from './core/footer/footer';
import { ConfrenceList } from './core/confrence-list/confrence-list';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Footer, ConfrenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DAS12');
}
