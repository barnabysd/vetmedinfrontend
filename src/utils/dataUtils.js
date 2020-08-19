import {
    BASE_URL,
    tasksPoppy, 
    tasksDudley,
    tasksNewdog,
    tasksReggie,
    tasks,
    dogName,
    cookieKeyNames} from '../WebsiteConstants'

import { processField } from '../utils/displayUtils'


export const getUltrasoundVideoPosterName = (dogChoice) => {
    if (dogChoice === dogName.DUDLEY) return "dudley_big_thumbnail_ultrasound.png"
    if (dogChoice === dogName.POPPY) return "poppy_big_thumbnail_ultrasound.png"
    if (dogChoice === dogName.REGGIE) return "reggie_big_thumbnail_ultrasound.png"
}

export const getUltrasoundVideoBigThumbnailName = (dogChoice) => {
    if (dogChoice === dogName.DUDLEY) return "dudley_big_thumbnail_ultrasound.png"
    if (dogChoice === dogName.POPPY) return "poppy_big_thumbnail_ultrasound.png"
    if (dogChoice === dogName.REGGIE) return "reggie_big_thumbnail_ultrasound.png"
}

export const get404ImageName = (dogChoice) => {
    if (dogChoice === dogName.DUDLEY) return "Dudley_404.png"
    if (dogChoice === dogName.POPPY) return "Poppy-404.png"
    if (dogChoice === dogName.REGGIE) return "Reggie-404.png"
}


export const getTaskSummaryData = (newData, dogChoice) => {

    let summaryData = {}
  
    summaryData.headerText = newData.field_headertext ? processField(newData.field_headertext,dogChoice,false) : 'No data'
    summaryData.bodyText = newData.field_bodytext ? processField(newData.field_bodytext.processed,dogChoice,false) : 'No data'
    summaryData.footerText = newData.field_tablefooterhtml1 != null ? processField(newData.field_tablefooterhtml1.processed,dogChoice,false) : 'No data'
     summaryData.tableHeader = newData.field_tableheaderhtml1 != null ? processField(newData.field_tableheaderhtml1,dogChoice,false) : 'No data'
  
    summaryData.tableTitle1 = typeof newData.field_tableitemtitlehtml1 !== 'undefined' && newData.field_tableitemtitlehtml1 != null ? processField(newData.field_tableitemtitlehtml1,dogChoice,false) : ''
    summaryData.tableContent1 = typeof newData.field_tableitemcontent1 !== 'undefined' && newData.field_tableitemcontent1 != null ? processField(newData.field_tableitemcontent1.processed,dogChoice,false) : ''
  
    summaryData.tableTitle2 = typeof newData.field_tableitemtitlehtml2 !== 'undefined' && newData.field_tableitemtitlehtml2 != null ? processField(newData.field_tableitemtitlehtml2,dogChoice,false) : ''
    summaryData.tableContent2 = typeof newData.field_tableitemcontent2 !== 'undefined' && newData.field_tableitemcontent2 != null ? processField(newData.field_tableitemcontent2.processed,dogChoice,false) : ''
  
    summaryData.tableTitle3 = typeof newData.field_tableitemtitlehtml3 !== 'undefined' && newData.field_tableitemtitlehtml3 != null ? processField(newData.field_tableitemtitlehtml3,dogChoice,false) : ''
    summaryData.tableContent3 = typeof newData.field_tableitemcontent3 !== 'undefined' && newData.field_tableitemcontent3 != null ? processField(newData.field_tableitemcontent3.processed,dogChoice,false) : ''
  
   summaryData.tableTitle1 = summaryData.tableTitle1 === '' ? processField(newData.field_tableitemtitle1,dogChoice,false) : 'No data'
   summaryData.tableTitle2 = summaryData.tableTitle2 === '' ?  processField(newData.field_tableitemtitle2,dogChoice,false) : 'No data'
   summaryData.tableTitle3 = summaryData.tableTitle3 === '' ?  processField(newData.field_tableitemtitle3,dogChoice,false) : 'No data'
   
    return summaryData
  
  }
  
  export const updateDataWithDogVariant = (existingData, resources) => {
    //field_popupheadertext
    existingData.finalScreenBottomLine2 = resources.field_finalscreenbottomline2 ? resources.field_finalscreenbottomline2.processed : '' // 'Short axis measurement = 5.6'
    existingData.finalScreenBottomLine1 = resources.field_finalscreenbottomline1 ? resources.field_finalscreenbottomline1 : '' // 'Long axis measurement = 6.7'
    return existingData
  }
  

