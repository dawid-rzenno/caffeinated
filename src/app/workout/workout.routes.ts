import { Route } from "@angular/router";
import { ingredientResolver } from "../ingredient/ingredient.resolver";
import { createTitle } from "../shared/create-title.funtion";
import { WorkoutFormComponent } from "./workout-form/workout-form.component";
import { WorkoutDetailsComponent } from "./workout-details/workout-details.component";
import { WorkoutTableComponent } from "./workout-table/workout-table.component";

export const workoutRoutes: Route[] = [
  {
    path: 'read',
    children: [
      {
        path: 'all',
        component: WorkoutTableComponent,
        resolve: {
          paginatedResponse: ingredientResolver
        },
        title: createTitle('Workouts'),
      },
      {
        path: ':id',
        component: WorkoutDetailsComponent,
        resolve: {
          details: ingredientResolver
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
      details: ingredientResolver
    },
    title: createTitle('Edit Workout'),
  }
]
