import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { GraphqlService } from 'src/app/core/services/gpraphql.service';
import { TagGroup } from 'src/app/modules/metering-devices/components/metering-devices/models/tag-group.model';

const ARCHIVES = gql`
query Equipment($equipmentId : ID!) {
  equipment {
    equipment(equipmentId: $equipmentId) {
       archives {
         code
         displayText
         tags {	
           code
           displayText
           id
           options {
             displayText
             valueBool
             valueFloat
             valueInt
           }
           valueName
         }
       } 
    }
  }
}
`;

@Injectable()
export class EquipmentArchivesService extends GraphqlService {

  constructor(public apollo: Apollo) { 
    super(apollo);
  }

  getArchives(equipmentId: number) {
    return super.watchQuery(ARCHIVES, { equipmentId })
      .pipe(
        map((result: any) => {
          return result?.data?.equipment?.equipment?.archives as TagGroup[];
        })
      );
  }
}
