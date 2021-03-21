import { Component, OnDestroy, OnInit } from '@angular/core';
import { MeteringDevicesService } from './services/metering-devices.service';
import { Node } from './models/node.model';
import { Equipment } from './models/equipment.model';
import { EquipmentType } from './models/equipment-type.model';
import { FormControl } from '@angular/forms';
import { Tag } from './models/tag.model';
import { MatDialog } from '@angular/material/dialog';
import { MeteringDevicesCreateComponent } from '../metering-devices-create/metering-devices-create.component';
import { Subscription } from 'rxjs';
import { ApplicationService } from 'src/app/common/services/forms/application.service';
import { AppLocalization } from 'src/app/core/locale';

type groupMeterType = EquipmentType & { equipments?: Equipment[] };
type equipmentTag = Equipment & { tags?: Tag[] };
type accordionView = {
  [key: number]: boolean;
};

const sampleTag = {
  code: 'Code',
  displayText: 'Display Text',
  id: 1,
  valueName: 'Value name',
  value: {
    quality: 'string',
    timestamp: new Date(),
    valueBool: true,
    valueData: 'string',
    valueFloat: 1,
    valueInt: 1,
  },
};
@Component({
  selector: 'app-metering-devices',
  templateUrl: './metering-devices.component.html',
  styleUrls: ['./metering-devices.component.scss'],
  providers: [MeteringDevicesService],
})
export class MeteringDevicesComponent implements OnInit, OnDestroy {
  private $subs?: Subscription;
  locale = AppLocalization.meterDevices;
  groupViewControl = new FormControl();
  groupView = [
    { id: 1, name: AppLocalization.metering.ViewAllList },
    { id: 2, name: AppLocalization.metering.ViewByType },
  ];
  nodes?: Node[];
  emptyEquipment = [
    { title: 'F.A.Q' },
    {
      title: AppLocalization.meterDevices.AnyQuestions,
      content: AppLocalization.meterDevices.WriteUs,
    },
  ];
  equipments?: equipmentTag[] = [
    {
      id: 1,
      name: 'Name',
      type: {
        code: 'Type code',
        displayText: 'Type display text',
        name: 'Type name',
      },
      archives: [
        {
          code: 'string',
          displayText: 'string',
          tags: [sampleTag, sampleTag],
        },
      ],
      current: [
        {
          code: 'string',
          displayText: 'string',
          tags: [sampleTag, sampleTag],
        },
      ],
      tileRows: [
        {
          displayText: 'string',
          tag: sampleTag,
        },
        {
          displayText: 'string',
          tag: sampleTag,
        },
      ],
      tags: [sampleTag, sampleTag],
    },
  ];
  groups?: groupMeterType[];
  tabs: any[] = [{ id: -1, name: AppLocalization.metering.AllDevices }];
  activeLink = -1;
  showMoreTags: accordionView = {};

  constructor(
    public dialog: MatDialog,
    private applicationService: ApplicationService,
    private meteringDevicesService: MeteringDevicesService
  ) {
    this.groupViewControl.setValue(this.groupView[0]);

    if (applicationService.config != null) {
      applicationService.config.headerText = this.locale.MeteringDevices;
    }
  }

  ngOnInit(): void {
    this.$subs = this.meteringDevicesService.getMeteringDevices().subscribe(
      (nodes) => {
        if (nodes) {
          this.nodes = nodes;
          if (nodes.length) {
            if (nodes.length > 1) {
              this.tabs = [
                ...this.tabs,
                ...nodes.map((x) => ({ id: x.id, name: x.name })),
              ];
            }
            this.createEquipments();
          }
        }
      },
      (error) => {
        throw new Error(error);
      }
    );
  }

  ngOnDestroy() {
    this.$subs?.unsubscribe();
  }

  createEquipments() {
    let equipments: equipmentTag[] = [];
    const nodes =
      this.activeLink > 0
        ? this.nodes?.filter((node) => node.id === this.activeLink)
        : this.nodes;
    nodes?.forEach((x) => {
      if (x.equipment) {
        equipments = [
          ...equipments,
          ...(x.equipment || []).map((eq) => ({ ...eq })),
        ];
      }
    });
    this.equipments = equipments;
    this.createGroups();
  }

  createGroups() {
    this.groups = [];
    this.equipments?.forEach((eq) => {
      const group = this.groups?.find((grt) => grt.code === eq.type?.code);
      if (group == null) {
        const gr: groupMeterType = {
          ...{ code: eq.type?.code, displayText: eq.type?.displayText },
          ...{ equipments: [{ ...eq }] },
        };
        this.groups?.push(gr);
      } else {
        group.equipments?.push({ ...eq });
      }
    });
  }

  nodeClick() {
    this.createEquipments();
  }

  addMeter() {
    this.dialog.open(MeteringDevicesCreateComponent, {
      data: {
        animal: 'panda',
      },
      // maxWidth: 630,
      // minWidth: 630,
      maxWidth: '400px',
      panelClass: 'pa-dialog-panel',
      height: '95%',
      position: {
        right: '0',
      },
    });
  }
}
