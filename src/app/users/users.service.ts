import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class UsersService {
  private isLogginIn: boolean;
  public httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getUsers(): Observable<User[]> {
    console.log('teste');
    return this.httpClient.get<User[]>(`${environment.apiURL}/users`);
  }
}
