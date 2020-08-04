export const BASE_URL = "http://dev-vetm-admin.pantheonsite.io/"
export const DEBUG_PROJECT = false

export const dogName = {
    DUDLEY: 'dudley',
    POPPY: 'poppy',
    REGGIE: 'reggie',
    NEWDOG: 'newdog'
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

export const ownerTreatmentSteps = {
    SECTION_INTRO: 0,
    QUESTION_POSED_BY_OWNER: 1,
    QUESTION_POSED: 2,
    CORRECT_ANSWER: 3,
    INCORRECT_ANSWER: 4,
}

export const gradeMurmurSteps = {
    QUESTION_COMPARE_VIDEO_OF_TWO_HEARTS: 0,
    QUESTION_ABOUT_GRADING: 1,
    CORRECT_ANSWER: 2,
    INCORRECT_ANSWER: 3,
}

export const heartSlugNames = {
    TASK:"/listen-to-heart",
    TASK_REGGIE: "/reggie-listen-to-heart",
    TASK_DUDLEY: "/dudley-listen-to-heart",
    TASK_POPPY: "/poppy-listen-to-heart",
    NO_ANSWER:"/no-i-did-not-a-heart-murmur",
    YES_ANSWER:"/yes-i-heard-a-heart-murmur",
    UNSURE_ANSWER:"/unsure-i-heard-a-heart-murmur",
    QUESTION_ABOUT_HEART:"/did-you-hear-a-heart-murmur",
    TASK_TWO_HEARTS:"/compare-these-two-recordings"
}

export const gradeMurmurSlugNames = {
    TASK:"/compare-these-two-recordings",
    QUESTION_ABOUT_GRADING:"/what-grade-is-the-heart-murmur",
    INCORRECT_ANSWER:"/the-heart-murmur-is-not-grade-3",
    CORRECT_ANSWER:"/the-heart-murmur-is-grade-3"
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

export const layoutZindexs = {
    SIDE_MENU: 500,
    INTERFACE: 1000,
    FULLSCREEN_VIDEO: 3000
}

export const ownerTreatmentOptionsSlugNames = {
    SECTION_INTRO:'/treatment-options-section-introduction',
    
    QUESTION_POSED_BY_OWNER_POPPY: '/treatment-options-owner-question-mr-oakley',
    QUESTION_POSED_BY_OWNER_DUDLEY:'/treatment-options-owner-question-mrs-jenkins',
    QUESTION_POSED_BY_OWNER_REGGIE: '/treatment-options-owner-question-mrs-richardson',

    QUESTION_POSED_POPPY:'/poppy-treatment-options',
    QUESTION_POSED_REGGIE:'/reggie-treatment-options',
    QUESTION_POSED_DUDLEY:'/dudley-treatment-options',

    CORRECT_ANSWER: '/owner-treatment-answer-concise-language',
    INCORRECT_ANSWER: '/owner-treatment-answer-incorrect',
}

export const ownerResponseSlugNames = {
    QUESTION_POSED_BY_OWNER_DUDLEY: '/dudleys-owner-response-section-introduction',
    QUESTION_POSED_BY_OWNER_POPPY: '/poppys-owner-response-section-introduction',
    QUESTION_POSED_BY_OWNER_REGGIE: '/reggies-owner-response-section-introduction',

    QUESTION_POSED_DUDLEY: '/how-will-you-respond-to-mrs-jenkins',
    QUESTION_POSED_POPPY: '/how-will-you-respond-to-mr-oakley',
    QUESTION_POSED_REGGIE: '/how-will-you-respond-to-mrs-richardson',
    CORRECT_ANSWER: '/how-will-you-respond-correct',
    INCORRECT_ANSWER: '/how-will-you-respond-incorrect',
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
    UNSURE_ANSWER: 6,
    TWO_HEARTS: 7
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

export const tasks = {
    DETECT_HEART_MURMUR: 't1',
    GRADE_HEART_MURMUR: 't2',
    WHICH_EXAMINATION: 'ta22',
    RESPONDING_OWNER_INITIAL_QUESTION: 't3',
    XRAY_EXAMINATION: 't4',
    ULTRASOUND_EXAMINATION: 't5',
    LVIDDN_EXAMINATION: 't6',
    NEXT_STEPS: 't7',
    WHICH_TREATMENT: 't8',
    REASSURING_OWNER: 't9',
}

export const tasksDudley = {
    DUDLEY_DETECT_HEART_MURMUR: 'd1',
    DUDLEY_GRADE_HEART_MURMUR: 'd2',
    DUDLEY_WHICH_EXAMINATION: 'da22',
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
    POPPY_WHICH_EXAMINATION: 'pa22',
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
    REGGIE_WHICH_EXAMINATION: 'ra22',
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
    NEWDOG_WHICH_EXAMINATION: 'na22',
    NEWDOG_RESPONDING_OWNER_INITIAL_QUESTION: 'n3',
    NEWDOG_XRAY_EXAMINATION: 'n4',
    NEWDOG_ULTRASOUND_EXAMINATION: 'n5',
    NEWDOG_LVIDDN_EXAMINATION: 'n6',
    NEWDOG_NEXT_STEPS: 'n7',
    NEWDOG_WHICH_TREATMENT: 'n8',
    NEWDOG_REASSURING_OWNER: 'n9'
}

export const cookieKeyNames = {
    HAS_CONSENT:'hasConsentSet',
    USER_CHOICE:'userChoice',
    DOG_CHOICE:'dogChoice',
    SCORE:'score',
    CASESTUDYS_ALL:'caseStudyAll',
    DUDLEY_CASESTUDY:'caseStudyDudley',
    POPPY_CASESTUDY:'caseStudyPoppy',
    REGGIE_CASESTUDY:'caseStudyReggie',
    NEWDOG_CASESTUDY:'caseStudyNewDog',
    PERCENT_PROGRESS:'percentProgress',
    CID:'certificateSubmissionId'
}

export const animationCharacterState = {
    NEUTRAL: "neutral",
    HAPPY: "happy",
    SAD: "sad",
    NEUTRAL_STANDING: "neutralStanding",
    HAPPY_STANDING: "happyStanding",
    SAD_STANDING: "sadStanding",
    QUESTION_POSED: "questionPosed"
}

const convertObjectKeyNamesToArray = (obj) => { const result = Object.keys(obj).map((key) => [Number(key), obj[key]]); }

export const cookieKeyNamesAr = convertObjectKeyNamesToArray(cookieKeyNames)

