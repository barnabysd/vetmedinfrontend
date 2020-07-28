import {
    tasksPoppy, 
    tasksDudley,
    tasksNewdog,
    tasksReggie,
    tasks,
    dogName,
    cookieKeyNames} from '../WebsiteConstants'

import { processField } from '../utils/displayUtils'

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

export const updateSlideDataWithVideoData = (originalData,videoData) => {
  let data = originalData
  if (data !== null) {

      data.videoData1 = videoData

      //TODO: - refactor ot use videData1 instead of individual attributes

      data.videoUrl1 = videoData.videoUrl
      data.videoPosterImage1 = videoData.videoPosterImage
      data.videoThumbnail1 = videoData.videoThumbnail
      data.videoTitle1 = videoData.videoTitle
      data.videoForDog1 = videoData.videoForDog
      data.videoText1 = videoData.videoText
      data.videoCaptionText1 = videoData.videoCaptionText
      data.videoNarrator1 = videoData.videoNarrator

  }
  return data
}

export const getVideoData = (resources, dogChoice) => {
    let defaultData = {
        videoUrl: '',
        videoPosterImage: '',
        videoThumbnail: '',
        videoTitle: 'no data',
        videoForDog: 'dudley',
        videoText: 'no data',
        videoCaptionText: 'no data',
        videoNarrator: 'no data',
        videoDuration: '0:00'
    }
    //debugger
  if (typeof resources === undefined || typeof resources === 'undefined' || resources === null) return defaultData
  if (typeof resources.relationships === undefined || typeof resources.relationships === 'undefined' || resources.relationships === null) return defaultData
  if (typeof resources.relationships.field_video1 === undefined || typeof resources.relationships.field_video1 === 'undefined' || resources.relationships.field_video1 === null) return defaultData
  if (typeof resources.relationships.field_video1.relationships.field_media_video_file.localFile === undefined || 
    typeof resources.relationships.field_video1.relationships.field_media_video_file.localFile === 'undefined' || 
    resources.relationships.field_video1.relationships.field_media_video_file.localFile === null) return defaultData
  
  let video1 = {
      videoUrl: processField(resources.relationships.field_video1.relationships.field_media_video_file.localFile.url,dogChoice,false),
      videoPosterImage: processField(resources.relationships.field_videoposterimage1.localFile.url,dogChoice,false),
      videoThumbnail: processField(resources.relationships.field_videothumbnail1.localFile.url,dogChoice,false),
      videoTitle: processField(resources.field_videotitle1,dogChoice,false),
      videoText: processField(resources.field_videotext1,dogChoice,false),
      videoCaptionText: processField(resources.field_videocaptiontext1,dogChoice,false),
      videoNarrator: processField(resources.field_videonarrator1,dogChoice,false),
      videoDuration: processField(resources.field_videoduration1,dogChoice,false),
      videoForDog: resources.field_videofordog1
  }
  if (typeof resources.relationships.field_video2 === undefined || typeof resources.relationships.field_video2 === 'undefined' || resources.relationships.field_video2 === null) return defaultData
  
  let video2 = {
      videoUrl: processField(resources.relationships.field_video2.relationships.field_media_video_file.localFile.url,dogChoice,false),
      videoPosterImage: processField(resources.relationships.field_videoposterimage2.localFile.url,dogChoice,false),
      videoThumbnail:  processField(resources.relationships.field_videothumbnail2.localFile.url,dogChoice,false),
      videoTitle: processField(resources.field_videotitle2,dogChoice,false),
      videoText: processField(resources.field_videotext2,dogChoice,false),
      videoCaptionText: processField(resources.field_videocaptiontext2,dogChoice,false),
      videoNarrator: processField(resources.field_videonarrator2,dogChoice,false),
      videoDuration: processField(resources.field_videoduration2,dogChoice,false),
      videoForDog: resources.field_videofordog2
  }
  if (typeof resources.relationships.field_video3 === undefined || typeof resources.relationships.field_video3 === 'undefined' || resources.relationships.field_video3 === null) return defaultData
  let video3 = {
      videoUrl: processField(resources.relationships.field_video3.relationships.field_media_video_file.localFile.url,dogChoice,false),
      videoPosterImage: processField(resources.relationships.field_videoposterimage3.localFile.url,dogChoice,false),
      videoThumbnail: processField(resources.relationships.field_videothumbnail3.localFile.url,dogChoice,false),
      videoTitle: processField(resources.field_videotitle3,dogChoice,false),
      videoText: processField(resources.field_videotext3,dogChoice,false),
      videoCaptionText: processField(resources.field_videocaptiontext3,dogChoice,false),
      videoNarrator: processField(resources.field_videonarrator3,dogChoice,false),
      videoDuration: processField(resources.field_videoduration3,dogChoice,false),
      videoForDog: resources.field_videofordog3
  }
  const videos = [video1,video2,video3]
  let videoData = null
  for (let i = 0; i < videos.length; i++ ) {
      if (dogChoice === videos[i].videoForDog) {
          videoData = videos[i];
      }
  }  
  return videoData
}
