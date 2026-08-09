import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AutomationModel } from '../../../aModel/aDatabaseManagement/aSetting/gAutomationModel';


const automationValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AutomationModel, label: "AutomationModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AutomationModel, label: "AutomationModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AutomationModel, label: "AutomationModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: AutomationModel, label: "AutomationModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AutomationModel, label: "AutomationModel" })
  ],
};

export default automationValidation;
