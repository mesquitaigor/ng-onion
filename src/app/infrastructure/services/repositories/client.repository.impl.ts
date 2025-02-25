import { Injectable } from '@angular/core';
import ClientRepository from '../../../domain/repositories/client.repository';
import { ApiService } from '../api.service';
import Client from '../../../domain/entities/client';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientRepositoryImpl implements ClientRepository {
  constructor(private apiService: ApiService) {}

  getAll(): Observable<Client[]> {
    return this.apiService.get<Client[]>('client')
      .pipe(map((response) => {
        return response.map((client) => {
          const newClient = new Client(client.id, client.name);
          newClient.email = client.email;
          return newClient;
        });
      }))
  }

  getById(id: number): Observable<Client | null> {
    return this.apiService.get<Client>(`client/${id}`)
      .pipe(map((response) => {
        if (response) {
          const client = new Client(response.id, response.name);
          client.email = response.email;
          return client;
        }
        return null;
      }))
  }

  create(user: Omit<Client, 'id'>): Observable<Client> {
    return this.apiService.post<Client>('client', user)
      .pipe(map((response) => {
        const client = new Client(response.id, response.name);
        client.email = response.email;
        return client
      }))
  }

  update(client: Partial<Client>): Observable<Client> {
    return this.apiService.put<Client>(`client/${client.id}`, client)
      .pipe(map((response) => {
        const client = new Client(response.id, response.name);
        client.email = response.email;
        return client;
      }))
  }

  delete(id: number): Observable<void> {
    return this.apiService.delete(`users/${id}`)
  }
}