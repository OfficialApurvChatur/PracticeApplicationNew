import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { EmailLogModel } from '../../../aModel/aDatabaseManagement/aSetting/dEmailLogModel';


const emailLogValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: EmailLogModel, label: "EmailLogModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: EmailLogModel, label: "EmailLogModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: EmailLogModel, label: "EmailLogModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: EmailLogModel, label: "EmailLogModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: EmailLogModel, label: "EmailLogModel" })
  ],
};

export default emailLogValidation;
