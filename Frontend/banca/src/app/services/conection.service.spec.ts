import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ConectionService } from './conection.service';

describe('ConectionService', () => {
  let service: ConectionService;

  let httpTestingController:HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConectionService],
      imports: [
        HttpClientTestingModule 
      ],
    });
    
    service = TestBed.inject(ConectionService);
    httpTestingController=TestBed.inject(HttpTestingController);
  });

});
