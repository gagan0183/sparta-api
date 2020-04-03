import { CourseController } from "../controllers/course";
import * as csurf from 'csurf';
import { STATUS } from "../config/status";

export class CourseRoutes {
    private courseController: CourseController;

    constructor() {
        this.courseController = new CourseController();
    }

    public routes(app) : void {
        const csrfProtection = csurf({ cookie: true });
        app.get('/courses', csrfProtection, (req, res) => {
            this.courseController.getCourses().then(data => {
                res.status(STATUS.SUCCESS).json(data);
            })
            .catch(error => {
                res.status(STATUS.INTERNAL_SERVER_ERROR).json(error);
            })
        });
    }
}