import {
    tasksPoppy, 
    tasksDudley,
    tasksNewdog,
    tasksReggie,
    tasks,
    dogName,
    cookieKeyNames} from '../WebsiteConstants'

const setProgress = (study, cookies) => {
 
    //console.log("GET COOKIES ",cookies)
    let  savedProgressString = ""
    if (cookies) savedProgressString = cookies[cookieKeyNames.CASESTUDYS_ALL] ? cookies[cookieKeyNames.CASESTUDYS_ALL] : ""
    let finalArString = ""
    if (savedProgressString === "") {
        finalArString = study
    } else {
        finalArString = savedProgressString + "," + study
    }
    //console.log("PREPARED COOKIES ",finalArString)

    return finalArString
}

const getPercentageProgress = (savedProgressAr,dogTasks) => {
    let totalTasks = 0
    let completedTasks = 0
    let tasksCompletedTag = []
    for (let item in dogTasks) {
        totalTasks = totalTasks + 1
        for (let i = 0; i < savedProgressAr.length; i++) {
            if (savedProgressAr[i] === dogTasks[item] && tasksCompletedTag.indexOf(savedProgressAr[i]) === -1) {
                completedTasks = completedTasks + 1
                tasksCompletedTag.push(savedProgressAr[i])
            }
        }
    }
    let percent = 0
    if (totalTasks > 0 && completedTasks > 0) percent = (100) * (completedTasks/totalTasks)
    percent = Math.round(percent);
    return percent
}

