import { HttpInterceptorFn } from '@angular/common/http';
// import { inject } from "@angular/core";
// import { NotificationsService } from "./notifications.service";

export const httpStatusInterceptor: HttpInterceptorFn = (req, next) => {

  // const notificationsService: NotificationsService = inject(NotificationsService);

  return next(req);
};
