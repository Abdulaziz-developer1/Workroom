import { createRouter, createWebHistory } from "vue-router";


import SignIn from "../pages/SignInUp/sigIn.vue";
import SignUp from "../pages/SignInUp/signUp.vue";
import Step1 from "../pages/SignInUp/SignUp/step1.vue";
import Step2 from "../pages/SignInUp/SignUp/step2.vue";
import Step3 from "../pages/SignInUp/SignUp/step3.vue";
import Step4 from "../pages/SignInUp/SignUp/step4.vue";
import Success from "../pages/SignInUp/SignUp/succes.vue";
import addProject from '../pages/Add/addProject.vue';
import ProjectDetails from "../pages/Add/projects.vue"
import Dashboard from '../pages/Dashboard/dashboard.vue'
import NearestEvents from '../pages/Dashboard/events.vue'
import Projects from '../pages/projects/projects.vue'
import ProjectBoard from '../pages/projects/ProjectBoard.vue'
import ProjectTimeline from '../pages/projects/ProjectTimeline.vue'
import Calendar from '../pages/Calender/Calendar.vue'
import Profile from '../pages/Profile/Profile.vue'
import MyTeam from '../pages/Profile/MyTeam.vue'
import Vacations from '../pages/Profile/Vacations.vue'
import Settings from '../pages/Profile/Settings.vue'
import Employees from '../pages/Employees/Employees.vue'
import Activity from '../pages/Employees/Activity.vue'
import CurrentProjects from '../pages/Employees/CurrentProjects.vue'
import EmployeeVacations from '../pages/Vacations/EmployeeVacations.vue'
import CalendarVacations from '../pages/Vacations/CalendarVacations.vue'
import InfoPortal from '../pages/InfoPortal/InfoPortal.vue'
import InfoFolder from '../pages/InfoPortal/InfoFolder.vue'
import Messenger from '../pages/Messenger/Messenger.vue'
 

const routes = [
  {
    path: "/",
    component: SignIn,
  },
  {
    path: "/signUp",
    component: SignUp,
  },
  {
    path: "/step1",
    component: Step1,
  },
  {
    path: "/step2",
    component: Step2,
  },
  {
    path: "/step3",
    component: Step3,
  },
  {
    path: "/step4",
    component: Step4,
  },
  {
    path: "/success",
    component: Success,
  },
  {
    path: "/newProject",
    component: addProject,
  },
  {
    path: "/projectDetails",
    component: ProjectDetails,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/nearestEvents",
    component: NearestEvents,
  },
  {
    path: "/projects",
    component: Projects
  },
  {
    path: "/projectBoard",
    component: ProjectBoard
  },
  {
    path: "/projectTimeline",
    component: ProjectTimeline
  },
  {
    path: "/calendar",
    component: Calendar
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/myTeam",
    component: MyTeam
  },
  {
    path: "/vacations",
    component: Vacations
  },
  {
    path: "/settings",
    component: Settings
  },
  {
    path: "/employees",
    component: Employees
  },
  {
    path: "/activity",
    component: Activity
  },
  {
    path: "/currentProjects",
    component: CurrentProjects
  },
  {
    path: "/employeeVacations",
    component: EmployeeVacations
  },
  {
    path: "/calendarVacations",
    component: CalendarVacations
  },
  {
    path: "/infoPortal",
    component: InfoPortal
  },
  {
    path: "/infoFolder",
    component: InfoFolder
  },
  {
    path: "/messenger",
    component: Messenger
  }
];

// route boyicha faylni qidiryatganda figmaga etiborlik bolinglar, figmadagi holatlar (hover va shunga oxshaganlar)ni yozmadim!

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
