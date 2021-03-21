import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TagGroup } from 'src/app/modules/metering-devices/components/metering-devices/models/tag-group.model';
import { EquipmentArchivesService } from './services/equipment-archives.service';

@Component({
  selector: 'pa-meter-story-archive',
  templateUrl: './meter-story-archive.component.html',
  styleUrls: ['./meter-story-archive.component.scss'],
  providers: [EquipmentArchivesService]
})
export class MeterStoryArchiveComponent implements OnInit, OnDestroy {

  dataLoaded = false;
  equipmentId?: number;
  $load?: Subscription;
  activeLink: any;
  tagGroups: TagGroup[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private equipmentArchivesService: EquipmentArchivesService) { 
      this.equipmentId = activateRoute.snapshot.parent?.parent?.params.equipmentId;
  }

  ngOnInit(): void {
    if (this.equipmentId) {
      this.$load = this.equipmentArchivesService
      .getArchives(this.equipmentId)
      .subscribe((result) => {
        this.tagGroups = result;
        this.dataLoaded = true;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.$load) {
      this.$load.unsubscribe();
    }
  }

}
