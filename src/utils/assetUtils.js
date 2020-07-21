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

export const getDogImageName = (dogState = animationCharacterState.NEUTRAL,dogChoice) => {
    if (dogState === animationCharacterState.NEUTRAL) {
        if (dogChoice === dogName.DUDLEY) return "heart_Poppy_Sitting_02.png"
        if (dogChoice === dogName.POPPY) return "heart_Reggie_Standing_Poses02.png"
        if (dogChoice === dogName.REGGIE) return "heart_Dudley-Sitting-Pose04.png"
    } else if (dogState === animationCharacterState.HAPPY) {
        if (dogChoice === dogName.DUDLEY) return "heart_Poppy_Sitting_02.png"
        if (dogChoice === dogName.POPPY) return "heart_Reggie_Standing_Poses02.png"
        if (dogChoice === dogName.REGGIE) return "heart_Dudley-Sitting-Pose04.png"
    } else {
        if (dogChoice === dogName.DUDLEY) return "heart_Poppy_Sitting_02.png"
        if (dogChoice === dogName.POPPY) return "heart_Reggie_Standing_Poses02.png"
        if (dogChoice === dogName.REGGIE) return "heart_Dudley-Sitting-Pose04.png"
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