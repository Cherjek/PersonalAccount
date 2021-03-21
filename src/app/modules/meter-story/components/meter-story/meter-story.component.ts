import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApplicationService } from 'src/app/common/services/forms/application.service';
import { Equipment } from 'src/app/modules/metering-devices/components/metering-devices/models/equipment.model';
import { EquipmentService } from './services/equipment.service';

@Component({
  selector: 'pa-meter-story',
  templateUrl: './meter-story.component.html',
  styleUrls: ['./meter-story.component.scss'],
  providers: [EquipmentService]
})
export class MeterStoryComponent implements OnInit, OnDestroy, AfterViewInit {

  tabs = [
    {
      code: 'archive',
      name: 'Архив данных'
    },
    {
      code: 'data',
      name: 'Текущие данные'
    },
    {
      code: 'journals',
      name: 'Журналы'
    }
  ];
  equipmentId?: number;
  equipment?: Equipment;
  $load?: Subscription;

  @ViewChild('header') public header!: TemplateRef<any>;

  constructor(
    private activateRoute: ActivatedRoute,
    private applicationService: ApplicationService,
    private equipmentService: EquipmentService
  ) { 
    this.equipmentId = activateRoute.snapshot.params.equipmentId;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.$load) {
      this.$load.unsubscribe();
    }
  }

  ngAfterViewInit() {
    if (this.equipmentId) {
      this.$load = this.equipmentService
      .getEquipment(this.equipmentId)
      .subscribe((res) => {
        this.equipment = res;
        this.applicationService.config.headerTemplate = this.header;
      });
    }
  }
}
