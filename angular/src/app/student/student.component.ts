import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{ Student} from '../models/student'
import { ApiResponse } from './../models/response';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students:Student[]=[]
  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
    this.httpClient.get("http://localhost:3000/students").subscribe(response=>{
      this.students=response as Student[];
      alert('Done')

    },error=>{
      alert("Can't get data from DataBase")
    })
  }
  addStudent(fName:string,lName:string,age:number,mobile:number,email:string){
    let student:Student=new Student()
    student.FirstName=fName;
    student.LastName=lName;
    student.Age=age;
    student.Mobile=mobile;
    student.Email=email;
    this.httpClient.post("http://localhost:3000/students",student).subscribe(response=>{
      // student.ID=(response as ApiResponse).Data as number;
      this.students.push(student)
    },error=>{
      alert('Error occured, Enter all fields')
    })
    

  }
  delete(index:number){
    let student=this.students[index]
    this.httpClient.delete(`http://localhost:3000/students/${student.Email}`).subscribe(response=>{
      this.students.splice(index,1);
      console.log(student)
    })
  }
  update(index:number){
    let student=this.students[index];
    let fName=student.FirstName;
    let lName=student.LastName;
    let age=student.Age;
    let mobile=student.Mobile;
    this.httpClient.put(`http://localhost:3000/students/Email=${student.Email}`,student).subscribe(response=>{
      console.log(JSON.stringify(student));
      console.log(fName,lName)
      alert("Updated")
      
    })
  }
}
