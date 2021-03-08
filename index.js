const schedule = require('node-schedule');

function nextSchedule(no, date, functions) {
    if (new Date() > date) {
        date = new Date(Date.now() + 50)
    }
    schedule.scheduleJob(date, functions);
}

let workLists = [
    {
        workNo: 1,
        timeToDo: new Date(Date.now() + 1 * 1000),
        doFunction: function () {
            console.log('do workNo.1')
            workLists[0].timeToDo = new Date(Date.now() + 1 * 1000)
            working()
        }
    },
    {
        workNo: 2,
        timeToDo: new Date(Date.now() + 4 * 1000),
        doFunction: function () {
            console.log('do workNo.2')
            workLists[0].timeToDo = new Date(Date.now() + 4 * 1000)
            working()
        }
    },
    {
        workNo: 3,
        timeToDo: new Date(Date.now() + 2 * 1000),
        doFunction: function () {
            console.log('do workNo.3')
            workLists[0].timeToDo = new Date(Date.now() + 2 * 1000)
            working()
        }
    },
    {
        workNo: 4,
        timeToDo: new Date(Date.now() + 5 * 1000),
        doFunction: function () {
            console.log('do workNo.3')
            workLists[0].timeToDo = new Date(Date.now() + 5 * 1000)
            working()
        }
    }
]

function working() {
    workLists = workLists.sort((a, b) => (a.timeToDo > b.timeToDo) ? 1 : -1)
    nextSchedule(workLists[0].workNo, workLists[0].timeToDo, workLists[0].doFunction)
}

working();