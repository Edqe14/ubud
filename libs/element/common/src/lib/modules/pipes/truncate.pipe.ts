import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate', // nama pipe sama seperti selector cuman ini lebih ke nama (camelCase)
})
export class TruncatePipe implements PipeTransform {
    public transform(value: string, len = 100): any {
        if (value.length <= len) return value;
      
        return `${value.slice(0, len)}...`
    }
}
