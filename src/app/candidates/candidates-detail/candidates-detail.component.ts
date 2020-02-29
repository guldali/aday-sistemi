import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import { Candidate } from '../candidates';

@Component({
  selector: 'app-candidates-detail',
  templateUrl: './candidates-detail.component.html',
  styleUrls: ['./candidates-detail.component.css'],
  providers: [CandidateService]
})
export class CandidatesDetailComponent implements OnInit {

  constructor(private candidateService: CandidateService, private activatedRoute: ActivatedRoute) { }
  candidate: Candidate;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getCandidatesById(params["candidatesId"])
    })
  }

  getCandidatesById(candidatesId) {
    this.candidateService.getCandidatesById(candidatesId).subscribe(data => {
      this.candidate = data;

    })

  }

}
