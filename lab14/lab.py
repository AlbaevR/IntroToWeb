from datetime import datetime, timedelta

def simple_month_calendar(year, month):
    current_date = datetime(year, month, 1)

    start_weekday = current_date.weekday()

    if month == 12:
        next_month = datetime(year + 1, 1, 1)
    else:
        next_month = datetime(year, month + 1, 1)

    last_date = next_month - timedelta(days=1)

    print("Mon Tue Wed Thu Fri Sat Sun")

    print("    " * start_weekday, end="")

    while current_date <= last_date:
        print(f"{current_date.day:3}", end=" ")

        if current_date.weekday() == 6:
            print()

        current_date += timedelta(days=1)

    print()

simple_month_calendar(2025, 5)
