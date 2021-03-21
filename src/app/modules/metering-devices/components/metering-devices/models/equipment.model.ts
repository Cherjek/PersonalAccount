import { EquipmentType } from './equipment-type.model';
import { TagGroup } from './tag-group.model';
import { TileRow } from './tile-row.model';

export class Equipment {
  id?: number;
  name?: string;
  type?: EquipmentType;
  archives?: TagGroup[];
  current?: TagGroup[];
  tileRows?: TileRow[];
  constructor(options: {
    id?: number;
    name?: string;    
    type?: EquipmentType;
    archives?: TagGroup[];
    current?: TagGroup[];
    tileRows?: TileRow[];
  }) {
    this.id = options.id;
    this.name = options.name;
    this.type = options.type;
    this.archives = options.archives;
    this.current = options.current;
    this.tileRows = options.tileRows;
  }
}
