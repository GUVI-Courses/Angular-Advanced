import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: any[] = [];
  userForm: FormGroup;
  isUpdating: boolean = false;
  currentUserid: number | null = null;
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      if (this.isUpdating && this.currentUserid !== null) {
        this.updateUser(this.currentUserid, this.userForm?.value);
      } else {
        this.addUser(this.userForm.value);
      }
    }
  }

  editUser(user: any): void {
    this.isUpdating = true;
    this.currentUserid = user.id;
    this.userForm.setValue({
      name: user.name,
      email: user.email
    })
  }

  addUser(user: any): void {
    this.userService.addUser(user).subscribe(user => {
      this.users.push(user);
    })
  }

  updateUser(id: number, user: any): void {
    this.userService.updateUser(id, user).subscribe(() => {
      this.users = this.users.map(u => u.id == id ? { ...u, ...user } : u);
      this.resetForm();
    })
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    })
  }

  resetForm() {
    this.isUpdating = false;
    this.currentUserid = null;
    this.userForm.reset();
  }
}
