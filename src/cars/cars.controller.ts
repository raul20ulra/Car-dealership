import { Body, Controller, Delete, Get ,Param, ParseIntPipe, Patch, Post,ParseUUIDPipe,ValidationPipe, UsePipes } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/createcar.dto';
import { UpdateCarDto } from './dto/updateCar.dto';
@Controller('cars')
export class CarsController {
    
    constructor(
        private readonly carsService:  CarsService
    ) {}


    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id',ParseUUIDPipe) id: string  ) {
        return this.carsService.findOneById(id);
    }

    @Post() 
    createCar(@Body() createCarDto: CreateCarDto){
        return this.carsService.create(createCarDto)    
    }

    @Patch(':id')
    updateCar(
        @Param('id',ParseUUIDPipe)id:string,
        @Body() updateCarDto:UpdateCarDto){
        return this.carsService.update(updateCarDto)
    }

    @Delete(':id')
    deleteCar(
        @Param('id',ParseUUIDPipe)id:string){
        return this.carsService.delete( id)
    }

}
