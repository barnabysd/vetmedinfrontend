import { animationCharacterState, dogName } from "../WebsiteConstants"

import DudleySittingVideo from "../assets/dogAndOwnerAnimations/VET-2020-001_Questions_Dudley_Sitting.mp4"
import PoppySittingVideo from "../assets/dogAndOwnerAnimations/VET-2020-001_Questions_Poppy_Sitting.mp4"
import ReggieSittingVideo from "../assets/dogAndOwnerAnimations/VET-2020-001_Questions_Reggie_Sitting.mp4"

import DudleyStandingVideo from "../assets/dogAndOwnerAnimations/VET-2020-001_Questions_Dudley_Standing.mp4"
import PoppyStandingVideo from "../assets/dogAndOwnerAnimations/VET-2020-001_Questions_Poppy_Standing.mp4"
import ReggieStandingVideo from "../assets/dogAndOwnerAnimations/VET-2020-001_Questions_Reggie_Standing.mp4"

import MrsJenkinsVideo from "../assets/dogAndOwnerAnimations/VET-2020-001_Questions_MrsJenkins.mp4"
import MrOakleyVideo from "../assets/dogAndOwnerAnimations/VET-2020-001_Questions_MrOakley.mp4"
import MrsRichardsonVideo from "../assets/dogAndOwnerAnimations/VET-2020-001_Questions_MrsRichardson.mp4"

import DogHeartDudley from "../assets/heart/Dog_heart_Dudley.mp4"
import DogHeartPoppy from "../assets/heart/Dog_heart_Poppy.mp4"
import DogHeartReggie from "../assets/heart/Dog_heart_Reggie.mp4"
import DogHeartNeutral from "../assets/heart/Normal_Heart_v2.mp4"

import DogOnTableDudley from "../assets/dogAndOwnerAnimations/VET-2020-001_ConsultingRoom_Dudley_Placeholder.mp4"
import DogOnTablePoppy from "../assets/dogAndOwnerAnimations/VET-2020-001_ConsultingRoom_Dudley_Placeholder.mp4"
import DogOnTableReggie from "../assets/dogAndOwnerAnimations/VET-2020-001_ConsultingRoom_Dudley_Placeholder.mp4"


export const getVideoDataForTwoHearts = (resources, dogChoice) => {
    let videoData = {
        videoUrl: 'Normal_Heart_v2.mp4',
        videoPosterImage: '',
        videoThumbnail: '',
        videoTitle: 'Normal Heart',
        videoForDog: 'dudley',
        videoText: '',
        videoCaptionText: 'Normal Heart',
        videoNarrator: '',
        videoDuration: '0:00'
    }
    if (dogChoice === dogName.DUDLEY) {
        videoData = {
            videoUrl: 'Dog_heart_Dudley.mp4',
            videoPosterImage: '',
            videoThumbnail: '',
            videoTitle: 'Dudley\'s Heart',
            videoForDog: 'dudley',
            videoText: '',
            videoCaptionText: 'Dudley\'s Heart',
            videoNarrator: 'no data',
            videoDuration: '0:00'
        }
    }
    if (dogChoice === dogName.POPPY) {
        videoData = {
            videoUrl: 'Dog_heart_Poppy.mp4',
            videoPosterImage: '',
            videoThumbnail: '',
            videoTitle: 'Poppy\'s Heart',
            videoForDog: 'poppy',
            videoText: '',
            videoCaptionText: 'Poppy\'s Heart',
            videoNarrator: '',
            videoDuration: '0:00'
        }
    }
    if (dogChoice === dogName.REGGIE) {
        videoData = {
            videoUrl: 'Dog_heart_Reggie.mp4',
            videoPosterImage: '',
            videoThumbnail: '',
            videoTitle: 'Reggie\'s Heart',
            videoForDog: 'reggie',
            videoText: '',
            videoCaptionText: 'Reggie\'s Heart',
            videoNarrator: '',
            videoDuration: '0:00'
        }
    }
    return videoData
}


export const getDogOnTableVideo = (dogChoice) => {
    if (dogChoice === dogName.DUDLEY) {
        return DogOnTableDudley
    } else if (dogChoice === dogName.POPPY) {
        return DogOnTablePoppy
    } else if (dogChoice === dogName.REGGIE) {
        return DogOnTableReggie
    } else {
        return "no data"
    }
}

export const getHeartVideo = (dogChoice) => {
    if (dogChoice === dogName.DUDLEY) {
        return DogHeartDudley
    } else if (dogChoice === dogName.POPPY) {
        return DogHeartPoppy
    } else if (dogChoice === dogName.REGGIE) {
        return DogHeartReggie
    } else {
        return DogHeartNeutral
    }
}

export const getDogImageName = (dogState = animationCharacterState.NEUTRAL,dogChoice) => {
    if (dogState === animationCharacterState.NEUTRAL) {
        if (dogChoice === dogName.DUDLEY) return "heart_Dudley-Sitting-Pose04.png"
        if (dogChoice === dogName.POPPY) return "heart_Poppy_Sitting_02.png"
        if (dogChoice === dogName.REGGIE) return "heart_Reggie_Standing_Poses02.png"
    } else if (dogState === animationCharacterState.HAPPY) {
       if (dogChoice === dogName.DUDLEY) return "happy_Dudley-Sitting-Pose02.png"
        if (dogChoice === dogName.POPPY) return "happy_Poppy_Sitting_01.png"
        if (dogChoice === dogName.REGGIE) return "happy_Reggie_Sitting_Poses01.png"
    } else {
        if (dogChoice === dogName.DUDLEY) return "sad_Dudley_Sitting_Pose05.png"
        if (dogChoice === dogName.POPPY) return "sad_Poppy_Sitting_03.png"
        if (dogChoice === dogName.REGGIE) return "sad_Reggie_Sitting_Poses05.png"
    }
}
export const getDogVideo = (dogState = animationCharacterState.NEUTRAL,dogChoice) => {
    if (dogState === animationCharacterState.NEUTRAL) {
        if (dogChoice === dogName.DUDLEY) return DudleySittingVideo
        if (dogChoice === dogName.POPPY) return PoppySittingVideo
        if (dogChoice === dogName.REGGIE) return ReggieSittingVideo
    } else if (dogState === animationCharacterState.HAPPY) {
        if (dogChoice === dogName.DUDLEY) return DudleySittingVideo
        if (dogChoice === dogName.POPPY) return PoppySittingVideo
        if (dogChoice === dogName.REGGIE) return ReggieSittingVideo
    } else {
        if (dogChoice === dogName.DUDLEY) return DudleySittingVideo
        if (dogChoice === dogName.POPPY) return PoppySittingVideo
        if (dogChoice === dogName.REGGIE) return ReggieSittingVideo
    }
}

export const getOwnerVideo = (dogState = animationCharacterState.NEUTRAL,dogChoice) => {
        if (dogChoice === dogName.DUDLEY) return MrsJenkinsVideo
        if (dogChoice === dogName.POPPY) return MrOakleyVideo
        if (dogChoice === dogName.REGGIE) return MrsRichardsonVideo
}