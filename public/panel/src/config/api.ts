import {environment} from '../environments/environment.prod';

export const baseUrl = environment.globalServerURL;
export const api = {
    getAllDepartments: baseUrl + 'department/getAllForCompany',
    addCall: baseUrl + 'calls/add',
    updateDepartment: baseUrl + 'department/update',
    getDepartment: baseUrl + 'department/getById',
    getCompany: baseUrl + 'company/getCompany',
    updateOnesignal: baseUrl + 'users/updateNotification',
    sendNotification: baseUrl + 'users/sendNotification'
};
