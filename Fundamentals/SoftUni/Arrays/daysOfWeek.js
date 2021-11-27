function solve(day){
    let days=[
        'Monday',
        'Tuesday',
        'Wendesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];


    if(day>=1 && day<=7){
        console.log(days[day-1]);
    }else {
        console.log('Invalid day!');
    }
}   
