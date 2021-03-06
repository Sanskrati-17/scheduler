const date=new Date();

const rendercalender=()=>{
    date.setDate(1);

console.log(date.getDay());

const monthDays=document.querySelector('.days');

const lastDay=new Date(date.getFullYear(),
date.getMonth()+1,0).getDate();

const prevLastDay=new Date(date.getFullYear(),
date.getMonth(),0).getDate();

const lastDayIndex=new Date(date.getFullYear(),
date.getMonth()+1,0).getDay();

const nextDays=7-lastDayIndex+1;

const firstDayIndex=date.getDate();
const months=[
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];
document.querySelector('.date h1').innerHTML=months[date.getMonth()];
document.querySelector('.date p').innerHTML=new Date().toDateString();

let days="";
for(let x=firstDayIndex;x>0;x--)
{
    days+=`<div class="priv-date">${prevLastDay-x+1}</div>`;
}

for(let i=1;i<=lastDay;i++)
{
    if(i===new Date().getDate()&& date.getMonth()===new Date().getMonth())
    {
        days+=`<div class="today">${i}</div>`;
    }
    else{
        days+=`<div>${i}</div>`;
        monthDays.innerHTML=days;
    }
    
    

}
for(let k=1;k<=nextDays;k++)
{
    days+=`<div class="next-date">${k}</div>`;
    monthDays.innerHTML=days;
}
    
}


document.querySelector('.priv').addEventListener('click',()=>{
date.setMonth(date.getMonth()-1);
rendercalender();
})
document.querySelector('.next').addEventListener('click',()=>{
date.setMonth(date.getMonth()+1);
rendercalender();
})
rendercalender();

