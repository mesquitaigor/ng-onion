import { Observable } from 'rxjs';
import Client from '../entities/client';

export default interface ClientRepository{
  getAll(): Observable<Client[]>
  getById(id: number): Observable<Client | null>
  create(client: Omit<Client, 'id'>): Observable<Client>
  update(client: Partial<Client>): Observable<Client>
  delete(id: number): Observable<void>
}