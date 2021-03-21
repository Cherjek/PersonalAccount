import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { GraphqlService } from 'src/app/core/services/gpraphql.service';
import { Equipment } from 'src/app/modules/metering-devices/components/metering-devices/models/equipment.model';

const EQUIPMENT = gql`
query Equipment($equipmentId : ID!) {
  equipment {
    equipment(equipmentId: $equipmentId) {
      id
      name
    }
  }
}
`;

@Injectable()
export class EquipmentService extends GraphqlService {

  constructor(public apollo: Apollo) { 
    super(apollo);
  }

  getEquipment(equipmentId: number) {
    return super.watchQuery(EQUIPMENT, { equipmentId })
      .pipe(
        map((result: any) => {
          return result?.data?.equipment?.equipment as Equipment;
        })
      );
  }
}
