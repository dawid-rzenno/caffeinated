import { Route } from "@angular/router";
import { createTitle } from "../shared/create-title.funtion";
import { WorkoutFormComponent } from "./workout-form/workout-form.component";
import { WorkoutDetailsComponent } from "./workout-details/workout-details.component";
import { WorkoutTableComponent } from "./workout-table/workout-table.component";
import { workoutResolver } from "./workout.resolver";

export const workoutRoutes: Route[] = [
  {
    path: 'read',
    children: [
      {
        path: 'all',
        component: WorkoutTableComponent,
        resolve: {
          paginatedResponse: workoutResolver
        },
        title: createTitle('Workouts'),
      },
      {
        path: ':id',
        component: WorkoutDetailsComponent,
        resolve: {
          details: workoutResolver
        },
        title: createTitle('Workout Details'),
      },
    ]
  },
  {
    path: 'create',
    component: WorkoutFormComponent,
    title: createTitle('New Workout'),
  },
  {
    path: 'edit/:id',
    component: WorkoutFormComponent,
    resolve: {
      details: workoutResolver
    },
    title: createTitle('Edit Workout'),
  }
]
