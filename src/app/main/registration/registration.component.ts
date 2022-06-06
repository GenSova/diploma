import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private authService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      password1: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required])
    });
  }

  registrationProcess(){
    if (this.formGroup.valid) {
      this.authService.register(this.formGroup.value).subscribe(result => {
        alert('Вы успешно зарегистрировались :)');
        this.router.navigate(['/'])
          .then(() => {
            window.location.reload();
          });
      });
    }
  }
}
