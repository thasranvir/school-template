import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	loading = false;
	error: string | null = null;
	form = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]]
	});

	constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

	submit() {
		this.error = null;
		if (this.form.invalid) return;
		this.loading = true;
		this.http.post<any>('/api/auth/login', this.form.value).subscribe({
			next: res => {
				localStorage.setItem('token', res.token);
				this.router.navigateByUrl('/');
			},
			error: err => {
				this.error = err?.error?.error || 'Login failed';
				this.loading = false;
			}
		});
	}
}