export const makeNarrators = (data) => {
    
    let narrators = []
    const narrator1 = {
      narrator: data.field_videonarrator1,
      location: data.field_videonarratorlocation1 ? data.field_videonarratorlocation1.processed : '',
      profession: data.field_videonarratorprofession1 ? data.field_videonarratorprofession1.processed : '',
      duration: data.field_videoduration1,
    }
      narrators.push(narrator1)
    if (data.field_videonarrator2 && data.field_videonarrator2 !== '') {
      const narrator2 = {
        narrator: data.field_videonarrator2,
        location: data.field_videonarratorlocation2 ? data.field_videonarratorlocation2.processed : '',
        profession: data.field_videonarratorprofession2 ? data.field_videonarratorprofession2.processed : '',
        duration: data.field_videoduration2,
      }
      narrators.push(narrator2)
    }
    if (data.field_videonarrator3 && data.field_videonarrator3 !== '') {
      const narrator3 = {
        narrator: data.field_videonarrator3,
        location: data.field_videonarratorlocation3 ? data.field_videonarratorlocation3.processed : '',
        profession: data.field_videonarratorprofession3 ? data.field_videonarratorprofession3.processed : '',
        duration: data.field_videoduration3,
      }
      narrators.push(narrator3)
    }
    return narrators
  }

  export const makeUnderLargeVideoText = (narrators) => {
    //debugger
    let underLargeVideoText = ''
    for (let iii = 0;iii < narrators.length;iii++) {
       let narrator = narrators[iii].narrator ? narrators[iii].narrator : narrators[iii].videoNarrator
       let profession = narrators[iii].profession ? narrators[iii].profession : narrators[iii].videoProfession
      if (narrators.length > 1 && iii === narrators.length - 1) {
          
        underLargeVideoText = underLargeVideoText + " &amp; <strong>" + narrator + "</strong> " + profession
      } else {
        underLargeVideoText = underLargeVideoText + " <strong>" + narrator + "</strong> " + profession
      }
    }
    return underLargeVideoText
  }

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
  if (typeof data !== 'undefined' && data !== null && typeof videoData !== 'undefined' && videoData !== null ) {

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
      data.videoProfession1 = videoData.videoProfession

  } else {
      console.error("no video data in updateSlideDataWithVideoData")
  }
  return data
}

// export const testForThumbnailFile = (resources) => {
//     let videoThumbnail = ''
//     if (resources.relationships.field_videothumbnail1 !== 'undefined' 
//     && resources.relationships.field_videothumbnail1 !== undefined
//     && resources.relationships.field_videothumbnail1 !== 'null'
//     && resources.relationships.field_videothumbnail1 !== null) {
//         videoThumbnail = resources.relationships.field_videothumbnail1.localFile.url
//     }
//     return ''
// }

export const testForVideoKey = (resources, videoKey) => {
    let videoUrl = ''
    if (videoKey === 1 ) {
        if (resources !== 'undefined' 
            && resources.relationships !== 'undefined' 
            && resources.relationships.field_video1 !== 'undefined' 
            && resources.relationships.field_video1 !== undefined
            && resources.relationships.field_video1 !== 'null'
            && resources.relationships.field_video1 !== null) {
                videoUrl = resources.relationships.field_video1.relationships.field_media_video_file.localFile
            if (typeof videoUrl === undefined || typeof videoUrl === 'undefined' || videoUrl === null) {
                //videoUrl1 = BASE_URL + resources.relationships.field_video1.relationships.field_media_video_file.uri.url
//debugger

                // if (typeof resources.relationships.field_video1.relationships.field_media_video_file.uri === undefined || 
                //     typeof resources.relationships.field_video1.relationships.field_media_video_file.uri === 'undefined' || 
                //     resources.relationships.field_video2.relationships.field_media_video_file.uri === null) {
                //         videoUrl = ''
                // } else {
                    videoUrl = BASE_URL + resources.relationships.field_video1.relationships.field_media_video_file.uri.url
                // }

            } else {
                videoUrl = resources.relationships.field_video1.relationships.field_media_video_file.localFile.url
            }
        } else {
            videoUrl = ''
        }
    }
    if (videoKey === 2 ) {
        if (resources !== 'undefined' 
            && resources.relationships.field_video2 !== 'undefined' 
            && resources.relationships.field_video2 !== undefined
            && resources.relationships.field_video2 !== 'null'
            && resources.relationships.field_video2 !== null) {
                videoUrl = resources.relationships.field_video2.relationships.field_media_video_file.localFile
                if (typeof videoUrl === undefined || typeof videoUrl === 'undefined' || videoUrl === null) {
                        if (typeof resources.relationships.field_video2.relationships.field_media_video_file.uri === undefined || 
                            typeof resources.relationships.field_video2.relationships.field_media_video_file.uri === 'undefined' || 
                            resources.relationships.field_video2.relationships.field_media_video_file.uri === null) {
                                videoUrl = ''
                        } else {
                            videoUrl = BASE_URL + resources.relationships.field_video2.relationships.field_media_video_file.uri.url
                        }
                } else {
                    videoUrl = resources.relationships.field_video2.relationships.field_media_video_file.localFile.url
                }
        } else {
                videoUrl = ''
        }
    }

    if (videoKey === 3 ) {
        if (resources !== 'undefined' 
        && resources.relationships.field_video3 !== 'undefined' 
        && resources.relationships.field_video3 !== undefined
        && resources.relationships.field_video3 !== 'null'
        && resources.relationships.field_video3 !== null) {
                videoUrl = resources.relationships.field_video3.relationships.field_media_video_file.localFile
                if (typeof videoUrl === undefined || typeof videoUrl === 'undefined' || videoUrl === null) {
                    if (typeof resources.relationships.field_video3.relationships.field_media_video_file.uri === undefined || 
                        typeof resources.relationships.field_video3.relationships.field_media_video_file.uri === 'undefined' || 
                        resources.relationships.field_video3.relationships.field_media_video_file.uri === null) {
                            videoUrl = ''
                    } else {
                        videoUrl = BASE_URL + resources.relationships.field_video3.relationships.field_media_video_file.uri.url
                    }
                } else {
                    videoUrl = resources.relationships.field_video3.relationships.field_media_video_file.localFile.url
                }
        } else {
            videoUrl = ''
        }
    }
    return videoUrl
}
 
