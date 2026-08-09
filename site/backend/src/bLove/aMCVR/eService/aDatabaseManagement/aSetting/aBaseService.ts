import queueUtility from '../../../../../bLove/cUtility/gQueueUtility';

import cacheVariable from '../../../../../bLove/eVariable/aCacheVariable';
import eventVariable from '../../../../../bLove/eVariable/bEventVariable';
import emailToCompanyVariable from '../../../../../bLove/eVariable/cEmailToCompanyVariable';
import emailToUserVariable from '../../../../../bLove/eVariable/dEmailToUserVariable';


interface LcrudType {
  handler: string;
  Label: string;
  request: any;
}

interface ListType extends LcrudType {
  list: any;
}

interface CreateType extends LcrudType {
  create: any;
}

interface RetrieveType extends LcrudType {
  retrieve: any;
}

interface UpdateType extends LcrudType {
  update: any;
}

interface DeleteType extends LcrudType {
  delete_object: any;
}

const baseService = {
  async list({ handler, list, Label, request }: ListType) {
    console.log(handler);
  },

  async create({ handler, create, Label, request }: CreateType) {
    console.log(handler);

    await queueUtility.cacheQueue.add("delete", {
      keyList: cacheVariable.baseModel.create({ 
        Label  
      })
    });

    await queueUtility.eventQueue.add("create", {
      Label,
      data: create,
      eventList: eventVariable.baseModel.create({
        Label, 
      }),
      request
    });

    await queueUtility.emailQueue.add("both", {
      Label,
      data: create,
      textMessageToCompany: emailToCompanyVariable.baseModel.create({
        Label, 
        request 
      }),
      textMessageToUser: emailToUserVariable.baseModel.create({
        Label, 
        request 
      }),
      request
    });
    
  },

  async retrieve({ handler, retrieve, Label, request }: RetrieveType) {
    console.log(handler);
  },

  async update({ handler, update, Label, request }: UpdateType) {
    console.log(handler);

    await queueUtility.cacheQueue.add("delete", {
      keyList: cacheVariable.baseModel.update({ 
        Label, 
        request 
      })
    });

    await queueUtility.eventQueue.add("create", {
      Label,
      data: update,
      eventList: eventVariable.baseModel.update({
        Label, 
        request 
      }),
      request
    });

    await queueUtility.emailQueue.add("both", {
      Label,
      data: update,
      textMessageToCompany: emailToCompanyVariable.baseModel.update({
        Label, 
        request 
      }),
      textMessageToUser: emailToUserVariable.baseModel.update({
        Label, 
        request 
      }),
      request
    });

  },  

  async delete({ handler, delete_object, Label, request }: DeleteType) {
    console.log(handler);

    await queueUtility.imageQueue.add("delete", {
      Label,
      data: delete_object
    });

    await queueUtility.cacheQueue.add("delete", {
      keyList: cacheVariable.baseModel.delete({ 
        Label, 
        request 
      }), 
    });

    await queueUtility.eventQueue.add("create", {
      Label,
      data: delete_object,
      eventList: eventVariable.baseModel.delete({
        Label, 
        request 
      }),
      request
    });

    await queueUtility.emailQueue.add("both", {
      Label,
      data: delete_object,
      textMessageToCompany: emailToCompanyVariable.baseModel.delete({
        Label, 
        request 
      }),
      textMessageToUser: emailToUserVariable.baseModel.delete({
        Label, 
        request 
      }),
      request
    });

  },  
};

export default baseService;
