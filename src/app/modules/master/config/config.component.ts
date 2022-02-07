import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppConfig } from 'src/app/models/appconfig';
import { MasterComponent } from '../master.component';
import { AppComponent } from 'src/app/app.component';
import { ConfigService } from 'src/app/service/app.config.service';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html'
})
export class ConfigComponent implements OnInit, OnDestroy {

  scale: number = 14;

  scales: any[] = [12, 13, 14, 15, 16];

  config: AppConfig;

  subscription: Subscription;

  constructor(public app: AppComponent, public appMain: MasterComponent, public configService: ConfigService, public primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.config = this.configService.config;
      this.subscription = this.configService.configUpdate$.subscribe(config => {
          this.config = config;
          this.scale = 14;

          this.applyScale();
      });
  }

  onConfigButtonClick(event) {
      this.appMain.configActive = !this.appMain.configActive;
      this.appMain.configClick = true;
      event.preventDefault();
  }

  incrementScale() {
      this.scale++;
      this.applyScale();
  }

  decrementScale() {
      this.scale--;
      this.applyScale();
  }

  applyScale() {
      document.documentElement.style.fontSize = this.scale + 'px';
  }

  onRippleChange(ripple) {
      this.primengConfig.ripple = ripple;
      this.configService.updateConfig({...this.config, ...{ripple}});
  }

  onInputStyleChange() {
      this.configService.updateConfig(this.config);
  }

  changeTheme(theme:string, dark:boolean){
      let themeElement = document.getElementById('theme-css');
      themeElement.setAttribute('href', 'assets/theme/' + theme + '/theme.css');
      this.configService.updateConfig({...this.config, ...{theme, dark}});
  }

  ngOnDestroy() {
      if (this.subscription) {
          this.subscription.unsubscribe();
      }
  }
}