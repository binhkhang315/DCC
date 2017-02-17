var router = require('express').Router();
var models = require('../../models');
var log = require('../../config/logConfig');

router.get('/getAdminRequestOpenCourse', function(req, res) {
    var query =
    {
        include: [models.RequestOpening]
    };

    models.Course.findAll(query).then(function(courses) {
        var resData = [];
        courses.forEach(course =>{
            if(course.RequestOpenings.length > 0){
                var requestUsers = [];
                course.RequestOpenings.forEach(request =>{
                    requestUsers.push(request.userId);
                });
                resData.push({
                    course: {
                        id: course.id,
                        name: course.name,
                        description: course.description,
                        imgLink: course.imgLink,
                    },
                    numberOfRequest: course.RequestOpenings.length,
                    traineeList: requestUsers
                });
            }
        });

        var datasend = {
            success: true,
            msg:'send list success',
            data: resData
        };
        res.send(datasend);
    });

});

module.exports = router;
