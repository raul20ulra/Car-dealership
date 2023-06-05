import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid'
import { Car } from './interface/car.interface';
@Injectable()
export class CarsService {

    private cars:Car[] = [
        { 
            id:uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id:uuid(),
            brand: 'Honda',
            model: 'Civic'
        },        {
            id:uuid(),
            brand: 'Jeep',
            model: 'Cherokke'
        },

    ];


    findAll(){  
        return this.cars
    }

    findOneById(id:string ){
        const car= this.cars.find(car=>car.id===id);
    
        if(!car) throw new NotFoundException('car with id not found');
    
        return car
    
    
    }
}
