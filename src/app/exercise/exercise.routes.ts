import { Route } from "@angular/router";
import { createTitle } from "../shared/create-title.funtion";
import { ExerciseFormComponent } from "./exercise-form/exercise-form.component";
import { ExerciseDetailsComponent } from "./exercise-details/exercise-details.component";
import { ExerciseTableComponent } from "./exercise-table/exercise-table.component";
import { exerciseResolver } from "./exercise.resolver";

export const exerciseRoutes: Route[] = [
  {
    path: 'read',
    children: [
      {
        path: 'all',
        component: ExerciseTableComponent,
        resolve: {
          paginatedResponse: exerciseResolver
        },
        title: createTitle('Exercises'),
      },
      {
        path: ':id',
        component: ExerciseDetailsComponent,
        resolve: {
          details: exerciseResolver
        },
        title: createTitle('Exercise Details'),
      },
    ]
  },
  {
    path: 'create',
    component: ExerciseFormComponent,
    title: createTitle('New Exercise'),
  },
  {
    path: 'edit/:id',
    component: ExerciseFormComponent,
    resolve: {
      details: exerciseResolver
    },
    title: createTitle('Edit Exercise'),
  }
]
