//create element code
function createElement(tagname, attriname, attrivalue, content){
let ele=document.createElement(tagname);
ele.setAttribute(attriname, attrivalue);
ele.innerHTML=content;
return ele;
}
//line brakers code
function linebreakers(tagname){
    let ele=document.createElement(tagname)
    return ele;
}
//input element code
function inputElement(tagname, attriname, attrivalue, attriname1, attrivalue1, attriname2,attrivalue2){
    let ele=document.createElement(tagname);
    ele.setAttribute(attriname, attrivalue);
    ele.setAttribute(attriname1, attrivalue1);
    ele.setAttribute(attriname2, attrivalue2);

    return ele;
}

var fname=createElement("label","for","firstname","Firstname");
var flinebreak=linebreakers("br");
var finput=inputElement("input","type","text","id","firstname","name","firstname");
var flinebreak1=linebreakers("br");
var mname=createElement("label","for","Middlename","Middlename");
var mlinebreak=linebreakers("br");
var minput=inputElement("input","type","text","id","Middlename","name","Middlename");
var flinebreak2=linebreakers("br");
var lname=createElement("label","for","Lastname","Lastname");
var llinebreak=linebreakers("br");
var linput=inputElement("input","type","text","id","Lastname","name","Lastname");
var flinebreak3=linebreakers("br");
var ename=createElement("label","for","email","email");
var elinebreak=linebreakers("br");
var einput=inputElement("input","type","text","id","email","name","email");
var flinebreak4=linebreakers("br");
var sname=createElement("label","for","state","state");
var slinebreak=linebreakers("br");
var sinput=inputElement("input","type","text","id","state","name","state");
document.body.append(fname,flinebreak,finput,flinebreak1,mname,mlinebreak,minput,flinebreak2,lname,llinebreak,linput,flinebreak3,ename,elinebreak,einput,flinebreak4,sname,slinebreak,sinput);