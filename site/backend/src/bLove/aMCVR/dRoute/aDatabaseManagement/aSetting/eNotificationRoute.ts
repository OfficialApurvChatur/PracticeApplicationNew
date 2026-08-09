import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import notificationValidation from '../../../cValidation/aDatabaseManagement/aSetting/eNotificationValidation';
import notificationContorller from '../../../bController/aDatabaseManagement/aSetting/eNotificationController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"NotificationModel::list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Notification", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"NotificationModel::list", label: "Notification", name: "List" }), 
  notificationValidation.list(), validatorMiddleware, 
  notificationContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"NotificationModel::create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Notification", accessPoint: ["Create"] }),
  notificationValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  notificationContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"NotificationModel::retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Notification", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"NotificationModel::retrieve", label: "Notification", name: "Retrieve" }), 
  notificationValidation.retrieve(), validatorMiddleware, 
  notificationContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"NotificationModel::update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Notification", accessPoint: ["Update"] }),
  notificationValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  notificationContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"NotificationModel::delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Notification", accessPoint: ["Delete"] }),
  notificationValidation.delete(), validatorMiddleware, 
  notificationContorller().delete
)

export const notificationRoute = router
