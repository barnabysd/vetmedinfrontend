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