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
    QUESTION_COMPARE_VIDEO_OF_TWO_HEARTS: 0,
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

export const heartSteps = {
    INTRO: 0,
    VIDEO_OF_HEART: 1,
    VIDEO_OF_HEART_WITH_TEXT: 2,
    QUESTION_ABOUT_HEART: 3,
    YES_ANSWER: 4,
    NO_ANSWER: 5,
    UNSURE_ANSWER: 6
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

export const certRequestSteps = {
    SUMMARY: -1,
    CONGRATS: 0,
    FORM: 1,
    FORM_RESPONSE: 2
}

export const tasksDudley = {
    DUDLEY_DETECT_HEART_MURMUR: 'd1',
    DUDLEY_GRADE_HEART_MURMUR: 'd2',
    DUDLEY_RESPONDING_OWNER_INITIAL_QUESTION: 'd3',
    DUDLEY_XRAY_EXAMINATION: 'd4',
    DUDLEY_ULTRASOUND_EXAMINATION: 'd5',
    DUDLEY_LVIDDN_EXAMINATION: 'd6',
    DUDLEY_NEXT_STEPS: 'd7',
    DUDLEY_WHICH_TREATMENT: 'd8',
    DUDLEY_REASSURING_OWNER: 'd9',
}
export const tasksPoppy = {
    POPPY_DETECT_HEART_MURMUR: 'p1',
    POPPY_GRADE_HEART_MURMUR: 'p2',
    POPPY_RESPONDING_OWNER_INITIAL_QUESTION: 'p3',
    POPPY_XRAY_EXAMINATION: 'p4',
    POPPY_ULTRASOUND_EXAMINATION: 'p5',
    POPPY_LVIDDN_EXAMINATION: 'p6',
    POPPY_NEXT_STEPS: 'p7',
    POPPY_WHICH_TREATMENT: 'p8',
    POPPY_REASSURING_OWNER: 'p9',
}
export const tasksReggie = {
    REGGIE_DETECT_HEART_MURMUR: 'r1',
    REGGIE_GRADE_HEART_MURMUR: 'r2',
    REGGIE_RESPONDING_OWNER_INITIAL_QUESTION: 'r3',
    REGGIE_XRAY_EXAMINATION: 'r4',
    REGGIE_ULTRASOUND_EXAMINATION: 'r5',
    REGGIE_LVIDDN_EXAMINATION: 'r6',
    REGGIE_NEXT_STEPS: 'r7',
    REGGIE_WHICH_TREATMENT: 'r8',
    REGGIE_REASSURING_OWNER: 'r9',
}
export const tasksNewdog = {
    NEWDOG_DETECT_HEART_MURMUR: 'n1',
    NEWDOG_GRADE_HEART_MURMUR: 'n2',
    NEWDOG_RESPONDING_OWNER_INITIAL_QUESTION: 'n3',
    NEWDOG_XRAY_EXAMINATION: 'n4',
    NEWDOG_ULTRASOUND_EXAMINATION: 'n5',
    NEWDOG_LVIDDN_EXAMINATION: 'n6',
    NEWDOG_NEXT_STEPS: 'n7',
    NEWDOG_WHICH_TREATMENT: 'n8',
    NEWDOG_REASSURING_OWNER: 'n9'
}


// export const tasksDudley = {
//     DUDLEY_DETECT_HEART_MURMUR: 'dudleyDetectHeartMurmur',
//     DUDLEY_GRADE_HEART_MURMUR: 'dudleyGradeHeartMurmur',
//     DUDLEY_RESPONDING_OWNER_INITIAL_QUESTION: 'dudleyTask1',
//     DUDLEY_XRAY_EXAMINATION: 'dudleyTask2',
//     DUDLEY_ULTRASOUND_EXAMINATION: 'dudleyTask3',
//     DUDLEY_LVIDDN_EXAMINATION: 'dudleyTask4',
//     DUDLEY_NEXT_STEPS: 'dudleyTask5',
//     DUDLEY_WHICH_TREATMENT: 'dudleyTask6',
//     DUDLEY_REASSURING_OWNER: 'dudleyReassuringOwner',
// }
// export const tasksPoppy = {
//     POPPY_DETECT_HEART_MURMUR: 'poppyDetectHeartMurmur',
//     POPPY_GRADE_HEART_MURMUR: 'poppyGradeHeartMurmur',
//     POPPY_RESPONDING_OWNER_INITIAL_QUESTION: 'poppyTask1',
//     POPPY_XRAY_EXAMINATION: 'poppyTask2',
//     POPPY_ULTRASOUND_EXAMINATION: 'poppyTask3',
//     POPPY_LVIDDN_EXAMINATION: 'poppyTask4',
//     POPPY_NEXT_STEPS: 'poppyTask5',
//     POPPY_WHICH_TREATMENT: 'poppyTask6',
//     POPPY_REASSURING_OWNER: 'poppyReassuringOwner',
// }
// export const tasksReggie = {
//     REGGIE_DETECT_HEART_MURMUR: 'reggieDetectHeartMurmur',
//     REGGIE_GRADE_HEART_MURMUR: 'reggieGradeHeartMurmur',
//     REGGIE_RESPONDING_OWNER_INITIAL_QUESTION: 'reggieTask1',
//     REGGIE_XRAY_EXAMINATION: 'reggieTask2',
//     REGGIE_ULTRASOUND_EXAMINATION: 'reggieTask3',
//     REGGIE_LVIDDN_EXAMINATION: 'reggieTask4',
//     REGGIE_NEXT_STEPS: 'reggieTask5',
//     REGGIE_WHICH_TREATMENT: 'reggieTask6',
//     REGGIE_REASSURING_OWNER: 'reggieReassuringOwner',
// }
// export const tasksNewdog = {
//     NEWDOG_DETECT_HEART_MURMUR: 'newdogDetectHeartMurmur',
//     NEWDOG_GRADE_HEART_MURMUR: 'newdogGradeHeartMurmur',
//     NEWDOG_RESPONDING_OWNER_INITIAL_QUESTION: 'newdogTask1',
//     NEWDOG_XRAY_EXAMINATION: 'newdogTask2',
//     NEWDOG_ULTRASOUND_EXAMINATION: 'newdogTask3',
//     NEWDOG_LVIDDN_EXAMINATION: 'newdogTask4',
//     NEWDOG_NEXT_STEPS: 'newdogTask5',
//     NEWDOG_WHICH_TREATMENT: 'newdogTask6',
//     NEWDOG_REASSURING_OWNER: 'newdogReassuringOwner'
// }

/*
/heart
/grade-the-murmur
/murmur-treatment
/owner-response
/xray
/ultrasound
/ultrasound-lviddn
/next-steps
/which-treatment
/owner-treatment-options
*/

// export const completedDudleySections = [
//     tasks.DUDLEY_DETECT_HEART_MURMUR,
//     tasks.DUDLEY_GRADE_HEART_MURMUR,
//     tasks.DUDLEY_RESPONDING_OWNER_INITIAL_QUESTION,
//     tasks.DUDLEY_XRAY_EXAMINATION,
//     tasks.DUDLEY_ULTRASOUND_EXAMINATION,
//     tasks.DUDLEY_LVIDDN_EXAMINATION,
//     tasks.DUDLEY_NEXT_STEPS,
//     tasks.DUDLEY_WHICH_TREATMENT,
//     tasks.DUDLEY_REASSURING_OWNER
// ]
// export const completedPoppySections = [
//     tasks.POPPY_DETECT_HEART_MURMUR,
//     tasks.POPPY_GRADE_HEART_MURMUR,
//     tasks.POPPY_RESPONDING_OWNER_INITIAL_QUESTION,
//     tasks.POPPY_XRAY_EXAMINATION,
//     tasks.POPPY_ULTRASOUND_EXAMINATION,
//     tasks.POPPY_LVIDDN_EXAMINATION,
//     tasks.POPPY_NEXT_STEPS,
//     tasks.POPPY_WHICH_TREATMENT,
//     tasks.POPPY_REASSURING_OWNER,
// ]
// export const completedReggieSections = [
//     tasks.REGGIE_DETECT_HEART_MURMUR,
//     tasks.REGGIE_GRADE_HEART_MURMUR,
//     tasks.REGGIE_RESPONDING_OWNER_INITIAL_QUESTION,
//     tasks.REGGIE_XRAY_EXAMINATION,
//     tasks.REGGIE_ULTRASOUND_EXAMINATION,
//     tasks.REGGIE_LVIDDN_EXAMINATION,
//     tasks.REGGIE_NEXT_STEPS,
//     tasks.REGGIE_WHICH_TREATMENT,
//     tasks.REGGIE_REASSURING_OWNER,
// ]
// export const completedNewdogSections = [
//     tasks.NEWDOG_DETECT_HEART_MURMUR,
//     tasks.NEWDOG_GRADE_HEART_MURMUR,
//     tasks.NEWDOG_RESPONDING_OWNER_INITIAL_QUESTION,
//     tasks.NEWDOG_XRAY_EXAMINATION,
//     tasks.NEWDOG_ULTRASOUND_EXAMINATION,
//     tasks.NEWDOG_LVIDDN_EXAMINATION,
//     tasks.NEWDOG_NEXT_STEPS,
//     tasks.NEWDOG_WHICH_TREATMENT,
//     tasks.NEWDOG_REASSURING_OWNER
// ]

// export const completedDudleySectionsValues = [
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0
// ]

// export const completedPoppySectionsValues = [
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0
// ]

// export const completedReggieSectionsValues = [
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0
// ]

// export const completedNewdogSectionsValues = [
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0
// ]

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


// const WebsiteConstants = ()  => {
//     const constants = {}
//     constants.dogName = dogName
//     return {}
// }

// export default WebsiteConstants