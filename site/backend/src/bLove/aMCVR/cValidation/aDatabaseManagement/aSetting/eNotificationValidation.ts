import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { NotificationModel } from '../../../aModel/aDatabaseManagement/aSetting/eNotificationModel';


const notificationValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: NotificationModel, label: "NotificationModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: NotificationModel, label: "NotificationModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: NotificationModel, label: "NotificationModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: NotificationModel, label: "NotificationModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: NotificationModel, label: "NotificationModel" })
  ],
};

export default notificationValidation;
