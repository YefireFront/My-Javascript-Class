//* fatz

//% callback

function requestHandler(req, res) {
    User.findById(req.userID, function (err, user) {
        if (err) {
            res.send(err);
        } else {
            Tasks.findById(user.tasksId, function (err, tasks) {
                if (err) {
                    res.send(err)
                } else {
                    tasks.completed = true
                    tasks.save(function (err) {
                        if (err) {
                            return res.send(err);
                        } else {
                            res.send(`Task completed`)
                        }
                    })
                }
            })
        }
    })

    //whatever code
}




//% Promise


function requestHandler2(req, res) {
    
    User.findById(req.userID)
        .then(function (user) {
            task.findById(user.tasksId)
        })
        .then(function (task) {
            
        })
        .catch(function (errors) {
            errors.send(errors)
        })

}