let UserDetailsAutoIncremented=1000;
let CourseDetailsAutoIncremented=100;
class UserDetails{
    UserName:string;
    UserAge:number;
    UserPhoneNumber:number;
    UserId:string;
    constructor(name:string,age:number,mobileNo:number){
        UserDetailsAutoIncremented++;
        this.UserId="user" +(UserDetailsAutoIncremented).toString();
        this.UserName=name;
        this.UserAge=age;
        this.UserPhoneNumber=mobileNo;
    }
}
class CourseDetails{
    CourseName:string;
    CourseId:string;
    RequiredDays:number;
    constructor(courseName:string,days:number){
        CourseDetailsAutoIncremented++;
        this.CourseId="C" +(CourseDetailsAutoIncremented).toString();
        this.CourseName=courseName;
        this.RequiredDays=days;
    }
}
let User:Array<UserDetails>=new Array<UserDetails>();
let Course:Array<CourseDetails>= new Array<CourseDetails>();
function UserRegistration(UserId1:string){
   
    let UserName=(document.getElementById('name')as HTMLInputElement).value;
    let UserAge=(document.getElementById('age')as HTMLInputElement).value;
    let UserPhoneNumber=(document.getElementById('phoneNo')as HTMLInputElement).value;
     let index:number=User.length;
     
    if((UserName!="")&&(UserAge!="")&&(UserPhoneNumber!=""))
    {
    User.push(new UserDetails(UserName,+UserAge,+UserPhoneNumber));
    UserId1=User[index].UserId;
    alert("Successfully created and your UserID is " +UserId1);
   (document.getElementById('name')as HTMLInputElement).style.display="none";
   (document.getElementById('age')as HTMLInputElement).style.display="none";
   (document.getElementById('phoneNo')as HTMLInputElement).style.display="none";
        //userReg.style.font="";
}
else{
    alert("Please Fill the Form Fully");
}
}
function Login(){
   (document.getElementById('mainDiv')as HTMLDivElement).style.display="none";
   (document.getElementById('optionDiv')as HTMLDivElement).style.display='block';

}
function AvailableCourse(){
    (document.getElementById('mainDiv')as HTMLDivElement).style.display="none";
    (document.getElementById('optionDiv')as HTMLDivElement).style.display='none';
    (document.getElementById('courseDiv')as HTMLDivElement).style.display='block';
     
}
function EnrolledCourse(){
    (document.getElementById('optionDiv')as HTMLDivElement).style.display='none';
    for(let index=0;index<Course.length;index++){
        (document.getElementById('selectedCourses')as HTMLLabelElement).innerHTML;
    }
}
function Enroll(){
   
let seloption=(document.getElementById('courses')as HTMLSelectElement).value;
    let days=(document.getElementById('totalDays')as HTMLInputElement).value;
    if((seloption!="")&&(days!=""))
    {
        Course.push(new CourseDetails(seloption,+days));
        alert("Enrolled Successfully and the CourseId is");
        (document.getElementById('optionDiv')as HTMLDivElement).style.display="block";
         (document.getElementById('courseDiv')as HTMLDivElement).style.display='none';
        
    }
    else{
        alert("Please Enter your Details");
    }
    
}