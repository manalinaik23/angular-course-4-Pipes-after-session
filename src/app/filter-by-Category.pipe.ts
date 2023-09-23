import { Pipe, PipeTransform } from "@angular/core";
import {Course} from './model/course';
@Pipe({
    name:'filterByCategory',
    pure:false
})
export class filterByCategoryPipe implements PipeTransform{
    
    
    transform(courses:Course[] , category:string) {

       console.log("transform called");
      return courses.filter(courses=>courses.category === category);
    }


}