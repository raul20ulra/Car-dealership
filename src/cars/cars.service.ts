import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid'
import { Car } from './interface/car.interface';
import { CreateCarDto,UpdateCarDto } from './dto';

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

    create (createCarDto: CreateCarDto){
        const car: Car = {
            id: uuid(),
            brand: createCarDto.brand,
            model: createCarDto.model
        }
        this.cars.push(car);
        return car
    }
    update (updateCarDto: UpdateCarDto){
        const car: Car = {
            id: uuid(),
            brand: updateCarDto.brand,
            model: updateCarDto.model
        }
        this.cars.push(car);
        return car
    }
    delete(id:string){
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }
 
    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars;
    }
}
