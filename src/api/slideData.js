
      ////////////////////////////////////
  
        
  
      export  const listenSection_CompareTwoDogHeartBeats_Instructions_Dudley = {
        instructionsText: 'Compare these two heart beats',
        infoText: '',
  
        additionalText: '',
        videoName1: 'dudleyHeartBeat',
        videoThumbName1: 'dudleyHeartBeat.png',
        videoUrl1: '',
        videoText1:'Poppy’s heart beat',
        videoCaptionText1:'Poppy’s heart beat',
        videoDuration1: '00:10',
  
        videoName2: 'normalHeartBeat',
        videoThumbName2: 'normalHeartBeat.png',
        videoUrl2: '',
        videoText2:'Normal heart beat',
        videoCaptionText2:'Normal heart beat',
        videoDuration2: '00:10',
  
        section: 'Listen Section',
        subSection: 'Compare two Dog Heart Beats Instructions',
        slugName: 'listen-section-compare-two-dog-heart-beats-instructions-dudley',
        continueLinkText: 'Continue',
        continueLink: '/grade-the-murmur/',
        backLinkText: 'none',
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        animationVideoName: 'none',
        accessibilityVideoText: '',
        buttonLinks: [
  
        ],
        progressPercent: '10%'
      }
      // 2 video side by side (text below timer below text), text below all video centre, continue
  
      export  const listenSection_CompareTwoDogHeartBeats_Question_Dudley = {
        questionText: 'What grade is Poppy’s heart murmur?',
        instructionsText: 'Tap the suspected grade:',
      
        optionsHeader1: 'Grade 1',
        optionsBodyText1: `Grade 1 heart murmurs are only
        audible over the point of
        maximum intensity, are difficult
        to hear and are quieter than the
        sounds of the heart.<sup>2</sup>`,
        optionIsCorrect1: 'no',
        optionLink1: '/',
  
        optionsHeader2: 'Grade 2',
        optionsBodyText2: `Grade 2 heart murmurs are
        quieter than the sounds of the
        heart, but immediately audible
        when a stethoscope is placed
        over the point of maximum
        intensity.<sup>2</sup>`,
        optionIsCorrect2: 'no',
        optionLink2: '/',
  
        optionsHeader3: 'Grade 3',
        optionsBodyText3: `Grade 3 heart murmurs are
        clinically significant. They are
        moderately loud and described
        as being as loud as the heart
        sounds.<sup>3</sup>`,
        optionIsCorrect3: 'yes',
        optionLink3: '/',
  
        optionsHeader4: 'Grade 4',
        optionsBodyText4: `Grade 4 heart murmurs are
        clinically significant. They are
        louder than the heart sounds
        and can be heard over a wide
        area.<sup>2</sup>`,
        optionIsCorrect4: 'no',
        optionLink4: '/',
  
        optionsHeader5: 'Grade 5',
        optionsBodyText5: `Grade 5 heart murmurs are
        clinically significant. They are
        very loud and have a palpable
        precordial thrill.<sup>2</sup>`,
        optionIsCorrect5: 'no',
        optionLink5: '/',
  
        optionsHeade6: 'Grade 6',
        optionsBodyText6: `Grade 6 heart murmurs are
        clinically significant. They are
        very loud, accompanied by a
        palpable precordial thrill and
        can be heard with the
        stethoscope held slightly off the
        chest wall.<sup>2</sup>`,
        optionIsCorrect6: 'no',
        optionLink6: '/',
  
        additionalText: '',
  
        section: 'Listen Section',
        subSection: 'Compare two Dog Heart Beats Question',
        slugName: 'listen-section-compare-two-dog-heart-beats-question-dudley',
        continueLinkText: '',
        continueLink: {title:'',url:''},
        backLinkText: 'Listen Again',
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        animationVideoName: 'none',
        accessibilityVideoText: '',
        buttonLinks: [],
        progressPercent: '10%'
      }
  
      export  const questionResponse2Data = {
      
        answerHeader: 'Correct',
        answerText: 'Poppy has a grade 3 heart murmur.',
        isCorrectAnswer: 'yes',
  
        additionalText: '<p>Grade 3 murmurs are moderately loud and described as being as loud as the heart sounds. About 50% of dogs with a grade 3 mitral valve disease murmur have cardiomegaly.</p><p>All dogs with a grade 3/6 heart murmur or greater should be investigated for cardiomegaly.<sup>2</sup>,<sup>3</sup></p>',
      
        section: 'Listen Section',
        subSection: 'Compare two Dog Heart Beats Correct Answer',
        slugName: 'listen-section-compare-two-dog-heart-beats-correct-answer-dudley',
        continueLinkText: 'Continue',
        continueLink: {title:'',url:''},
        backLinkText: 'none',
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        animationVideoName: 'dudletCorrect',
        accessibilityVideoText: 'dudley correct',
        buttonLinks: [],
        progressPercent: '10%'
      }
  
      export  const questionIncorrectResponse2Data = {
        
        answerHeader: 'Incorrect',
        answerText: 'Dudley has a grade 3 heart murmur.',
        isCorrectAnswer: 'no',
        additionalText: '<p>Grade 3 murmurs are moderately loud and described as being as loud as the heart sounds. About 50% of dogs with a grade 3 mitral valve disease murmur have cardiomegaly.</p><p>All dogs with a grade 3/6 heart murmur or greater should be investigated for cardiomegaly.<sup>2</sup>,<sup>3</sup></p>',
        section: 'Listen Section',
        subSection: 'Compare two Dog Heart Beats Correct Answer',
        slugName: 'listen-section-compare-two-dog-heart-beats-incorrect-answer-dudley',
        continueLinkText: 'Continue',
        continueLink: {title:'',url:''},
        backLinkText: 'none',
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        animationVideoName: 'dudletIncorrect',
        accessibilityVideoText: 'dudley incorrect',
        buttonLinks: [],
        progressPercent: '10%'
      }
  
      // DIAGNOSE
  
      export  const instructionResponse3Data = {
        questionText: 'Poppy has a grade 3/6 mitral valve murmur; choose an option to proceed',
        section: 'Diagnose Section',
        subSection: 'X-ray',
        slugName: 'diagnose-section-compare-xray-dudley',
        continueLinkText: 'none',
        continueLink: {title:'',url:''},
        backLinkText: 'Listen again',
        backLink: '/listen-section-compare-two-dog-heart-beats-question-dudley/',
        dogChoice: 'dudley',
        animationVideoName: 'dudleyNeutral',
        accessibilityVideoText: 'dudley sitting',
        buttonLinks: ['X-ray','Ultrasound','Electrocardiogram','X-ray and ultrasound','Finish appointment','Holter monitoring'],
        buttonCorrectAnswer: ['X-ray','X-ray and ultrasound','ultrasound'],
        buttonCorrectAnswerAction: [],
        buttonCorrectAnswerLinks: ['/diagnose-section-compare-xray-correct-answer-dudley/',
        '/diagnose-section-compare-xray-and-ultrasound-correct-answer-dudley/',
        '/diagnose-section-compare-ultrasound-correct-answer-dudley/'],
        buttonIncorrectAnswers: ['X-ray','X-ray and ultrasound','ultrasound'],
        buttonIncorrectAnswerActions: ['Electrocardiogram','Finish appointment','Holter monitoring'],
        buttonIncorrectAnswerLinks: ['/diagnose-section-compare-electrocardiogram-answer-dudley/',
        '/diagnose-section-compare-xray-holtermonitoring-answer-dudley/',
        '/diagnose-section-compare-xray-general-answer-dudley/'],
        progressPercent: '33%',
      }
  
      export  const questionResponse3Data = {
        answerHeader: 'correct',
        answerText: 'Cardiac ultrasound is a good tool to diagnose cardiomegaly and can pick up heart size increases earlier than X-ray. It also enables an in–depth analysis of individual cardiac chambers, heart muscle function and health of the heart valves.<sup>2</sup>',
        isCorrectAnswer: 'yes',
        additionalText:  'However, you may be more familiar interpreting X-rays than ultrasound images and X-rays are generally more readily available.',
        videoName1: 'dudleyUltraSound',
        videoThumbName1: 'dudleyUltraSound.png',
        videoUrl1: '',
        videoText1:'Learn how to identify left atrial enlargement with an ultrasound',
        videoCaptionText1:'Learn how to identify left atrial enlargement with an ultrasound',
        videoDuration1: '',
        videoNarrator1: '',
        section: 'Diagnose Section',
        subSection: 'X-ray',
        slugName: 'diagnose-section-compare-ultrasound-correct-answer-dudley',
        continueLinkText: 'Continue',
        continueLink: '/',
        backLinkText: 'none',
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        animationVideoName: 'dudleyCorrect',
        accessibilityVideoText: 'dudley happy',
        progressPercent: '33%',
        sliderHeader: 'Poppy has a grade 3 mitral valve murmur; how would you like to proceed?',
      }
  
      export  const questionResponseOther3Data = {
      
        answerHeader: 'correct',
        answerText: 'Cardiac ultrasound is a good tool to diagnose cardiomegaly and can pick up heart size increases earlier than X-ray. It also enables an in–depth analysis of individual cardiac chambers, heart muscle function and health of the heart valves.<sup>2</sup>',
        isCorrectAnswer: 'yes',
        additionalText: '<p>However, you may be more familiar interpreting X-rays than ultrasound images and X-rays are generally more readily available.<sup>2</sup></p>',
  
        videoName1: 'dudleyUltraSound',
        videoThumbName1: 'dudleyUltraSound.png',
        videoUrl1: '',
        videoText1:'Learn how to identify left atrial enlargement with an ultrasound',
        videoCaptionText1:'Learn how to identify left atrial enlargement with an ultrasound',
        videoDuration1: '',
        videoNarrator1: '',
        section: 'Diagnose Section',
        subSection: 'X-ray',
        slugName: 'diagnose-section-compare-ultrasound-correct-answer-dudley',
        continueLinkText: 'Continue',
        continueLink: '/',
        backLinkText: 'none',
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        animationVideoName: 'dudleyCorrect',
        accessibilityVideoText: 'dudley happy',
        progressPercent: '33%',
        sliderHeader: 'Poppy has a grade 3 mitral valve murmur; how would you like to proceed?',
      }
  
      export  const questionResponseAnother3Data = {
  
        answerHeader: 'correct',
        answerText: 'Both X-ray and cardiac ultrasound can be used to determine whether a dog has cardiomegaly.',
        isCorrectAnswer: 'yes',
        additionalText: '<p>There are advantages and disadvantages of each, and the test you choose is likely to come down to a number of factors, including:</p> <ul> <li>Availability of equipment</li> <li>Owner’s budget</li> <li>Owner’s preference</li> <p>You don’t always need to perform both to diagnose cardiomegaly.<sup>2</sup></p>',
        videoName1: 'dudleyUltraSound',
        videoThumbName1: 'dudleyUltraSound.png',
        videoUrl1: '',
        videoText1:'How to diagnose cardiomegaly using either X-ray or ultrasound',
        videoCaptionText1:'How to diagnose cardiomegaly using either X-ray or ultrasound',
        videoDuration1: '',
        videoNarrator1: '',
        section: 'Diagnose Section',
        subSection: 'X-ray',
        slugName: 'diagnose-section-compare-xray-or-ultrasound-correct-answer-dudley',
        continueLinkText: 'Continue',
        continueLink: '/',
        backLinkText: 'none',
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        animationVideoName: 'dudleyCorrect',
        accessibilityVideoText: 'dudley happy',
        progressPercent: '33%',
        sliderHeader: 'Poppy has a grade 3 mitral valve murmur; how would you like to proceed?',
      }
  
      export  const questionIncorrectResponse3Data = {
        
        answerHeader: 'Incorrect',
        answerText: 'This may not be the best choice for Dudley.',
        isCorrectAnswer: 'no',
        
        additionalText: '<p>An electrocardiogram (ECG) is a useful diagnostic procedure when a cardiac arrhythmia is evident during clinical examination. Since no arrhythmias were detected in Poppy, an ECG is not a priority.<sup>2</sup></p>',
      
        section: 'Diagnose Section',
        subSection: 'X-ray',
        slugName: 'diagnose-section-compare-xray-electrocardiagram-answer-dudley',
        continueLinkText: 'none',
        continueLink: {title:'',url:''},
        backLinkText: 'none',
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        animationVideoName: 'dudleyIncorrect',
        accessibilityVideoText: 'dudley unhappy',
        buttonLinks: [{title:'Try Again',url:'/'}],
        buttonsActions: ['back'],
        progressPercent: '33%',
        sliderHeader: 'Poppy has a grade 3 mitral valve murmur; how would you like to proceed?',
      }
  
      export  const questionIncorrectResponseOther3Data = {
      
        answerHeader: 'Incorrect',
        answerText: 'This may not be the best choice for Dudley.',
        isCorrectAnswer: 'no',
  
        additionalText: '<p>24-hour ambulatory (Holter) electrocardiograms (ECGs) are useful for the evaluation of cardiac arrhythmias. Since no arrhythmias were detected in Poppy, other investigations should take priority.<sup>2</sup></p>',
      
        section: 'Diagnose Section',
        subSection: 'X-ray',
        slugName: 'diagnose-section-compare-xray-holtermonitoring-answer-dudley',
        continueLinkText: 'none',
        continueLink: {title:'',url:''},
        backLinkText: 'none',
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        animationVideoName: 'dudleyIncorrect',
        accessibilityVideoText: 'dudley unhappy',
        buttonLinks: [{title:'Try Again',url:'/'}],
        buttonsActions: ['back'],
        progressPercent: '33%',
        sliderHeader: 'Poppy has a grade 3 mitral valve murmur; how would you like to proceed?',
      }
  
      export  const questionIncorrectResponseAnother3Data = {
        
        answerHeader: 'Incorrect',
        answerText: 'This may not be the best choice for Dudley.',
        isCorrectAnswer: 'no',
        additionalText: '<p>About half of dogs with a grade 3/6 mitral valve disease murmur have cardiomegaly and would benefit from treatment with Vetmedin.<sup>®</sup></p><p>Choosing not to investigate Poppy for cardiomegaly means she may be missing out on the opportunity of a longer, happier life.<sup>4</sup></p>',
        section: 'Diagnose Section',
        subSection: 'X-ray',
        slugName: 'diagnose-section-compare-xray-general-answer-dudley',
        continueLinkText: 'none',
        continueLink: {title:'',url:''},
        backLinkText: 'none',
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        animationVideoName: 'dudleyIncorrect',
        accessibilityVideoText: 'dudley unhappy',
        buttonLinks: [{title:'Try Again',url:'/'}],
        buttonsActions: ['back'],
        progressPercent: '33%',
        sliderHeader: 'Poppy has a grade 3 mitral valve murmur; how would you like to proceed?'
      }

      //TODO: - make dynamic - temp data

       export  const ownerResponse_CorrectAnswer = {
  
        answerHeader: 'Correct',
        answerText: 'It is always important to respond in a clear manner that instils confidence in the owner to follow your recommendation.',
        isCorrectAnswer: 'yes',
        additionalText: '',
        videoName1: 'dudleyUltraSound',
        videoThumbName1: 'dudleyUltraSound.png',
        videoUrl1: '',
        videoText1:'It is always important to respond in a clear manner that instils confidence in the owner to follow your recommendation.',
        videoCaptionText1:'It is always important to respond in a clear manner that instils confidence in the owner to follow your recommendation.',
        videoDuration1: '02:37',
        videoNarrator1: 'Mark Patterson',
        section: 'Diagnose Section',
        subSection: 'X-ray',
        slugName: 'diagnose-section-compare-xray-or-ultrasound-correct-answer-dudley',
       
        continueLink: {title:'Continue',url:'/xray/',uri:'/xray/'},
        
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        animationVideoName: 'dudleyCorrect',
        accessibilityVideoText: 'dudley happy',
        progressPercent: '33%',
        sliderHeader: 'Poppy has a grade 3 mitral valve murmur; how would you like to proceed?',
      }

      export  const ownerResponse_InCorrectAnswer = {
        answerHeader: 'This may not be the best way to respond',
        answerText: 'It is always important to respond in a clear mannerthat instils confidence in the owner to follow your recommendation.',
        isCorrectAnswer: 'no',
        additionalText: '',
        videoName1: 'dudleyUltraSound',
        videoThumbName1: 'dudleyUltraSound.png',
        videoUrl1: '',
        videoText1:'It is always important to respond in a clear manner that instils confidence in the owner to follow your recommendation.',
        videoCaptionText1:'It is always important to respond in a clear manner that instils confidence in the owner to follow your recommendation.',
        videoDuration1: '02:37',
        videoNarrator1: 'Mark Patterson',
        section: 'Diagnose Section',
        subSection: 'X-ray',
        slugName: 'diagnose-section-compare-xray-or-ultrasound-correct-answer-dudley',
        continueLinkText: 'Continue',
        continueLink: '/',
        backLinkText: 'none',
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        buttonLinks: [{title:'Try Again',url:'/'}],
        animationVideoName: 'dudleyCorrect',
        accessibilityVideoText: 'dudley sad',
        progressPercent: '33%',
        sliderHeader: 'Poppy has a grade 3 mitral valve murmur; how would you like to proceed?',
      }

       export  const gradeMurmur_CorrectAnswer = {
  
        answerHeader: 'Correct',
        answerText: 'Poppy has a grade 3 mitral valve disease murmur.',
        isCorrectAnswer: 'yes',
        additionalText: `<p>Grade 3 murmurs are moderately loud and described as being as loud as the heart sounds. About 50% of dogs with a grade 3 mitral valve disease murmur have cardiomegaly and this percentage increases even more as the murmur intensity increases. A mitral valve disease murmur of grade 3 or above is therefore clinically significant, since it indicates that the likelihood of cardiomegaly being present is significant.</p>
        <p>All dogs with a grade 3/6 heart murmur or greater should be investigated for cardiomegaly.2,3</p>`,
        videoName1: 'dudleyUltraSound',
        videoThumbName1: 'dudleyUltraSound.png',
        videoUrl1: '',
        videoText1:'Learn how to identify a clinically significant heart murmur including assessing the grade of murmurs.',
        videoCaptionText1:'Learn how to identify a clinically significant heart murmur including assessing the grade of murmurs.',
        videoDuration1: '02:37',
        videoNarrator1: 'Borgat',
        section: 'Diagnose Section',
        subSection: 'X-ray',
        slugName: 'diagnose-section-compare-xray-or-ultrasound-correct-answer-dudley',
       
        continueLink: {title:'Continue',url:'/xray/',uri:'/xray/'},
        
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        animationVideoName: 'dudleyCorrect',
        accessibilityVideoText: 'dudley happy',
        progressPercent: '33%',
        sliderHeader: 'Poppy has a grade 3 mitral valve murmur; how would you like to proceed?',
      }

      export const ownerTreatment_CorrectAnswer = {
  
        answerHeader: 'Correct',
        answerText: 'When talking to owners it is always important to talk in clear and concise language.',
        isCorrectAnswer: 'yes',
        additionalText: `<p></p>`,
        videoName1: 'dudleyUltraSound',
        videoThumbName1: 'dudleyUltraSound.png',
        videoUrl1: '',
        videoText1:'Learn how to identify a clinically significant heart murmur including assessing the grade of murmurs.',
        videoCaptionText1:'Learn how to identify a clinically significant heart murmur including assessing the grade of murmurs.',
        videoDuration1: '02:37',
        videoNarrator1: 'Gareth',
        section: 'Diagnose Section',
        subSection: 'X-ray',
        slugName: 'diagnose-section-compare-xray-or-ultrasound-correct-answer-dudley',
       
        continueLink: {title:'Continue',url:'/certificate-request/',uri:'/certificate-request/'},
        
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        animationVideoName: 'dudleyCorrect',
        accessibilityVideoText: 'dudley happy',
        progressPercent: '33%',
        sliderHeader: 'mmmmm',
      }

      export const gradeMurmur_InCorrectAnswer = {
        answerHeader: 'Incorrect',
        answerText: 'Poppy has a grade 3 mitral valve disease murmur.',
        isCorrectAnswer: 'no',
        additionalText: `<p>Grade 3 murmurs are moderately loud and described as being as loud as the heart sounds. About 50% of dogs with a grade 3 mitral valve disease murmur have cardiomegaly and this percentage increases even more as the murmur intensity increases. A mitral valve disease murmur of grade 3 or above is therefore clinically significant, since it indicates that the likelihood of cardiomegaly being present is significant. </p>
        <p>All dogs with a grade 3/6 heart murmur or greater should be investigated for cardiomegaly.<sup>2,3</sup></p>`,
        videoName1: 'dudleyUltraSound',
        videoThumbName1: 'dudleyUltraSound.png',
        videoUrl1: '',
        videoText1:'Build your confidence in canine cardiac auscultation; learn how to localise the heart valves and grade and describe murmurs to help you diagnose asymptomatic MVD.',
        videoCaptionText1:'Build your confidence in canine cardiac auscultation; learn how to localise the heart valves and grade and describe murmurs to help you diagnose asymptomatic MVD.',
        videoDuration1: '02:37',
        videoNarrator1: 'Nuala',
        section: 'Diagnose Section',
        subSection: 'X-ray',
        slugName: 'diagnose-section-compare-xray-or-ultrasound-correct-answer-dudley',
        continueLinkText: 'Continue',
        continueLink: '/',
        backLinkText: 'none',
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        buttonLinks: [{title:'Listen again',url:'/'}],
        animationVideoName: 'dudleyCorrect',
        accessibilityVideoText: 'dudley sad',
        progressPercent: '33%',
        sliderHeader: 'Poppy has a grade 3 mitral valve murmur; how would you like to proceed?',
      }

      export const ownerTreatment_InCorrectAnswer = {
        answerHeader: 'This may not be the best way to respond',
        answerText: 'It is always important to respond in a clear manner that instils confidence in the owner to follow your recommendation.',
        isCorrectAnswer: 'no',
        additionalText: '',
        videoName1: 'dudleyUltraSound',
        videoThumbName1: 'dudleyUltraSound.png',
        videoUrl1: '',
        videoText1:'Build your confidence in canine cardiac auscultation; learn how to localise the heart valves and grade and describe murmurs to help you diagnose asymptomatic MVD.',
        videoCaptionText1:'Build your confidence in canine cardiac auscultation; learn how to localise the heart valves and grade and describe murmurs to help you diagnose asymptomatic MVD.',
        videoDuration1: '02:37',
        videoNarrator1: 'Nuala',
        section: 'Diagnose Section',
        subSection: 'X-ray',
        slugName: 'diagnose-section-compare-xray-or-ultrasound-correct-answer-dudley',
        continueLinkText: 'Continue',
        continueLink: '/',
        backLinkText: 'none',
        backLink: {title:'',url:''},
        dogChoice: 'dudley',
        buttonLinks: [{title:'Try again',url:'/'}],
        animationVideoName: 'dudleyCorrect',
        accessibilityVideoText: 'dudley sad',
        progressPercent: '33%',
        sliderHeader: 'Poppy has a grade 3 mitral valve murmur; how would you like to proceed?',
      }


      export const gradeMurmur_Options = {
        field_questiontext: 'What grade is Poppy’s heart murmur?',
        field_instructionstext: {processed:'Select the suspected grade:'},
      
        field_optionsheader1: 'Grade 1',
        field_optionsbodytext1: `Grade 1 heart murmurs are only
        audible over the point of
        maximum intensity, are difficult
        to hear and are quieter than the
        sounds of the heart.<sup>2</sup>`,
        field_optioniscorrect1: 'no',
        optionlink1: '/',
    
        field_optionsheader2: 'Grade 2',
        field_optionsbodytext2: `Grade 2 heart murmurs are
        quieter than the sounds of the
        heart, but immediately audible
        when a stethoscope is placed
        over the point of maximum
        intensity.<sup>2</sup>`,
        field_optioniscorrect2: 'no',
        field_optionlink2: '/',
    
        field_optionsheader3: 'Grade 3',
        field_optionsbodytext3: `Grade 3 heart murmurs are
        clinically significant. They are
        moderately loud and described
        as being as loud as the heart
        sounds.<sup>3</sup>`,
        field_optioniscorrect3: 'yes',
        field_optionlink3: '/',
    
        field_optionsheader4: 'Grade 4',
        field_optionsbodytext4: `Grade 4 heart murmurs are
        clinically significant. They are
        louder than the heart sounds
        and can be heard over a wide
        area.<sup>2</sup>`,
        field_optioniscorrect4: 'no',
        field_optionlink4: '/',
    
        field_optionsheader5: 'Grade 5',
        field_optionsbodytext5: `Grade 5 heart murmurs are
        clinically significant. They are
        very loud and have a palpable
        precordial thrill.<sup>2</sup>`,
        field_optioniscorrect5: 'no',
        field_optionlink5: '/',
    
        field_optionsheader6: 'Grade 6',
        field_optionsbodytext6: `Grade 6 heart murmurs are
        clinically significant. They are
        very loud, accompanied by a
        palpable precordial thrill and
        can be heard with the
        stethoscope held slightly off the
        chest wall.<sup>2</sup>`,
        field_optioniscorrect6: 'no',
        field_optionlink6: '/',
    
        //field_additionaltext: '',
    
        // field_section: 'Listen Section',
        // field_subSection: 'Compare two Dog Heart Beats Question',
        // field_slugname: 'listen-section-compare-two-dog-heart-beats-question-dudley',
        // field_continueLinkText: '',
        // field_continueLink: {title:'',url:''},
        field_backlinktext: 'Listen Again',
        field_backlink: {title:'',url:''},
        // dogChoice: 'dudley',
        // field_animationVideoName: 'none',
        // field_accessibilityVideoText: '',
        // field_buttonLinks: [],
        // field_progressPercent: '10%'
      }


