import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class SleepingGuard implements CanActivate {

    canActivate(): boolean {
        return true;
    }
}