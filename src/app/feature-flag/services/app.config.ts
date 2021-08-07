import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppConfig } from '../models/app-config.model';
@Injectable()
export class AppConfig {
    static settings: IAppConfig;
    constructor(@Inject('environmentName') private environmentName: string, private http: HttpClient) {}
    load() {
        const jsonFile = `assets/config/config.${this.environmentName}.json`;
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response : IAppConfig) => {
               AppConfig.settings = <IAppConfig>response;
               resolve();
            }).catch((response: any) => {
               reject(`Could not load file '${jsonFile}' environment: ${JSON.stringify(response)}`);
            });
        });
    }
}