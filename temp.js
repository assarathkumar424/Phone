

function phone(num){
    this.num=num;
}

phone.prototype.call=function(){ 
        var tonum=getNumber("enter number to which you want to call");
        alert('calling from '+this.num+' to '+tonum);   
}

phone.prototype.sms=function(){
        var tonum=getNumber("enter number to which you want to message");
        var msg=prompt("enter the message");
        alert('messaging from '+this.num+' to '+tonum+" as=> "+msg);   
}

function smart(num,email){
    this.num=num;
    this.email=email;
}

smart.prototype=Object.create(phone.prototype);

smart.prototype.mail=function(){  
    var tomail=getEmail("enter the mail id to which you want to mail");
    var msg=prompt("enter the message");
    alert('mailing from '+this.email+' to '+tomail+" as=> "+msg);
}

function android(num,email){
    this.num=num;
    this.email=email;
}

function ios(num,email){
    this.num=num;
    this.email=email;
}

function windows(num,email){
    this.num=num;
    this.email=email;
}

android.prototype=Object.create(smart.prototype);
ios.prototype=Object.create(smart.prototype);
windows.prototype=Object.create(smart.prototype);



android.prototype.googleduo=function(){  
    var tomail=getEmail("enter the mail id to which you want to make video call on googleduo");
    alert('video calling via googleduo from '+this.email+' to '+tomail);
}

ios.prototype.facetime=function(){  
    var tomail=getEmail("enter the mail id to which you want to make video call");
    alert('video calling facetime from '+this.email+' to '+tomail);
}

windows.prototype.skype=function(){  
    var tomail=getEmail("enter the mail id to which you want to make video call");
    alert('video calling  skype from '+this.email+' to '+tomail);
}

function androidd(){
    var num=getNumber("enter the number");
    var email=getEmail("enter the mail");
    androidobj=new android(num,email);
    var arr=[];
    arr[0]="call";
    arr[1]="sms";
    arr[2]="mail";
    arr[3]="googleduo";
    createbutton(arr,"androidobj.");  
}

function ioss(){
    var num=getNumber("enter the number");
    var email=getEmail("enter the mail");
    iosobj=new ios(num,email);
    var arr=[];
    arr[0]="call";
    arr[1]="sms";
    arr[2]="mail";
    arr[3]="facetime";
    createbutton(arr,"iosobj.");  
}

function windowss(){
    var num=getNumber("enter the number");
    var email=getEmail("enter the mail");
    windowsobj=new windows(num,email);;
    var arr=[];
    arr[0]="call";
    arr[1]="sms";
    arr[2]="mail";
    arr[3]="skype";
    createbutton(arr,"windowsobj.");
}

function basic(num){
    this.num=num;
}
basic.prototype=Object.create(phone.prototype);

function single(num){
    this.num=num;
}

function duo(num1,num2){
    this.num1=num1;
    this.num2=num2;
}

single.prototype=Object.create(basic.prototype);
duo.prototype=Object.create(basic.prototype);

duo.prototype.callselect=function(){
    while(true){
    var sim=prompt("enter the sim on which you want to call \"sim1\" or \"sim2\"");
    if(sim.toLowerCase()==="sim1"){
        basobj=new basic(this.num1);
        basobj.call();
        break;
    }
    else if(sim.toLowerCase()==="sim2"){
        basobj=new basic(this.num2);
        basobj.call();
        break;
    }
    else{
        alert('enter the correct sim');
    }
    }
}

duo.prototype.smsselect=function(){
    while(true){
    var sim=prompt("enter the sim on which you want to call \"sim1\" or \"sim2\"");
    if(sim.toLowerCase()==="sim1"){
        basobj=new basic(this.num1);
        basobj.sms();
        break;
    }
    else if(sim.toLowerCase()==="sim2"){
        basobj=new basic(this.num2);
        basobj.sms();
        break;
    }
    else{
        alert('enter the correct sim');
    }
    }
}

function singlee(){
    var num=getNumber("enter the number");
    singleobj=new single(num);
    var arr=[];
    arr[0]="call";
    arr[1]="sms";
    createbutton(arr,"singleobj.");  
}

function duoo(){
    var num1=getNumber("enter the first number");
    var num2=getNumber("enter the second number");
    duoobj=new duo(num1,num2);
    var arr=[];
    arr[0]="callselect";
    arr[1]="smsselect";   
    createbutton(arr,"duoobj.");   
}

function createbutton(arr,objstr){
    document.getElementById("detail").innerHTML="";
    for(var i=0;i<arr.length;i++){
        var button=document.createElement("input");
        button.type="button";
        button.value=arr[i];
        button.setAttribute("onclick",objstr+arr[i]+"()");
        document.getElementById("detail").appendChild(button);
        document.getElementById("detail").appendChild(document.createElement("br"));
        document.getElementById("detail").appendChild(document.createElement("br"));
    }
}

function checknumber(num){
    var pat=/[0-9]{10}$/;
    return (pat.test(num));
}

function checkmail(mail){
    var pat=/[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,3}$/;
    return (pat.test(mail));
}
function getNumber(s){
    while(true){
        var num=prompt(s);
        if(checknumber(num)){
            return num;
        }
        alert('enter correct number');
    }
}

function getEmail(s){
    while(true){
        var mail=prompt(s);
        if(checkmail(mail)){
            return mail;
        }
        alert('enter correct mail');
    }
}
