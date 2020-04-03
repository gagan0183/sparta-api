import { CourseModel } from "../models/course";
import { STATUS } from "../config/status";
import { MESSAGES } from "../config/messages";

export class CourseController {
    constructor() {

    }

    public getCourses() {
        return new Promise(async (resolve, reject) => {
            try {
                const courses = await CourseModel.find();
                if (courses) {
                    resolve({
                        status: STATUS.SUCCESS,
                        courses
                    });
                }
            }
            catch(error) {
                reject({
                    status: STATUS.INTERNAL_SERVER_ERROR,
                    message: MESSAGES.ERROR_GET_COURSES,
                    error
                });
            }
        });
    }
}