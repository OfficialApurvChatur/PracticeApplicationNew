import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import automationValidation from '../../../cValidation/aDatabaseManagement/aSetting/gAutomationValidation';
import automationContorller from '../../../bController/aDatabaseManagement/aSetting/gAutomationController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AutomationModel::list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Automation", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AutomationModel::list", label: "Automation", name: "List" }), 
  automationValidation.list(), validatorMiddleware, 
  automationContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AutomationModel::create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Automation", accessPoint: ["Create"] }),
  automationValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  automationContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AutomationModel::retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Automation", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AutomationModel::retrieve", label: "Automation", name: "Retrieve" }), 
  automationValidation.retrieve(), validatorMiddleware, 
  automationContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AutomationModel::update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Automation", accessPoint: ["Update"] }),
  automationValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  automationContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AutomationModel::delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Automation", accessPoint: ["Delete"] }),
  automationValidation.delete(), validatorMiddleware, 
  automationContorller().delete
)

export const automationRoute = router
