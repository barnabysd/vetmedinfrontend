export const dogName = {
    DUDLEY: 'dudley',
    POPPY: 'poppy',
    REGGIE: 'reggie',
}

export const ownerName = {
    DUDLEY: 'Mrs Jenkins',
    POPPY: 'Mr Oakley',
    REGGIE: 'Mrs Smith',
}

export const ownerResponseSteps = {
    SECTION_INTRO: 0,
    QUESTION_POSED_BY_OWNER: 1,
    QUESTION_POSED: 2,
    CORRECT_ANSWER: 3,
    INCORRECT_ANSWER: 4,
}

export const gradeMurmurSteps = {
    QUESTION_POSED: 1,
    CORRECT_ANSWER: 2,
    INCORRECT_ANSWER: 3,
}

export const murmurTreatmentResourcesSlugNames = {
    QUESTION_POSED: "/murmur-treatment",
    CORRECT_ANSWER_XRAY_ONLY: "/murmur-treatment-answer-xray-only",
    CORRECT_ANSWER_XRAY_AND_ULTRASOUND: "/murmur-treatment-answer-xray-and-ultrasound",
    CORRECT_ANSWER_ULTRASOUND: "/murmur-treatment-answer-ultrasound",
    INCORRECT_ANSWER_ECG: "/murmur-treatment-answer-ecg",
    INCORRECT_ANSWER_NO_TREATMENT: "/murmur-treatment-answer-no-treatment",
    INCORRECT_ANSWER_HOLTER_MONITORING: "/treatment-prescribed-answer-holter"
}

export const nextStepsSlugNames = {
    QUESTION_POSED: "/treatment-steps",
    CORRECT_ANSWER_RECHECK: "/treatment-steps-answer-recheck",
    CORRECT_ANSWER_START_TREATMENT: "/treatment-steps-answer-start-treatment",
    INCORRECT_ALL_CLEAR: "/treatment-steps-answer-all-clear",
}

export const nextStepsSteps = {
    QUESTION_POSED:"treatmentSteps",
    CORRECT_ANSWER_RECHECK: "treatmentStepsAnswerRecheck",
    CORRECT_ANSWER_START_TREATMENT: "treatmenStepsAnswerStartTreatment",
    INCORRECT_ALL_CLEAR: "treatmentStepsAnswerAllClear",
}

export const whichTreatmentSlugNames = {
    QUESTION_POSED: "/which-treatments",
    INCORRECT_ANSWER_SPIRO: "/treatment-prescribed-answer-spironolactone",
    CORRECT_VETMEDIN: "/treatment-prescribed-answer-vetmedin",
    INCORRECT_ANSWER_ACE: "/treatment-prescribed-answer-ace",
    INCORRECT_ANSWER_ALL_DIURETICS: "/treatment-prescribed-answer-diuretics",
}

export const whichTreatmentSteps = {
    QUESTION_POSED:"whichTreatment",
    INCORRECT_ANSWER_SPIRO: "treatmentPrescribedAnswerSpironolactone",
    CORRECT_VETMEDIN: "treatmentPrescribedAnswerVetmedin",
    INCORRECT_ANSWER_ACE: "treatmentPrescribedAnswerAce",
    INCORRECT_ANSWER_ALL_DIURETICS: "treatmentPrescribedAnswerDiuretics",
}


export const treatmentApproachSteps = {
    QUESTION_POSED:"treatmentApproachQuestionPosed",
    CORRECT_ANSWER_XRAY_ONLY:"treatmentApproachXrayOnly",
    CORRECT_ANSWER_XRAY_AND_ULTRASOUND:"treatmentApproachXrayAndUltrasound",
    CORRECT_ANSWER_ULTRASOUND:"treatmentApproachUltrasound",
    INCORRECT_ANSWER_ECG:"treatmentApproachEcg",
    INCORRECT_ANSWER_NO_TREATMENT:"treatmentApproachNoTreatment",
    INCORRECT_ANSWER_HOLTER_MONITORING:"treatmentApproachHolterMonitoring"
}

export const legacyButtonTypes = {
    DARK_BLUE_ROUNDED: "DarkBlueRounded",
    DARK_BLUE_OUTLINE_ROUNDED: "DarkBlueOutlinedRounded"
}

export const bottomNavigationLinkDirection = {
    FORWARD: 'forward',
    BACK: 'back'
}

export const ultrasoundSteps = {
    VIDEO_PREVIEW: 0,
    MEASURE_INTERNAL_SHORT_AXIS_AORTA: 1,
    NOW_SELECT_OPPOSITE_COMMISSURE: 2,
    NOW_SELECT_OPPOSITE_COMMISSURE_ANIMATE: 3,
    MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM: 4,
    NOW_SELECT_FREE_WALL: 5,
    NOW_SELECT_FREE_WALL_ANIMATE: 6,
    MEASURE_BOTH_LINES: 7,
    MEASURE_BOTH_LINES_POP_UP_ANIMATE: 8,
    SUMMARY: 9
}

export const ultrasoundLviddnSteps = {
    MEASURE_LEFT_VENT: 1,
    NOW_SELECT_OTHER_VENT_SIDE: 2,
    LVIDDN_POP_UP_ANIMATE: 3,
    SUMMARY: 4
}


