import { Equipment } from './equipment.model';

export class Node {
  equipment?: Equipment[];
  id?: number;
  name?: string;
  properties?: any[];// NodeProperty[];
  constructor(options: {
    equipment?: Equipment[];
    id?: number;
    name?: string;
    properties?: any[];// NodeProperty[];
  }) {
    this.id = options.id;
    this.name = options.name;
    this.equipment = options.equipment;
    this.properties = options.properties;
  }
}
