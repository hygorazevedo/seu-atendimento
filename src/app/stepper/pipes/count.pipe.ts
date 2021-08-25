import { Pipe, PipeTransform } from "@angular/core";
import { Step } from "../models/step.model";

@Pipe({ name: 'count' })
export class CountPipe implements PipeTransform {
    transform(values: Step[]): number {
        return values.length;
    }
}