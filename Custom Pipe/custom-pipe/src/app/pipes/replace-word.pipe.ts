import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceWord',
  standalone: true
})
export class ReplaceWordPipe implements PipeTransform {

  transform(value: string, target: string, replacement: string): string {
    if (!value) return value;
    const regex = new RegExp(target, 'g');
    return value.replace(regex, replacement)
  }

}
