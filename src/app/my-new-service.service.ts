import { Injectable } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


export class User {
  constructor(
    public email: string,
    public password: string) { }
}
var users = [
  new User('vasanths@live.in','123'),
  new User('vasanth@gmail.com','123')
];

@Injectable()
export class AuthenticationService {

constructor(
    private router: Router){}
 
  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['Login']);
  }

login(user){
    console.log("user",JSON.stringify(user));
    console.log("user",user);
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this.router.navigate(['home']);      
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this.router.navigate(['login']);
    }
  } 
}