export const ultrasoundLviddSteps = {
   
    MEASURE_LEFT_VENT: 1,
    SELECT_OTHER_SIDE: 3,
    LVIDD_NORMALISED: 4,
    LVIDD_NORMALISED_POPUP: 5,
    SUMMARY: 6,
}

export const xraySlides = {
    STAGE0: 0,
    STAGE1: 1,
    STAGE2: 2,
    STAGE3: 3,
    STAGE4: 4,
    STAGE5: 5,
    STAGE6: 6,
    STAGE7: 7,
    STAGE8: 8,
    STAGE9: 9,
    STAGE10: 10,
    STAGE11: 11,
    STAGE12: 12,
    STAGE13: 13,
    STAGE14: 14
  }
export const slideTypes = {
    ANSWER_NO_VIDEO: 'answerNoVideo',
    ANSWER_WITH_VIDEO: 'answerWithVideo',
    QUESTION_POSED: 'question',
    QUESTION_POSED_BY_OWNER: 'questionPosedByOwner', 
    TASK: 'task', 
}

export const tasks = {
    DUDLEY_DETECT_HEART_MURMUR: 'dudleyDetectHeartMurmur',
    DUDLEY_GRADE_HEART_MURMUR: 'dudleyGradeHeartMurmur',
    DUDLEY_CARDIO_TEST: 'dudleyCardioTest',
    DUDLEY_STARTING_TREATMENT_OR_ADVISING_FOLLOW_UP: 'dudleyStartingTreatmentOrAdvisingFollowUp',
    DUDLEY_REASSURING_OWNER: 'dudleyReassuringOwner',

    POPPY_DETECT_HEART_MURMUR: 'poppyDetectHeartMurmur',
    POPPY_GRADE_HEART_MURMUR: 'poppyGradeHeartMurmur',
    POPPY_CARDIO_TEST: 'poppyCardioTest',
    POPPY_STARTING_TREATMENT_OR_ADVISING_FOLLOW_UP: 'poppyStartingTreatmentOrAdvisingFollowUp',
    POPPY_REASSURING_OWNER: 'poppyReassuringOwner',

    REGGIE_DETECT_HEART_MURMUR: 'reggieDetectHeartMurmur',
    REGGIE_GRADE_HEART_MURMUR: 'reggieGradeHeartMurmur',
    REGGIE_CARDIO_TEST: 'reggieCardioTest',
    REGGIE_STARTING_TREATMENT_OR_ADVISING_FOLLOW_UP: 'reggieStartingTreatmentOrAdvisingFollowUp',
    REGGIE_REASSURING_OWNER: 'reggieReassuringOwner',

    NEWDOG_DETECT_HEART_MURMUR: 'newdogDetectHeartMurmur',
    NEWDOG_GRADE_HEART_MURMUR: 'newdogGradeHeartMurmur',
    NEWDOG_CARDIO_TEST: 'newdogCardioTest',
    NEWDOG_STARTING_TREATMENT_OR_ADVISING_FOLLOW_UP: 'newdogStartingTreatmentOrAdvisingFollowUp',
    NEWDOG_REASSURING_OWNER: 'newdogReassuringOwner'
}

export const completedSections = [
    tasks.DUDLEY_DETECT_HEART_MURMUR,
    tasks.DUDLEY_GRADE_HEART_MURMUR,
    tasks.DUDLEY_CARDIO_TEST,
    tasks.DUDLEY_STARTING_TREATMENT_OR_ADVISING_FOLLOW_UP,
    tasks.DUDLEY_REASSURING_OWNER,

    tasks.POPPY_DETECT_HEART_MURMUR,
    tasks.POPPY_GRADE_HEART_MURMUR,
    tasks.POPPY_CARDIO_TEST,
    tasks.POPPY_STARTING_TREATMENT_OR_ADVISING_FOLLOW_UP,
    tasks.POPPY_REASSURING_OWNER,

    tasks.REGGIE_DETECT_HEART_MURMUR,
    tasks.REGGIE_GRADE_HEART_MURMUR,
    tasks.REGGIE_CARDIO_TEST,
    tasks.REGGIE_STARTING_TREATMENT_OR_ADVISING_FOLLOW_UP,
    tasks.REGGIE_REASSURING_OWNER,

    tasks.NEWDOG_DETECT_HEART_MURMUR,
    tasks.NEWDOG_GRADE_HEART_MURMUR,
    tasks.NEWDOG_CARDIO_TEST,
    tasks.NEWDOG_STARTING_TREATMENT_OR_ADVISING_FOLLOW_UP,
    tasks.NEWDOG_REASSURING_OWNER
]

export const completedDudleySectionsValues = [
    0,
    0,
    0,
    0,
    0
]

export const completedPoppySectionsValues = [
    0,
    0,
    0,
    0,
    0
]

export const completedReggieSectionsValues = [
    0,
    0,
    0,
    0,
    0
]

export const completedNewdogSectionsValues = [
    0,
    0,
    0,
    0,
    0
]

export const cookieKeyNames = [
    'hasConsentSet',
    'userChoice',
    'dogChoice',
    'score',
    'caseStudyDudley',
    'caseStudyPoppy',
    'caseStudyReggie',
    'caseStudyNewDog',
    'percentProgress',
    'certificateSubmissionId'
]


const WebsiteConstants = ()  => {
    const constants = {}
    constants.dogName = dogName
    return {}
}

export default WebsiteConstants