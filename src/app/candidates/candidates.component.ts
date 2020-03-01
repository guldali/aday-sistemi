import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Candidate } from './candidates';
import { CandidateService } from '../services/candidate.service';


@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
  providers: [CandidateService]
})
export class CandidatesComponent implements OnInit {

  constructor(private candidateService: CandidateService) { }
  candidates: Candidate[];
  title="Aday Bilgileri";


  ngOnInit() {
    this.candidateService.getCandidates().subscribe(data => {
      this.candidates = data;
    });


  }


}
