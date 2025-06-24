import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth(); // 0-indexed

  selectedStart: Date | null = null;
  selectedEnd: Date | null = null;

  years = Array.from({ length: 20 }, (_, i) => this.currentYear - 10 + i);
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  get days(): (Date | null)[] {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const days: (Date | null)[] = [];

    const startOffset = (firstDay.getDay() + 6) % 7; // shift Sunday(0) to end
    for (let i = 0; i < startOffset; i++) days.push(null);

    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(this.currentYear, this.currentMonth, d));
    }

    return days;
  }

  onYearChange(year: string) {
    this.currentYear = parseInt(year, 10);
  }

  onMonthChange(month: string) {
    this.currentMonth = parseInt(month, 10);
  }

  selectDate(date: Date | null) {
    if (!date) return;

    if (!this.selectedStart || this.selectedEnd) {
      this.selectedStart = date;
      this.selectedEnd = null;
    } else if (date < this.selectedStart) {
      this.selectedEnd = this.selectedStart;
      this.selectedStart = date;
    } else {
      this.selectedEnd = date;
    }
  }

  isSelected(date: Date | null): boolean {
    if (!date || !this.selectedStart) return false;
    if (!this.selectedEnd) return this.isSameDay(date, this.selectedStart);
    return date >= this.selectedStart && date <= this.selectedEnd;
  }

  isSameDay(d1: Date, d2: Date): boolean {
    return d1.toDateString() === d2.toDateString();
  }
}
