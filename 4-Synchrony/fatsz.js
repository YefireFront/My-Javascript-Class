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
            return task.findById(user.tasksId)
        })
        .then(function (tasks) {
            task.completed = true;
            return tasks.save()
        })
        .then(function () {
            res.send('TASK COMPLETED')
        })
        .catch(function (errors) {
            errors.send(errors)
        })

}


//% ASYC AWAIT

async function  requestHandler3(req, res) {
    try {
        const user = await user.findById(req.userID)
        const task = await task.findById(user.tasksId)
        task.completed = true
        await task.save( )
        
    } catch (error) {
        new Error (error)
    }

}



//! SEQUENCIAL