export const getVideoData = (resources, dogChoice) => {

    

 
    let defaultData = {
        videoUrl: '',
        videoPosterImage: '',
        videoThumbnail: '',
        videoTitle: 'no title found',
        videoForDog: 'dudley',
        videoText: '',
        videoCaptionText: 'no caption found',
        videoProfession: 'no profession found',
        videoNarrator: 'no narrator found',
        videoDuration: '0:00'
    }
    //
  if (typeof resources === 'undefined' || typeof resources === undefined ||  resources === null) return defaultData
  if (typeof resources.relationships === 'undefined' || typeof resources.relationships === undefined ||  resources.relationships === null) return defaultData
  //if (typeof resources.relationships.field_video1 === 'undefined' || typeof resources.relationships.field_video1 === undefined || resources.relationships.field_video1 === null) return defaultData
  
  const narrators = makeNarrators(resources)
  const underLargeVideoText1 = makeUnderLargeVideoText(narrators[0])



  let videoUrl1 = ''

  if (resources.relationships.field_video1 !== 'undefined' 
        && resources.relationships.field_video1 !== undefined
        && resources.relationships.field_video1 !== 'null'
        && resources.relationships.field_video1 !== null) {
            videoUrl1 = resources.relationships.field_video1.relationships.field_media_video_file.localFile
        if (typeof videoUrl1 === undefined || typeof videoUrl1 === 'undefined' || videoUrl1 === null) {
            //videoUrl1 = BASE_URL + resources.relationships.field_video1.relationships.field_media_video_file.uri.url

            if (typeof resources.relationships.field_video1.relationships.field_media_video_file.uri === undefined || 
                typeof resources.relationships.field_video1.relationships.field_media_video_file.uri === 'undefined' || 
                resources.relationships.field_video2.relationships.field_media_video_file.uri === null) {
                    videoUrl1 = ''
            } else {
                videoUrl1 = BASE_URL + resources.relationships.field_video1.relationships.field_media_video_file.uri.url
            }

        } else {
            videoUrl1 = resources.relationships.field_video1.relationships.field_media_video_file.localFile.url
        }
    } else {
        videoUrl1 = ''
    }

    let video1 = defaultData

    if (typeof resources.relationships.field_videoposterimage1.localFile !== 'undefined' && resources.relationships.field_videoposterimage1.localFile !== null  &&
  typeof resources.relationships.field_videothumbnail1.localFile !== 'undefined' && resources.relationships.field_videothumbnail1.localFile !== null &&
  typeof resources.field_videocaptiontext1 !== 'undefined' && resources.field_videocaptiontext1 !== null)  {


    video1 = {
      videoUrl: processField(videoUrl1,dogChoice,false),
      videoPosterImage: processField(resources.relationships.field_videoposterimage1.localFile.url,dogChoice,false),
      videoThumbnail: processField(resources.relationships.field_videothumbnail1.localFile.url,dogChoice,false),
      videoTitle: processField(resources.field_videotitle1,dogChoice,false),
      videoText: processField(resources.field_videotext1,dogChoice,false),
      videoCaptionText: processField(resources.field_videocaptiontext1,dogChoice,false),
      videoNarrator: processField(resources.field_videonarrator1,dogChoice,false),
      videoProfession: processField(resources.field_videoprofession1,dogChoice,false),
      videoDuration: processField(resources.field_videoduration1,dogChoice,false),
      videoForDog: resources.field_videofordog1,
      underLargeVideoText: underLargeVideoText1
    }

}

    let videoUrl2 = ''
    if (resources.relationships.field_video2 !== 'undefined' 
        && resources.relationships.field_video2 !== undefined
        && resources.relationships.field_video2 !== 'null'
        && resources.relationships.field_video2 !== null) {
            videoUrl2 = resources.relationships.field_video2.relationships.field_media_video_file.localFile
            if (typeof videoUrl2 === undefined || typeof videoUrl2 === 'undefined' || videoUrl2 === null) {
                    if (typeof resources.relationships.field_video2.relationships.field_media_video_file.uri === undefined || 
                        typeof resources.relationships.field_video2.relationships.field_media_video_file.uri === 'undefined' || 
                        resources.relationships.field_video2.relationships.field_media_video_file.uri === null) {
                            videoUrl2 = ''
                    } else {
                        videoUrl2 = BASE_URL + resources.relationships.field_video2.relationships.field_media_video_file.uri.url
                    }
            } else {
                videoUrl2 = resources.relationships.field_video2.relationships.field_media_video_file.localFile.url
            }
    } else {
            videoUrl2 = ''
    }

    let video2 = defaultData

  if (typeof resources.relationships.field_videoposterimage2.localFile !== 'undefined' && resources.relationships.field_videoposterimage2.localFile !== null  &&
  typeof resources.relationships.field_videothumbnail2.localFile !== 'undefined' && resources.relationships.field_videothumbnail2.localFile !== null &&
  typeof resources.field_videocaptiontext2!== 'undefined' && resources.field_videocaptiontext2 !== null)  {

        video2 = {
            videoUrl: processField(videoUrl2,dogChoice,false),
            videoPosterImage: processField(resources.relationships.field_videoposterimage2.localFile.url,dogChoice,false),
            videoThumbnail:  processField(resources.relationships.field_videothumbnail2.localFile.url,dogChoice,false),
            videoTitle: processField(resources.field_videotitle2,dogChoice,false),
            videoText: processField(resources.field_videotext2,dogChoice,false),
            videoCaptionText: processField(resources.field_videocaptiontext2,dogChoice,false),
            videoNarrator: processField(resources.field_videonarrator2,dogChoice,false),
            videoProfession: processField(resources.field_videoprofession2,dogChoice,false),
            videoDuration: processField(resources.field_videoduration2,dogChoice,false),
            videoForDog: resources.field_videofordog2
        }

  }

  let videoUrl3 = ''

  if (resources.relationships.field_video3 !== 'undefined' 
      && resources.relationships.field_video3 !== undefined
      && resources.relationships.field_video3 !== 'null'
      && resources.relationships.field_video3 !== null) {
            videoUrl3 = resources.relationships.field_video3.relationships.field_media_video_file.localFile
            if (typeof videoUrl3 === undefined || typeof videoUrl3 === 'undefined' || videoUrl3 === null) {
                if (typeof resources.relationships.field_video3.relationships.field_media_video_file.uri === undefined || 
                    typeof resources.relationships.field_video3.relationships.field_media_video_file.uri === 'undefined' || 
                    resources.relationships.field_video3.relationships.field_media_video_file.uri === null) {
                        videoUrl3 = ''
                } else {
                    videoUrl3 = BASE_URL + resources.relationships.field_video3.relationships.field_media_video_file.uri.url
                }
            } else {
                videoUrl3 = resources.relationships.field_video3.relationships.field_media_video_file.localFile.url
            }
    } else {
        videoUrl3 = ''
    }

    let video3 = defaultData
    

    if (typeof resources.relationships.field_videoposterimage3.localFile !== 'undefined' && resources.relationships.field_videoposterimage3.localFile !== null  &&
    typeof resources.relationships.field_videothumbnail3.localFile !== 'undefined' && resources.relationships.field_videothumbnail3.localFile !== null &&
    typeof resources.field_videocaptiontext3 !== 'undefined' && resources.field_videocaptiontext3 !== null)  {
  
            video3 = {
                videoUrl: processField(videoUrl3,dogChoice,false),
                videoPosterImage: processField(resources.relationships.field_videoposterimage3.localFile.url,dogChoice,false),
                videoThumbnail: processField(resources.relationships.field_videothumbnail3.localFile.url,dogChoice,false),
                videoTitle: processField(resources.field_videotitle3,dogChoice,false),
                videoText: processField(resources.field_videotext3,dogChoice,false),
                videoCaptionText: processField(resources.field_videocaptiontext3,dogChoice,false),
                videoProfession: processField(resources.field_videoprofession3,dogChoice,false),
                videoNarrator: processField(resources.field_videonarrator3,dogChoice,false),
                videoDuration: processField(resources.field_videoduration3,dogChoice,false),
                videoForDog: resources.field_videofordog3
            }

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


