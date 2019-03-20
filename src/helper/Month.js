class Month {

}

Month.toString = function (dateObject) {
    let month = dateObject.getMonth();
    switch (month) {
        case 0:
            {
                return "JANUARY";
            }
        case 1:
            {
                return "FEBRUARY";
            }
        case 2:
            {
                return "MARCH";
            }
        case 3:
            {
                return "APRIL";
            }
        case 4:
            {
                return "MAY";
            }
        case 5:
            {
                return "JUNE";
            }
        case 6:
            {
                return "JULY";
            }
        case 7:
            {
                return "AUGUST";
            }
        case 8:
            {
                return "SEPTEMBER";
            }
        case 9:
            {
                return "OCTOBER";
            }
        case 10:
            {
                return "NOVEMBER";
            }
        case 11:
            {
                return "DECEMBER";
            }
        default:
            {
                throw new Error('Not a month');
            }
    }
}

Month.getNumberOfDays = function (dateObject) {
    let month = dateObject.getMonth();
    switch (month) {
        case 0:
            {
                return 31;
            }
        case 1:
            {
                let year = dateObject.getFullYear();
                if (year % 4 === 0) {
                    if (year % 400 === 0) {
                        return 29;
                    } else if (year % 100 === 0) {
                        return 28;
                    } else {
                        return 29;
                    }
                } else {
                    return 28;
                }
            }
        case 2:
            {
                return 31;
            }
        case 3:
            {
                return 30;
            }
        case 4:
            {
                return 31;
            }
        case 5:
            {
                return 30;
            }
        case 6:
            {
                return 31;
            }
        case 7:
            {
                return 31;
            }
        case 8:
            {
                return 30;
            }
        case 9:
            {
                return 31;
            }
        case 10:
            {
                return 30;
            }
        case 11:
            {
                return 31;
            }
        default:
            {
                throw new Error('Not a month');
            }
    }
}
Month.getfirstDayOfMonth = function (dateObject) {
    let year = dateObject.getFullYear();
    let month = dateObject.getMonth();
    let firstDate = new Date(year, month, 1);
    return firstDate.getDay();
}

Month.isCurrentDate = function (dateObject, date) {
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let CurrentDate = new Date().getDate();
    let year = dateObject.getFullYear();
    let month = dateObject.getMonth();
    if (year === currentYear && month === currentMonth && date === CurrentDate) {
        return true;
    } else {
        return false;
    }

}

export default Month;