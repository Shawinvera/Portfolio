import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Project {
  title: string;
  image: string;
  description: string;
  tech: string[];
  code?: string;       // main GitHub link
  code2?: string;      // optional second repo (e.g. frontend)
  demo?: string;       // live demo link
  status?: string;     // e.g. 'In Progress'
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  year = new Date().getFullYear();
  name = 'Shawinvera';

  // Mobile hamburger menu
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.closeMenu();
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768) {
      this.closeMenu();
    }
  }

  navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'CV', href: '#cv' },
    { label: 'Contact', href: '#contact' },
  ];

  skills = [
    'NodeJS', 'AngularJs', 'Springboot', 'Java', 'MySQL', 'TailwindCSS', 'HTML', 'CSS',
    'JavaScript', 'TypeScript', 'Android dev with Java', 'Git', 'GitHub', 'RESTful APIs',
    'Google SSO', 'M-Pesa STK Push', 'Postman', 'Canva',
  ];

  projects: Project[] = [
    {
      title: 'WaziLearn',
      image: 'assets/wazilearn.png',
      description:
        'Collaborated with a team of developers to build a modern, interactive e-learning platform using Angular, Java Spring Boot, and MySQL. I contributed to developing responsive user interfaces, backend RESTful APIs, and database functionality. The platform features gamified lessons, real-time learning progress tracking, role-based dashboards, Google SSO authentication, and M-Pesa subscription payments, providing an engaging and accessible learning experience for students, parents, and teachers.',
      tech: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'MySQL', 'Google SSO', 'M-Pesa STK Push'],
      code: 'https://github.com/softkitke/wazi',
      demo: 'https://wazi-ten.vercel.app/',
    },
    {
      title: 'Kanisa Manager',
      image: 'assets/kanisamanager.png',
      description:
        'Collaborated with a team to develop KanisaManager, a cloud-based church management system using Angular, Java Spring Boot, and MySQL. I contributed to frontend and backend development, implementing RESTful APIs, database functionality, Google SSO authentication, and M-Pesa STK Push integration. The platform streamlines church administration through member management, attendance tracking, financial reporting, event scheduling, bulk SMS, and role-based access control.',
      tech: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'MySQL', 'Google SSO', 'M-Pesa STK Push'],
      code: '',   // add the repo link if it is public
      demo: '',   // add the live link when you have it
    },
    {
      title: 'Smart Cradle',
      image: 'assets/smartcrade.png',
      description:
        'Developed a Smart Cradle System that helps parents monitor their babies in real time through an Android application. I contributed to developing features for cry and movement detection, temperature monitoring, lullaby playback, and parental notifications. The system integrates sensors, a microcontroller, Bluetooth communication, and an SQL database to provide convenient baby monitoring and cradle control.',
      tech: ['MySQL', 'Android dev with Java', 'HTML', 'CSS', 'NodeJS'],
      code: 'https://github.com/Shawinvera/Smart_Cradle_App_Backend',
      code2: 'https://github.com/Shawinvera/Smart_Cradle_Frontend',
    },
    {
      title: 'Weather App',
      image: 'assets/weather.png',
      description:
        'Developed an Android weather application using Java in Android Studio, integrating the OpenWeather API to fetch and display real-time weather information for searched locations and the user’s current location.',
      tech: ['Android dev with Java', 'OpenWeather API'],
      code: 'https://github.com/Shawinvera/Weather-App',
    },
    {
      title: 'Pamoja Wallet',
      image: 'assets/wallet.png',
      description:
        'Pamoja replaces the spreadsheets and WhatsApp messages many families use to track shared savings. The dashboard gives an instant view of the fund balance and the month’s progress toward its target, with paid and pending counts at a glance. Selecting a member opens a page with every contribution, its date, and its payment method. Members record their own contributions through a modal form with validation, and the dashboard totals and statuses update straight away.',
      tech: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'MySQL'],
      status: 'In Progress',
    },
  ];

  highlights = [
    'Software Developer at SoftKit Limited (Nov 2025 to present)',
    'BSc Software Development, KCA University (2026)',
    'Backend Lead, KCA Tech Club',
    'Certified in Python, plus Microsoft ADC Wins mentorship',
  ];

  socials = [
    { label: 'GH', href: 'https://github.com/Shawinvera' },
    { label: 'in', href: 'https://www.linkedin.com/in/shawin-vera-opande-904309278/' },
  ];

  // Contact form
  form = { name: '', email: '', message: '' };
  sent = false;
  sending = false;
  error = false;

  private endpoint = 'https://formspree.io/f/xdkzkaya';

  async send() {
    this.sending = true;
    this.sent = false;
    this.error = false;

    try {
      const res = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(this.form),
      });

      if (res.ok) {
        this.sent = true;
        this.form = { name: '', email: '', message: '' };
      } else {
        this.error = true;
      }
    } catch {
      this.error = true;
    } finally {
      this.sending = false;
    }
  }
}