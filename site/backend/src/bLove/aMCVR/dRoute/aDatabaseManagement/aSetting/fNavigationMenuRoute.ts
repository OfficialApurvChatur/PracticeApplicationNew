import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import navigationMenuValidation from '../../../cValidation/aDatabaseManagement/aSetting/fNavigationMenuValidation';
import navigationMenuContorller from '../../../bController/aDatabaseManagement/aSetting/fNavigationMenuController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"NavigationMenuModel::list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "NavigationMenu", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"NavigationMenuModel::list", label: "NavigationMenu", name: "List" }), 
  navigationMenuValidation.list(), validatorMiddleware, 
  navigationMenuContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"NavigationMenuModel::create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "NavigationMenu", accessPoint: ["Create"] }),
  navigationMenuValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  navigationMenuContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"NavigationMenuModel::retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "NavigationMenu", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"NavigationMenuModel::retrieve", label: "NavigationMenu", name: "Retrieve" }), 
  navigationMenuValidation.retrieve(), validatorMiddleware, 
  navigationMenuContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"NavigationMenuModel::update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "NavigationMenu", accessPoint: ["Update"] }),
  navigationMenuValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  navigationMenuContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"NavigationMenuModel::delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "NavigationMenu", accessPoint: ["Delete"] }),
  navigationMenuValidation.delete(), validatorMiddleware, 
  navigationMenuContorller().delete
)

export const navigationMenuRoute = router