export const getProgressPercent = (currentProgressAsString, dogChoice, cookies) => {
 
    //console.log("GET COOKIES ",cookies)
    const savedProgressString = currentProgressAsString 
    let savedProgressAr = []
    if (savedProgressString.indexOf(",") !== -1) {
        savedProgressAr = savedProgressString.split(",")
    } else {
        savedProgressAr = [savedProgressString]
    }

    let percentageProgress = ""
   
    if (dogChoice === dogName.DUDLEY) {
        percentageProgress = getPercentageProgress(savedProgressAr,tasksDudley)
    } else if (dogChoice === dogName.POPPY) {
        percentageProgress = getPercentageProgress(savedProgressAr,tasksPoppy)
    } else if (dogChoice === dogName.REGGIE) {
        percentageProgress = getPercentageProgress(savedProgressAr,tasksReggie)    
    } else if (dogChoice === dogName.NEWDOG) {
        percentageProgress = getPercentageProgress(savedProgressAr,tasksNewdog)
    } else {
        percentageProgress = getPercentageProgress(savedProgressAr,tasksDudley)
    }
    const str = "PERCENT FOR " + dogChoice
    //console.log(str,cookies)
    return percentageProgress
}
//const [cookies] = useCookies(["caseStudyAll"]);
export const setCaseStudyProgress = (task, dogChoice, cookies) => {
    if (dogChoice === dogName.DUDLEY) {
        if (tasks.DETECT_HEART_MURMUR === task) return setProgress(tasksDudley.DUDLEY_DETECT_HEART_MURMUR, cookies)
        if (tasks.GRADE_HEART_MURMUR === task) return setProgress(tasksDudley.DUDLEY_GRADE_HEART_MURMUR, cookies)
        if (tasks.WHICH_EXAMINATION === task) return setProgress(tasksDudley.DUDLEY_WHICH_EXAMINATION, cookies)
        if (tasks.RESPONDING_OWNER_INITIAL_QUESTION === task) return setProgress(tasksDudley.DUDLEY_RESPONDING_OWNER_INITIAL_QUESTION, cookies)
        if (tasks.XRAY_EXAMINATION === task) return setProgress(tasksDudley.DUDLEY_XRAY_EXAMINATION, cookies)
        if (tasks.ULTRASOUND_EXAMINATION === task) return setProgress(tasksDudley.DUDLEY_ULTRASOUND_EXAMINATION, cookies)
        if (tasks.LVIDDN_EXAMINATION === task) return setProgress(tasksDudley.DUDLEY_LVIDDN_EXAMINATION, cookies)
        if (tasks.NEXT_STEPS === task) return setProgress(tasksDudley.DUDLEY_NEXT_STEPS, cookies)
        if (tasks.WHICH_TREATMENT === task) return setProgress(tasksDudley.DUDLEY_WHICH_TREATMENT, cookies)
        if (tasks.REASSURING_OWNER === task) return setProgress(tasksDudley.DUDLEY_REASSURING_OWNER, cookies)

    } else if (dogChoice === dogName.POPPY) {
        if (tasks.DETECT_HEART_MURMUR === task) return setProgress(tasksPoppy.POPPY_DETECT_HEART_MURMUR, cookies)
        if (tasks.GRADE_HEART_MURMUR === task) return setProgress(tasksPoppy.POPPY_GRADE_HEART_MURMUR, cookies)
        if (tasks.WHICH_EXAMINATION === task) return setProgress(tasksPoppy.POPPY_WHICH_EXAMINATION, cookies)
        if (tasks.RESPONDING_OWNER_INITIAL_QUESTION === task) return setProgress(tasksPoppy.POPPY_RESPONDING_OWNER_INITIAL_QUESTION, cookies)
        if (tasks.XRAY_EXAMINATION === task) return setProgress(tasksPoppy.POPPY_XRAY_EXAMINATION, cookies)
        if (tasks.ULTRASOUND_EXAMINATION === task) return setProgress(tasksPoppy.POPPY_ULTRASOUND_EXAMINATION, cookies)
        if (tasks.LVIDDN_EXAMINATION === task) return setProgress(tasksPoppy.POPPY_LVIDDN_EXAMINATION, cookies)
        if (tasks.NEXT_STEPS === task) return setProgress(tasksPoppy.POPPY_NEXT_STEPS, cookies)
        if (tasks.WHICH_TREATMENT === task) return setProgress(tasksPoppy.POPPY_WHICH_TREATMENT, cookies)
        if (tasks.REASSURING_OWNER === task) return setProgress(tasksPoppy.POPPY_REASSURING_OWNER, cookies)

    } else if (dogChoice === dogName.REGGIE) {
        if (tasks.DETECT_HEART_MURMUR === task) return setProgress(tasksReggie.REGGIE_DETECT_HEART_MURMUR, cookies)
        if (tasks.GRADE_HEART_MURMUR === task) return setProgress(tasksReggie.REGGIE_GRADE_HEART_MURMUR, cookies)
        if (tasks.WHICH_EXAMINATION === task) return setProgress(tasksReggie.REGGIE_WHICH_EXAMINATION, cookies)
        if (tasks.RESPONDING_OWNER_INITIAL_QUESTION === task) return setProgress(tasksReggie.REGGIE_RESPONDING_OWNER_INITIAL_QUESTION, cookies)
        if (tasks.XRAY_EXAMINATION === task) return setProgress(tasksReggie.REGGIE_XRAY_EXAMINATION, cookies)
        if (tasks.ULTRASOUND_EXAMINATION === task) return setProgress(tasksReggie.REGGIE_ULTRASOUND_EXAMINATION, cookies)
        if (tasks.LVIDDN_EXAMINATION === task) return setProgress(tasksReggie.REGGIE_LVIDDN_EXAMINATION, cookies)
        if (tasks.NEXT_STEPS === task) return setProgress(tasksReggie.REGGIE_NEXT_STEPS, cookies)
        if (tasks.WHICH_TREATMENT === task) return setProgress(tasksReggie.REGGIE_WHICH_TREATMENT, cookies)
        if (tasks.REASSURING_OWNER === task) return setProgress(tasksReggie.REGGIE_REASSURING_OWNER, cookies)

    } else if (dogChoice === dogName.NEWDOG) {
        if (tasks.DETECT_HEART_MURMUR === task) return setProgress(tasksNewdog.NEWDOG_DETECT_HEART_MURMUR, cookies)
        if (tasks.GRADE_HEART_MURMUR === task) return setProgress(tasksNewdog.NEWDOG_GRADE_HEART_MURMUR, cookies)
        if (tasks.WHICH_EXAMINATION === task) return setProgress(tasksNewdog.NEWDOG_WHICH_EXAMINATION, cookies)
        if (tasks.RESPONDING_OWNER_INITIAL_QUESTION === task) return setProgress(tasksNewdog.NEWDOG_RESPONDING_OWNER_INITIAL_QUESTION, cookies)
        if (tasks.XRAY_EXAMINATION === task) return setProgress(tasksNewdog.NEWDOG_XRAY_EXAMINATION, cookies)
        if (tasks.ULTRASOUND_EXAMINATION === task) return setProgress(tasksNewdog.NEWDOG_ULTRASOUND_EXAMINATION, cookies)
        if (tasks.LVIDDN_EXAMINATION === task) return setProgress(tasksNewdog.NEWDOG_LVIDDN_EXAMINATION, cookies)
        if (tasks.NEXT_STEPS === task) return setProgress(tasksNewdog.NEWDOG_NEXT_STEPS, cookies)
        if (tasks.WHICH_TREATMENT === task) return setProgress(tasksNewdog.NEWDOG_WHICH_TREATMENT, cookies)
        if (tasks.REASSURING_OWNER === task) return setProgress(tasksNewdog.NEWDOG_REASSURING_OWNER, cookies)
    }else{

        return setProgress("NOTSET", cookies)

    }
}