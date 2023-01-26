

/****************************Calendar***************** */


/**
 * @author: Koua Wilfried elvire
 * @description: Create a function called createCalendar(year, month)
The function should create a calendar for the given year/month.
The calendar should be a table, where a week is <tr>, and a day is <td>. The table top should be <th> 
with weekday names: the first day should be Monday, and so on until Sunday.
 * @param:table:contains all item (days and contains )
 * Date : 25/01/2023
 */



//1 Create a function called createCalendar(year, month)

function createCalendar(year, month) {
    // We get the first day of the month
    let firstDay = new Date(year, month, 1);
    // We get the first day of the week
    let firstDayWeekday = firstDay.getDay();

    // check if the first day is 0 or another
    if (firstDayWeekday === 0) {
        firstDayWeekday = 7;
    }

    // Get the number of days in month
    let numDays = new Date(year, month + 1, 0).getDate();

    // create a array to stock the calendar
    let calendar = [];

    // Create the title 
    let weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
    let titleRow = `<tr><th>${weekdays.join("</th><th>")}</th></tr>`;
    calendar.push(titleRow);

    // create a empty row for the first week
    let emptyCells = "";
    for (let i = 1; i < firstDayWeekday; i++) {
        emptyCells += "<td></td>";
    }

    // Create the entire calendar 
    let currentDay = 1;
    while (currentDay <= numDays) {
        let row = "<tr>";
        for (let i = 1; i <= 7; i++) {
            if (currentDay > numDays) {
                row += "<td></td>";
            } else {
                row += `<td>${currentDay}</td>`;
                currentDay++;
            }
        }
        row += "</tr>";
        calendar.push(row);
    }

    // return the creation of calendar
    return `<table>${calendar.join("")}</table>`;
}  

let year = prompt("Please enter a year like this AAAA")
let day = prompt("Please enter a day like this JJ")
let calendarHTML = createCalendar(`${year}`,`${day}`);
document.body.innerHTML = calendarHTML;
let getTd = document.querySelectorAll('td')
getTd.forEach(element => {
    element.setAttribute("style","border:1px orange solid;border-radius:15px")
});


let getTable = document.querySelector('table')
getTable.setAttribute("style","border:5px green solid;box-shadow:15px 5px 0px 4px black;")

