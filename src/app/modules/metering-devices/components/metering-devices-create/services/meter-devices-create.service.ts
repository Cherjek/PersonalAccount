import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { GraphqlService } from 'src/app/core/services/gpraphql.service';
import { AddNodeStatus } from '../models/add-node-status.model';
import { MeterNewReq } from '../models/meter-new-req.model';

const METER_POST = gql`
  mutation addNode($accountNo: String!, $meterNo: String!, $files: [AttachmentInput]) {
    equipment {
      addNode(accountNo: $accountNo, meterNo: $meterNo, files: $files) {
        status
      }
    }
  }`;
  
@Injectable()
export class MeterDevicesCreateService extends GraphqlService {

  constructor(public apollo: Apollo) { 
    super(apollo);
  }

  add(variables: MeterNewReq) {
    return super.mutate(METER_POST, variables).pipe(
      map((result: any) => {
        const addResult = result?.data?.equipment?.addNode;
        // const val = {
        //   status: reg.status,
        //   customer: reg.customer ? new Customer(reg.customer) : undefined,
        // };
        return addResult.status as AddNodeStatus;
      })
    );
  }
}
