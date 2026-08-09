import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import emailLogValidation from '../../../cValidation/aDatabaseManagement/aSetting/dEmailLogValidation';
import emailLogContorller from '../../../bController/aDatabaseManagement/aSetting/dEmailLogController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"EmailLogModel::list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "EmailLog", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"EmailLogModel::list", label: "EmailLog", name: "List" }), 
  emailLogValidation.list(), validatorMiddleware, 
  emailLogContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"EmailLogModel::create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "EmailLog", accessPoint: ["Create"] }),
  emailLogValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  emailLogContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"EmailLogModel::retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "EmailLog", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"EmailLogModel::retrieve", label: "EmailLog", name: "Retrieve" }), 
  emailLogValidation.retrieve(), validatorMiddleware, 
  emailLogContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"EmailLogModel::update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "EmailLog", accessPoint: ["Update"] }),
  emailLogValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  emailLogContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"EmailLogModel::delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "EmailLog", accessPoint: ["Delete"] }),
  emailLogValidation.delete(), validatorMiddleware, 
  emailLogContorller().delete
)

export const emailLogRoute = router
