import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { GraphqlService } from 'src/app/core/services/gpraphql.service';
import { Node } from '../models/node.model';

const NODES = gql`
{
  equipment {
    nodes {
      id
      equipment {
        id
        name
        tileRows {
          displayText
          tag {
            code
            displayText
            id
            name
            valueName
            value {
              quality
              timestamp
              valueBool
              valueData
              valueFloat
              valueInt
            }
            options {
              displayText
              valueBool
              valueFloat
              valueInt
            }
          }
        }
        type {
          code
          displayText
          name
        }
      }
      name
    }
  }
}
`;

@Injectable()
export class MeteringDevicesService extends GraphqlService {

  constructor(public apollo: Apollo) { 
    super(apollo);
  }

  getMeteringDevices() {
    return super.watchQuery(NODES)
      .pipe(
        map((result: any) => {
          return result?.data?.equipment?.nodes as Node[];
        })
      );
  }
}
