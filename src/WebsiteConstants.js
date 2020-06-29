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

export const cookieKeyNames = [
    'hasConsentSet',
    'userChoice',
    'dogChoice',
    'score',
    'ownerResponseTaskCompleted',
    'xrayResponseTaskCompleted',
    'ultrsoundType1',
    'ultrsoundType2',
    'percentProgress',
    'certificateSubmissionId'
]


const WebsiteConstants = ()  => {
    const constants = {}
    constants.dogName = dogName
    return {}
}

export default WebsiteConstants