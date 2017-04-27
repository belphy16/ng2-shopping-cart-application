import { LoginComponent } from './my-new-component.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService, User} from '../my-new-service.service';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

let MockProduct: User = <User>{email: "vasanths@live.in", password: '123'};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthenticationService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
          deps: [ MockBackend, BaseRequestOptions ]
        }
      ],
      declarations: [
        LoginComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.get(AuthenticationService);
  });




 describe('login', () => {

var params = {
    'email': 'vasanths@live.in', 
    'password': '123'
  };



    it('should call the login method inside the component', () => {
      spyOn(component, 'login');
      spyOn(authService, 'login');
      component.login();

      expect(component.login).toHaveBeenCalled();
      expect(component.login).toHaveBeenCalledTimes(1);
    });

it('should call the login method inside the AuthenticationService', () => {
      spyOn(authService, 'login');
      authService.login(params);

      expect(authService.login).toHaveBeenCalled();
      expect(authService.login).toHaveBeenCalledTimes(1);
    });

    it('should call the login method inside the AuthenticationService and returns true', () => {
      spyOn(authService, 'login').and.callFake(function(params) 
      {
        return 1001;
      });

     component.login();
      expect(authService.login).toEqual(1001);

    });

});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
