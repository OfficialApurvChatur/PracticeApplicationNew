import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { NavigationMenuModel } from '../../../aModel/aDatabaseManagement/aSetting/fNavigationMenuModel';


const navigationMenuValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: NavigationMenuModel, label: "NavigationMenuModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: NavigationMenuModel, label: "NavigationMenuModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: NavigationMenuModel, label: "NavigationMenuModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: NavigationMenuModel, label: "NavigationMenuModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: NavigationMenuModel, label: "NavigationMenuModel" })
  ],
};

export default navigationMenuValidation;
