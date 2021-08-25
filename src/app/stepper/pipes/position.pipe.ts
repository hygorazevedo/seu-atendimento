import { Pipe, PipeTransform } from "@angular/core";
import { Step } from "../models/step.model";

@Pipe({ name: 'position' })
export class PositionPipe implements PipeTransform {
    transform(id: number, values: Step[]): number {
        if (values?.length > 0) {
            return values.findIndex(step => step.id === id) + 1;
        }

        return 0;
    }
}