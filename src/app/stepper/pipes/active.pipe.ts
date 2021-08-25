import { Pipe, PipeTransform } from "@angular/core";
import { Step } from "../models/step.model";

@Pipe({ name: 'active' })
export class ActivePipe implements PipeTransform {
    transform(values: Step[]): Step[] {
        return values.filter(step => step.active);
    }
}