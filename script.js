// Traditional Chinese Learning Game - Main Script
class ChineseLearningGame {
    constructor() {
        this.currentMode = null;
        this.currentQuestion = 0;
        this.score = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 0;
        this.questions = [];
        this.gameStats = this.loadStats();
        
        // Pronunciation system preference
        this.pronunciationSystem = localStorage.getItem('pronunciationSystem') || 'zhuyin';
        
        // Stroke order guide visibility - start hidden by default
        this.guideVisible = false;
        
        this.initializeElements();
        this.bindEvents();
        this.createFloatingCharacters();
        this.showMenu();
        this.updatePronunciationToggle();
    }

    initializeElements() {
        // Screen elements
        this.menuScreen = document.getElementById('menu');
        this.gameScreen = document.getElementById('game-screen');
        this.resultsScreen = document.getElementById('results-screen');
        
        // Game mode elements
        this.characterRecognitionGame = document.getElementById('character-recognition-game');
        this.vocabularyBuilderGame = document.getElementById('vocabulary-builder-game');
        this.zhuyinPracticeGame = document.getElementById('zhuyin-practice-game');
        this.strokeOrderGame = document.getElementById('stroke-order-game');
        this.sentenceScrambleGame = document.getElementById('sentence-scramble-game');
        this.similarCharactersGame = document.getElementById('similar-characters-game');
        
        // Character Recognition Options
        this.characterOptionsPanel = document.getElementById('character-options-panel');
        this.characterGameContent = document.getElementById('character-game-content');
        this.charGameMode = document.getElementById('char-game-mode');
        this.charQuestionType = document.getElementById('char-question-type');
        this.charDifficulty = document.getElementById('char-difficulty');
        this.charTypeFilter = document.getElementById('char-type-filter');
        this.charTimerMode = document.getElementById('char-timer-mode');
        this.charHintMode = document.getElementById('char-hint-mode');
        this.charAudioMode = document.getElementById('char-audio-mode');
        this.customChoicesGroup = document.getElementById('custom-choices-group');
        this.customChoicesInput = document.getElementById('custom-choices');
        
        // Character Recognition Game Elements
        this.charTimer = document.getElementById('char-timer');
        this.charQuestionCounter = document.getElementById('char-question-counter');
        this.charHintBtn = document.getElementById('char-hint-btn');
        this.charSkipBtn = document.getElementById('char-skip-btn');
        this.charQuestionDisplay = document.getElementById('char-question-display');
        this.charHintArea = document.getElementById('char-hint-area');
        this.charAudioBtn = document.getElementById('char-audio-btn');
        this.characterOptions = document.getElementById('character-options');
        this.charTextInputSection = document.getElementById('char-text-input-section');
        this.charTextInput = document.getElementById('char-text-input');
        this.charSubmitText = document.getElementById('char-submit-text');
        this.charTrueFalseSection = document.getElementById('char-true-false-section');
        this.charTFStatement = document.getElementById('char-tf-statement');
        this.charTrueBtn = document.getElementById('char-true-btn');
        this.charFalseBtn = document.getElementById('char-false-btn');
        
        // UI elements
        this.scoreElement = document.getElementById('score');
        this.streakElement = document.getElementById('streak');
        this.progressElement = document.getElementById('progress');
        this.feedbackElement = document.getElementById('feedback');
        this.currentGameTitle = document.getElementById('current-game-title');
        
        // Button elements
        this.backBtn = document.getElementById('back-btn');
        this.nextQuestionBtn = document.getElementById('next-question');
        this.playAgainBtn = document.getElementById('play-again-btn');
        this.menuBtn = document.getElementById('menu-btn');
        this.submitZhuyinBtn = document.getElementById('submit-zhuyin');
        this.playAudioBtn = document.getElementById('play-audio-btn');
        this.showZhuyinBtn = document.getElementById('show-zhuyin-btn');
        this.checkSentenceBtn = document.getElementById('check-sentence-btn');
        
        // Input elements
        this.zhuyinInput = document.getElementById('zhuyin-input');
        
        // Sentence scramble elements
        this.wordBank = document.getElementById('word-bank');
        this.wordsContainer = document.getElementById('words-container');
        this.sentenceSlots = document.getElementById('sentence-slots');
        this.englishHint = document.getElementById('english-hint');
        this.zhuyinHint = document.getElementById('zhuyin-hint');
        
        // Audio support
        this.speechSynthesis = window.speechSynthesis;
        this.currentQuestion = null;
        
        // Character Recognition specific properties
        this.charTimer = null;
        this.charTimeLeft = 15; // Reduced from 30 to 15 seconds for more challenge
        this.charCurrentMode = 'mixed'; // Default to mixed mode for more challenge
        this.charCurrentType = 'multiple-choice';
        this.charCurrentDifficulty = 'beginner'; // Default to Easy Start level
        this.charShowHints = false; // Hints disabled by default for more challenge
        this.charAudioEnabled = false;
        this.charTimerEnabled = true; // Timer enabled by default for more challenge
        this.charHintUsed = false;
    }

    createFloatingCharacters() {
        // Create floating characters container
        const floatingContainer = document.createElement('div');
        floatingContainer.className = 'floating-characters';
        document.body.appendChild(floatingContainer);

        // Chinese characters for floating animation
        const characters = ['學', '習', '中', '文', '字', '詞', '語', '言', '智', '慧', '知', '識', '思', '考', '創', '造'];
        
        // Create 9 floating characters
        for (let i = 0; i < 9; i++) {
            const charElement = document.createElement('div');
            charElement.className = 'floating-char';
            charElement.textContent = characters[Math.floor(Math.random() * characters.length)];
            floatingContainer.appendChild(charElement);
        }

        // Periodically change characters
        setInterval(() => {
            const floatingChars = document.querySelectorAll('.floating-char');
            floatingChars.forEach(char => {
                if (Math.random() > 0.7) { // 30% chance to change
                    char.textContent = characters[Math.floor(Math.random() * characters.length)];
                }
            });
        }, 5000);
    }

    changeBackgroundTheme(mode) {
        // Remove all background classes
        document.body.classList.remove(
            'character-recognition-bg', 
            'vocabulary-builder-bg', 
            'zhuyin-practice-bg', 
            'stroke-order-bg',
            'sentence-scramble-bg',
            'similar-characters-bg'
        );
        
        // Add specific background class if mode is provided
        if (mode) {
            document.body.classList.add(`${mode}-bg`);
        }
    }

    bindEvents() {
        // Game mode selection
        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const mode = card.dataset.mode;
                this.startGame(mode);
            });
        });

        // Menu tab navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const section = tab.dataset.section;
                this.switchMenuSection(section);
            });
        });

        // Save/Load event listeners
        const exportBtn = document.getElementById('export-save-btn');
        const importBtn = document.getElementById('import-save-btn');
        const importFileInput = document.getElementById('import-file-input');
        const resetBtn = document.getElementById('reset-progress-btn');
        
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportSaveData());
        }
        
        if (importBtn) {
            importBtn.addEventListener('click', () => this.importSaveData());
        }
        
        // Copy save code button
        const copyBtn = document.getElementById('copy-save-code');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => this.copyToClipboard());
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetProgress());
        }

        // Navigation buttons
        this.backBtn.addEventListener('click', () => this.showMenu());
        this.nextQuestionBtn.addEventListener('click', () => this.nextQuestion());
        this.playAgainBtn.addEventListener('click', () => this.startGame(this.currentMode));
        this.menuBtn.addEventListener('click', () => this.showMenu());
        
        // Pronunciation toggle
        const pronunciationToggle = document.getElementById('pronunciation-toggle');
        if (pronunciationToggle) {
            pronunciationToggle.addEventListener('click', () => this.togglePronunciationSystem());
        }
        
        // Similar characters controls
        const showExplanationBtn = document.getElementById('show-explanation-btn');
        const nextComparisonBtn = document.getElementById('next-comparison-btn');
        if (showExplanationBtn) {
            showExplanationBtn.addEventListener('click', () => this.showExplanation());
        }
        if (nextComparisonBtn) {
            nextComparisonBtn.addEventListener('click', () => this.nextComparison());
        }
        
        // Zhuyin input
        this.submitZhuyinBtn.addEventListener('click', () => this.checkZhuyinAnswer());
        this.zhuyinInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkZhuyinAnswer();
            }
        });

        // Sentence scramble controls
        if (this.playAudioBtn) {
            this.playAudioBtn.addEventListener('click', () => this.playAudio());
        }
        if (this.showZhuyinBtn) {
            this.showZhuyinBtn.addEventListener('click', () => this.toggleZhuyin());
        }
        if (this.checkSentenceBtn) {
            this.checkSentenceBtn.addEventListener('click', () => this.checkSentenceOrder());
        }

        // Zhuyin keyboard buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('zhuyin-btn')) {
                // Add button press animation
                e.target.classList.add('pressed');
                setTimeout(() => {
                    e.target.classList.remove('pressed');
                }, 200);
                
                this.addZhuyinSymbol(e.target.dataset.zhuyin);
            }
        });

        // Clear zhuyin button
        const clearZhuyinBtn = document.getElementById('clear-zhuyin');
        if (clearZhuyinBtn) {
            clearZhuyinBtn.addEventListener('click', () => this.clearZhuyinInput());
        }

        // Backspace zhuyin button
        const backspaceZhuyinBtn = document.getElementById('backspace-zhuyin');
        if (backspaceZhuyinBtn) {
            backspaceZhuyinBtn.addEventListener('click', () => this.backspaceZhuyinInput());
        }

        // Character Recognition Event Handlers        
        if (this.charHintBtn) {
            this.charHintBtn.addEventListener('click', () => this.showCharHint());
        }
        
        if (this.charSkipBtn) {
            this.charSkipBtn.addEventListener('click', () => this.skipCharQuestion());
        }
        
        if (this.charAudioBtn) {
            this.charAudioBtn.addEventListener('click', () => this.playCharAudio());
        }
        
        if (this.charSubmitText) {
            this.charSubmitText.addEventListener('click', () => this.checkCharTextAnswer());
        }
        
        if (this.charTextInput) {
            this.charTextInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.checkCharTextAnswer();
                }
            });
        }
        
        if (this.charTrueBtn) {
            this.charTrueBtn.addEventListener('click', () => this.checkCharTrueFalse(true));
        }
        
        if (this.charFalseBtn) {
            this.charFalseBtn.addEventListener('click', () => this.checkCharTrueFalse(false));
        }
        
        // Handle custom difficulty selection
        if (this.charDifficulty) {
            this.charDifficulty.addEventListener('change', () => this.handleDifficultyChange());
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.showMenu();
            }
        });
    }

    handleDifficultyChange() {
        const selectedDifficulty = this.charDifficulty.value;
        if (selectedDifficulty === 'custom') {
            this.customChoicesGroup.style.display = 'block';
        } else {
            this.customChoicesGroup.style.display = 'none';
        }
        
        // Show extreme challenge warning for ultra-high difficulties
        this.updateDifficultyWarning(selectedDifficulty);
    }

    updateDifficultyWarning(difficulty) {
        // Remove any existing extreme challenge indicators
        const existingIndicator = document.querySelector('.extreme-challenge-indicator');
        if (existingIndicator) {
            existingIndicator.remove();
        }
        
        const extremeDifficulties = ['legendary', 'mythical'];
        if (extremeDifficulties.includes(difficulty)) {
            const warningDiv = document.createElement('div');
            warningDiv.className = 'extreme-challenge-indicator';
            warningDiv.innerHTML = `
                🔥 EXTREME CHALLENGE MODE 🔥<br>
                ${difficulty.toUpperCase()} difficulty selected!<br>
                This is designed for advanced learners only.
            `;
            this.charDifficulty.parentNode.insertAdjacentElement('afterend', warningDiv);
        }
    }

    showMenu() {
        this.hideAllScreens();
        this.menuScreen.classList.remove('hidden');
        this.updateScoreDisplay();
        this.changeBackgroundTheme(); // Reset to default background
        
        // Populate achievements when showing menu
        this.populateAchievements();
    }

    hideAllScreens() {
        this.menuScreen.classList.add('hidden');
        this.gameScreen.classList.add('hidden');
        this.resultsScreen.classList.add('hidden');
    }

    hideAllGameModes() {
        this.characterRecognitionGame.classList.add('hidden');
        this.vocabularyBuilderGame.classList.add('hidden');
        this.zhuyinPracticeGame.classList.add('hidden');
        this.strokeOrderGame.classList.add('hidden');
        this.sentenceScrambleGame.classList.add('hidden');
        this.similarCharactersGame.classList.add('hidden');
        
        // Reset similar characters display state when hiding games
        this.resetSimilarCharactersDisplay();
    }

    startGame(mode) {
        this.currentMode = mode;
        
        this.currentQuestion = 0;
        this.score = 0;
        this.streak = 0;
        this.correctAnswers = 0;
        this.totalQuestions = gameConfig.questionsPerGame;
        
        this.generateQuestions(mode);
        this.showGame(mode);
        this.showQuestion();
        this.changeBackgroundTheme(mode); // Change background based on game mode
    }

    generateQuestions(mode) {
        this.questions = [];
        
        switch (mode) {
            case 'character-recognition':
                this.questions = gameUtils.getRandomItems(gameData.characterRecognition, this.totalQuestions);
                break;
            case 'vocabulary-builder':
                this.questions = gameUtils.getRandomItems(gameData.vocabulary, this.totalQuestions);
                break;
            case 'zhuyin-practice':
                this.questions = gameUtils.getRandomItems(gameData.characterRecognition, this.totalQuestions);
                break;
            case 'stroke-order':
                this.questions = gameUtils.getRandomItems(gameData.strokeOrder, this.totalQuestions);
                break;
            case 'sentence-scramble':
                this.questions = gameUtils.getRandomItems(gameData.sentenceScramble, this.totalQuestions);
                break;
            case 'similar-characters':
                this.questions = gameUtils.getRandomItems(gameData.similarCharacters, this.totalQuestions);
                break;
        }
    }

    showGame(mode) {
        this.hideAllScreens();
        this.hideAllGameModes();
        this.gameScreen.classList.remove('hidden');
        
        const titles = {
            'character-recognition': 'Character Recognition',
            'vocabulary-builder': 'Vocabulary Builder',
            'zhuyin-practice': this.pronunciationSystem === 'zhuyin' ? 'Zhuyin Practice (注音)' : 'Pinyin Practice (拼音)',
            'stroke-order': 'Stroke Order',
            'sentence-scramble': 'Sentence Scramble (句子重組)',
            'similar-characters': 'Similar Characters (辨字)'
        };
        
        this.currentGameTitle.textContent = titles[mode];
        document.getElementById(`${mode}-game`).classList.remove('hidden');
        
        // Special handling for character recognition to ensure game content is visible
        if (mode === 'character-recognition') {
            // Hide options panel and show game content
            const optionsPanel = document.getElementById('character-options-panel');
            const gameContent = document.getElementById('character-game-content');
            
            if (optionsPanel) optionsPanel.classList.add('hidden');
            if (gameContent) gameContent.classList.remove('hidden');
        }
        
        this.updateProgress();
    }

    showQuestion() {
        this.clearFeedback();
        this.nextQuestionBtn.classList.add('hidden');
        
        const question = this.questions[this.currentQuestion];
        
        switch (this.currentMode) {
            case 'character-recognition':
                this.updateQuestionCounter(); // Update counter for character recognition
                this.showCharacterRecognitionQuestion(question);
                break;
            case 'vocabulary-builder':
                this.showVocabularyBuilderQuestion(question);
                break;
            case 'zhuyin-practice':
                this.showZhuyinPracticeQuestion(question);
                break;
            case 'stroke-order':
                this.showStrokeOrderQuestion(question);
                break;
            case 'sentence-scramble':
                this.showSentenceScrambleQuestion(question);
                break;
            case 'similar-characters':
                this.showSimilarCharactersQuestion(question);
                break;
        }
    }











    displayQuestionByMode(question) {
        console.log('displayQuestionByMode called with mode:', this.charCurrentMode);
        console.log('Question data:', question);
        let questionHtml = '';
        
        switch (this.charCurrentMode) {
            case 'standard':
                const pronunciation = this.getPronunciation(question);
                questionHtml = `
                    <div class="pronunciation-container">
                        <div class="pronunciation-display ${this.pronunciationSystem === 'zhuyin' ? 'zhuyin-vertical' : 'pinyin-horizontal'}">
                            ${pronunciation}
                        </div>
                    </div>
                    <div style="font-size: 1.2rem; color: #666; margin-top: 10px;">
                        (${question.meaning})
                    </div>
                `;
                break;
            
            case 'reverse':
                const reversePronunciation = this.getPronunciation(question);
                questionHtml = `
                    <div style="font-size: 3rem; color: #667eea; font-family: 'Noto Sans TC', sans-serif; margin-bottom: 10px;">
                        ${question.character}
                    </div>
                    <div class="pronunciation-container-small">
                        <div class="pronunciation-display-small ${this.pronunciationSystem === 'zhuyin' ? 'zhuyin-vertical-small' : 'pinyin-horizontal-small'}">
                            ${reversePronunciation}
                        </div>
                    </div>
                    <div style="font-size: 1.2rem; color: #666;">
                        What does this mean?
                    </div>
                `;
                break;
            
            case 'audio':
                questionHtml = `
                    <div style="font-size: 2rem; color: #667eea; margin-bottom: 20px;">
                        🔊 Listen and choose the correct character
                    </div>
                `;
                // Auto-play audio if enabled
                if (this.charAudioEnabled) {
                    setTimeout(() => this.playCharAudio(), 500);
                }
                break;
            
            case 'meaning':
                questionHtml = `
                    <div style="font-size: 2.5rem; color: #667eea; margin-bottom: 10px;">
                        ${question.meaning}
                    </div>
                    <div style="font-size: 1.2rem; color: #666;">
                        Choose the correct character
                    </div>
                `;
                break;
            
            case 'mixed':
                const modes = ['standard', 'reverse', 'meaning'];
                const randomMode = modes[Math.floor(Math.random() * modes.length)];
                this.charCurrentMode = randomMode;
                this.displayQuestionByMode(question);
                this.charCurrentMode = 'mixed'; // Reset to mixed
                return;
        }
        
        console.log('Generated HTML:', questionHtml);
        console.log('charQuestionDisplay element:', this.charQuestionDisplay);
        
        if (this.charQuestionDisplay) {
            this.charQuestionDisplay.innerHTML = questionHtml;
            console.log('Question HTML set successfully');
        } else {
            console.error('charQuestionDisplay element not found!');
        }
    }

    showAnswerSection(question) {
        console.log('showAnswerSection called with type:', this.charCurrentType);
        switch (this.charCurrentType) {
            case 'multiple-choice':
                console.log('Calling showMultipleChoice');
                this.showMultipleChoice(question);
                break;
            case 'text-input':
                console.log('Calling showTextInput');
                this.showTextInput(question);
                break;
            case 'true-false':
                console.log('Calling showTrueFalse');
                this.showTrueFalse(question);
                break;
            default:
                console.error('Unknown question type:', this.charCurrentType);
        }
        console.log('showAnswerSection complete');
    }

    showMultipleChoice(question) {
        console.log('showMultipleChoice called');
        console.log('characterOptions element:', this.characterOptions);
        console.log('Current difficulty:', this.charCurrentDifficulty);
        console.log('Current mode:', this.charCurrentMode);
        
        if (!this.characterOptions) {
            console.error('characterOptions element not found!');
            return;
        }
        
        this.characterOptions.style.display = 'grid';
        console.log('characterOptions display set to grid');
        
        // Determine number of options based on difficulty
        let numOptions = 4;
        switch (this.charCurrentDifficulty) {
            case 'easy': numOptions = 4; break;
            case 'medium': numOptions = 6; break;
            case 'hard': numOptions = 8; break;
            case 'expert': numOptions = 10; break;
            case 'master': numOptions = 12; break;
            case 'grandmaster': numOptions = 15; break;
            case 'legendary': numOptions = 18; break;
            case 'mythical': numOptions = 20; break;
            case 'custom': 
                numOptions = parseInt(this.customChoicesInput.value) || 8;
                numOptions = Math.max(3, Math.min(25, numOptions)); // Clamp between 3-25
                break;
            default: numOptions = 8; break;
        }
        
        console.log('Number of options determined:', numOptions);
        
        // Ensure we don't exceed available vocabulary
        const maxPossible = gameData.characterRecognition.length;
        numOptions = Math.min(numOptions, maxPossible);
        console.log('Final number of options:', numOptions);
        
        const wrongOptions = gameUtils.generateWrongOptions(question, gameData.characterRecognition, numOptions - 1);
        console.log('Wrong options generated:', wrongOptions.length);
        
        const allOptions = gameUtils.shuffleArray([question, ...wrongOptions]);
        console.log('All options (shuffled):', allOptions.length);
        
        // Apply ultra-difficulty styling for many choices
        this.characterOptions.className = numOptions >= 15 ? 'options-grid ultra-difficulty' : 'options-grid';
        
        this.characterOptions.innerHTML = '';
        console.log('characterOptions cleared');
        
        // Add challenge indicator for extreme difficulties
        if (numOptions >= 18) {
            const challengeIndicator = document.createElement('div');
            challengeIndicator.className = 'extreme-challenge-indicator';
            challengeIndicator.innerHTML = `
                ⚡ ULTRA CHALLENGE: ${numOptions} OPTIONS ⚡<br>
                Focus and take your time!
            `;
            this.characterOptions.parentNode.insertBefore(challengeIndicator, this.characterOptions);
            console.log('Challenge indicator added');
        }
        
        console.log('Creating option elements...');
        allOptions.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            
            // Display different content based on mode
            if (this.charCurrentMode === 'reverse') {
                optionElement.textContent = option.meaning;
                optionElement.dataset.correct = option.meaning === question.meaning;
            } else {
                optionElement.textContent = option.character;
                optionElement.dataset.correct = option.character === question.character;
            }
            
            console.log(`Option ${index + 1}:`, optionElement.textContent, 'Correct:', optionElement.dataset.correct);
            
            optionElement.addEventListener('click', () => {
                this.handleCharOptionClick(optionElement);
            });
            
            this.characterOptions.appendChild(optionElement);
        });
        
        console.log('All options added to DOM');
        console.log('characterOptions children count:', this.characterOptions.children.length);
        console.log('showMultipleChoice complete');
    }

    showTextInput(question) {
        this.charTextInputSection.style.display = 'block';
        this.charTextInput.value = '';
        this.charTextInput.focus();
        
        // Set placeholder based on mode
        if (this.charCurrentMode === 'reverse') {
            this.charTextInput.placeholder = 'Type the English meaning...';
        } else {
            this.charTextInput.placeholder = 'Type the Chinese character...';
        }
    }

    showTrueFalse(question) {
        this.charTrueFalseSection.style.display = 'block';
        
        // Generate true/false statement
        const isTrue = Math.random() > 0.5;
        let statementHtml = '';
        
        if (this.charCurrentMode === 'standard') {
            if (isTrue) {
                statementHtml = `
                    <div class="tf-statement-zhuyin">
                        <div class="zhuyin-part">${question.zhuyin}</div>
                        <div class="text-part">is the pronunciation of</div>
                        <div style="font-size: 2rem; color: #2d3748; font-family: 'Noto Sans TC', sans-serif;">"${question.character}"</div>
                    </div>
                `;
            } else {
                const wrongChar = gameUtils.generateWrongOptions(question, gameData.characterRecognition, 1)[0];
                statementHtml = `
                    <div class="tf-statement-zhuyin">
                        <div class="zhuyin-part">${question.zhuyin}</div>
                        <div class="text-part">is the pronunciation of</div>
                        <div style="font-size: 2rem; color: #2d3748; font-family: 'Noto Sans TC', sans-serif;">"${wrongChar.character}"</div>
                    </div>
                `;
            }
        } else if (this.charCurrentMode === 'reverse') {
            if (isTrue) {
                statementHtml = `
                    <div class="tf-statement-zhuyin">
                        <div style="font-size: 2rem; color: #2d3748; font-family: 'Noto Sans TC', sans-serif;">"${question.character}"</div>
                        <div class="text-part">means</div>
                        <div class="text-part" style="font-style: italic; color: #667eea;">"${question.meaning}"</div>
                    </div>
                `;
            } else {
                const wrongMeaning = gameUtils.generateWrongOptions(question, gameData.characterRecognition, 1)[0];
                statementHtml = `
                    <div class="tf-statement-zhuyin">
                        <div style="font-size: 2rem; color: #2d3748; font-family: 'Noto Sans TC', sans-serif;">"${question.character}"</div>
                        <div class="text-part">means</div>
                        <div class="text-part" style="font-style: italic; color: #667eea;">"${wrongMeaning.meaning}"</div>
                    </div>
                `;
            }
        }
        
        this.charTFStatement.innerHTML = statementHtml;
        this.charCurrentAnswer = isTrue;
    }

    hideAllAnswerSections() {
        this.characterOptions.style.display = 'none';
        this.charTextInputSection.style.display = 'none';
        this.charTrueFalseSection.style.display = 'none';
        
        // Clean up any extreme challenge indicators
        const indicators = document.querySelectorAll('.extreme-challenge-indicator');
        indicators.forEach(indicator => {
            if (indicator.parentNode === this.characterOptions.parentNode) {
                indicator.remove();
            }
        });
    }

    handleCharOptionClick(optionElement) {
        if (this.charTimerEnabled && this.charTimer) {
            clearInterval(this.charTimer);
        }
        
        const isCorrect = optionElement.dataset.correct === 'true';
        this.processCharacterAnswer(isCorrect);
        
        // Visual feedback
        document.querySelectorAll('.option').forEach(opt => {
            opt.style.pointerEvents = 'none';
            if (opt.dataset.correct === 'true') {
                opt.style.background = '#48bb78';
                opt.style.color = 'white';
            } else if (opt === optionElement) {
                opt.style.background = '#f56565';
                opt.style.color = 'white';
            }
        });
        
        setTimeout(() => this.nextCharacterQuestion(), 1500);
    }

    checkCharTextAnswer() {
        if (this.charTimerEnabled && this.charTimer) {
            clearInterval(this.charTimer);
        }
        
        const userAnswer = this.charTextInput.value.trim();
        let isCorrect = false;
        
        if (this.charCurrentMode === 'reverse') {
            isCorrect = userAnswer.toLowerCase() === this.currentQuestionData.meaning.toLowerCase();
        } else {
            isCorrect = userAnswer === this.currentQuestionData.character;
        }
        
        this.processCharacterAnswer(isCorrect);
        
        // Visual feedback
        this.charTextInput.style.borderColor = isCorrect ? '#48bb78' : '#f56565';
        this.charTextInput.style.backgroundColor = isCorrect ? '#f0fff4' : '#fff5f5';
        
        setTimeout(() => this.nextCharacterQuestion(), 1500);
    }

    checkCharTrueFalse(userAnswer) {
        if (this.charTimerEnabled && this.charTimer) {
            clearInterval(this.charTimer);
        }
        
        const isCorrect = userAnswer === this.charCurrentAnswer;
        this.processCharacterAnswer(isCorrect);
        
        // Visual feedback
        const correctBtn = this.charCurrentAnswer ? this.charTrueBtn : this.charFalseBtn;
        const clickedBtn = userAnswer ? this.charTrueBtn : this.charFalseBtn;
        
        correctBtn.style.background = '#48bb78';
        if (clickedBtn !== correctBtn) {
            clickedBtn.style.background = '#f56565';
        }
        
        setTimeout(() => this.nextCharacterQuestion(), 1500);
    }

    processCharacterAnswer(isCorrect) {
        if (isCorrect) {
            this.correctAnswers++;
            this.streak++;
            this.bestStreak = Math.max(this.streak, this.bestStreak);
            
            // More generous scoring system
            let points = 20; // Higher base points
            if (this.charCurrentType === 'text-input') points += 10; // More bonus for text
            if (!this.charHintUsed) points += 10; // More bonus for no hints
            if (this.streak > 1) points = Math.floor(points * 1.5); // Easier streak bonus
            
            this.score += points;
            this.showFeedback('correct', `Great job! +${points} points! 🎉`);
        } else {
            this.streak = 0;
            // Still give some points for trying
            this.score += 5;
            this.showFeedback('incorrect', `Good try! +5 points. Answer: ${this.currentQuestionData.character} (${this.currentQuestionData.meaning})`);
        }
        
        this.updateScore();
        this.updateStreak();
    }

    nextCharacterQuestion() {
        this.currentQuestion++;
        
        // Update question counter
        this.updateQuestionCounter();
        
        // Reset visual feedback
        document.querySelectorAll('.option').forEach(opt => {
            opt.style.pointerEvents = 'auto';
            opt.style.background = '';
            opt.style.color = '';
        });
        
        this.charTextInput.style.borderColor = '';
        this.charTextInput.style.backgroundColor = '';
        this.charTrueBtn.style.background = '';
        this.charFalseBtn.style.background = '';
        
        if (this.currentQuestion >= this.questions.length) {
            this.showResults();
        } else {
            this.showCharacterQuestion();
        }
    }
    
    updateQuestionCounter() {
        if (this.charQuestionCounter) {
            this.charQuestionCounter.textContent = `Question ${this.currentQuestion + 1} of ${this.questions.length}`;
        }
    }

    showCharHint() {
        if (this.charHintUsed) return;
        
        this.charHintUsed = true;
        this.charHintArea.style.display = 'block';
        
        const question = this.currentQuestionData;
        let hintText = '';
        
        switch (this.charCurrentMode) {
            case 'standard':
                hintText = `Hint: This character is often used in contexts related to "${question.meaning.split(',')[0]}"`;
                break;
            case 'reverse':
                hintText = `Hint: The pronunciation is "${question.zhuyin}"`;
                break;
            case 'audio':
                hintText = `Hint: This means "${question.meaning}"`;
                break;
            case 'meaning':
                hintText = `Hint: The pronunciation starts with "${question.zhuyin.charAt(0)}"`;
                break;
        }
        
        this.charHintArea.textContent = hintText;
    }

    skipCharQuestion() {
        if (this.charTimerEnabled && this.charTimer) {
            clearInterval(this.charTimer);
        }
        
        this.streak = 0;
        this.showFeedback('skipped', `Skipped: ${this.currentQuestionData.character} means "${this.currentQuestionData.meaning}"`);
        this.updateStreak();
        
        setTimeout(() => this.nextCharacterQuestion(), 1500);
    }

    playCharAudio() {
        if (!this.currentQuestionData) return;
        
        const utterance = new SpeechSynthesisUtterance(this.currentQuestionData.character);
        utterance.lang = 'zh-TW';
        utterance.rate = 0.8;
        this.speechSynthesis.speak(utterance);
    }

    startCharTimer() {
        // Set timer based on difficulty level
        switch (this.charCurrentDifficulty) {
            case 'easy': this.charTimeLeft = 25; break;
            case 'medium': this.charTimeLeft = 20; break;
            case 'hard': this.charTimeLeft = 15; break;
            case 'expert': this.charTimeLeft = 12; break;
            case 'master': this.charTimeLeft = 10; break;
            case 'grandmaster': this.charTimeLeft = 8; break;
            case 'legendary': this.charTimeLeft = 6; break;
            case 'mythical': this.charTimeLeft = 5; break;
            case 'custom': 
                // Scale timer based on number of choices
                const numChoices = parseInt(this.customChoicesInput.value) || 8;
                if (numChoices <= 6) this.charTimeLeft = 20;
                else if (numChoices <= 10) this.charTimeLeft = 15;
                else if (numChoices <= 15) this.charTimeLeft = 10;
                else if (numChoices <= 20) this.charTimeLeft = 7;
                else this.charTimeLeft = 5;
                break;
            default: this.charTimeLeft = 15; break;
        }
        
        this.updateTimer();
        
        this.charTimerInterval = setInterval(() => {
            this.charTimeLeft--;
            this.updateTimer();
            
            if (this.charTimeLeft <= 0) {
                clearInterval(this.charTimerInterval);
                this.skipCharQuestion();
            }
        }, 1000);
    }

    updateTimer() {
        if (this.charTimer) {
            this.charTimer.textContent = this.charTimeLeft;
            this.charTimer.style.color = this.charTimeLeft <= 10 ? '#fff' : '#fff';
            this.charTimer.style.backgroundColor = this.charTimeLeft <= 10 ? '#e53e3e' : '#ff6b6b';
        }
    }

    showCharacterRecognitionQuestion(question) {
        // Display the question (zhuyin and meaning)
        const questionDisplay = document.getElementById('char-question-display');
        if (questionDisplay) {
            questionDisplay.innerHTML = `
                <div style="font-size: 3rem; color: #667eea; margin-bottom: 20px; font-family: 'Noto Sans TC', sans-serif;">
                    ${question.zhuyin}
                </div>
                <div style="font-size: 1.5rem; color: #666; margin-bottom: 30px;">
                    ${question.meaning}
                </div>
                <div style="font-size: 1.2rem; color: #999;">
                    Choose the correct character:
                </div>
            `;
        }
        
        // Generate wrong options manually to ensure they work
        const allCharacters = gameData.characterRecognition.filter(item => item.character !== question.character);
        const wrongOptions = [];
        
        // Randomly select 3 wrong options
        for (let i = 0; i < 3 && i < allCharacters.length; i++) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length);
            const wrongOption = allCharacters.splice(randomIndex, 1)[0];
            wrongOptions.push(wrongOption);
        }
        
        // Combine correct answer with wrong options and shuffle
        const allOptions = gameUtils.shuffleArray([question, ...wrongOptions]);
        console.log('Generated options:', allOptions.map(opt => opt.character));
        
        this.showCharacterOptions(allOptions, question.character);
    }
    
    showCharacterOptions(options, correctAnswer) {
        const optionsContainer = document.getElementById('character-options');
        if (optionsContainer) {
            optionsContainer.style.display = 'flex';
            optionsContainer.style.flexDirection = 'column';
            optionsContainer.style.alignItems = 'center';
            optionsContainer.style.gap = '15px';
            optionsContainer.style.maxWidth = '400px';
            optionsContainer.style.margin = '0 auto';
            optionsContainer.innerHTML = '';
            
            options.forEach(option => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.textContent = option.character;
                optionElement.dataset.correct = option.character === correctAnswer;
                optionElement.style.width = '100%';
                optionElement.style.textAlign = 'center';
                
                optionElement.addEventListener('click', () => {
                    this.handleOptionClick(optionElement);
                });
                
                optionsContainer.appendChild(optionElement);
            });
        }
    }

    showZhuyinPracticeQuestion(question) {
        document.getElementById('zhuyin-character-question').textContent = question.character;
        document.getElementById('zhuyin-character-meaning').textContent = question.meaning;
        this.zhuyinInput.value = '';
        this.zhuyinInput.style.borderColor = '#e2e8f0';
        
        // Update interface based on pronunciation system
        const keyboardSection = document.querySelector('.zhuyin-keyboard');
        
        if (this.pronunciationSystem === 'pinyin') {
            // For pinyin, enable typing and hide the zhuyin keyboard
            this.zhuyinInput.readOnly = false;
            this.zhuyinInput.placeholder = 'Type pinyin pronunciation...';
            keyboardSection.style.display = 'none';
        } else {
            // For zhuyin, use button interface
            this.zhuyinInput.readOnly = true;
            this.zhuyinInput.placeholder = 'Use buttons below to build zhuyin (注音)...';
            keyboardSection.style.display = 'block';
        }
    }

    showVocabularyBuilderQuestion(question) {
        const isChineseToEnglish = Math.random() > 0.5;
        
        if (isChineseToEnglish) {
            document.getElementById('vocab-question').textContent = question.chinese;
            document.getElementById('translation-direction').textContent = 'Translate to English';
            
            // Generate exactly 3 wrong options
            const wrongOptions = gameUtils.generateWrongOptions(question, gameData.vocabulary, 3);
            
            // Ensure we have enough wrong options
            if (wrongOptions.length < 3) {
                console.warn('Not enough vocabulary options, padding with additional entries');
                const additionalOptions = gameData.vocabulary.filter(item => 
                    item.english !== question.english && 
                    !wrongOptions.some(wo => wo.english === item.english)
                );
                wrongOptions.push(...additionalOptions.slice(0, 3 - wrongOptions.length));
            }
            
            const allOptions = gameUtils.shuffleArray([
                { text: question.english, correct: true, source: 'correct' },
                ...wrongOptions.slice(0, 3).map(opt => ({ text: opt.english, correct: false, source: 'wrong' }))
            ]);
            
            this.showVocabOptions(allOptions, question.english);
        } else {
            document.getElementById('vocab-question').textContent = question.english;
            document.getElementById('translation-direction').textContent = 'Translate to Chinese';
            
            // Generate exactly 3 wrong options
            const wrongOptions = gameUtils.generateWrongOptions(question, gameData.vocabulary, 3);
            
            // Ensure we have enough wrong options
            if (wrongOptions.length < 3) {
                console.warn('Not enough vocabulary options, padding with additional entries');
                const additionalOptions = gameData.vocabulary.filter(item => 
                    item.chinese !== question.chinese && 
                    !wrongOptions.some(wo => wo.chinese === item.chinese)
                );
                wrongOptions.push(...additionalOptions.slice(0, 3 - wrongOptions.length));
            }
            
            const allOptions = gameUtils.shuffleArray([
                { text: question.chinese, correct: true, source: 'correct' },
                ...wrongOptions.slice(0, 3).map(opt => ({ text: opt.chinese, correct: false, source: 'wrong' }))
            ]);
            
            this.showVocabOptions(allOptions, question.chinese);
        }
    }

    showVocabOptions(options, correctAnswer) {
        const optionsContainer = document.getElementById('vocab-options');
        
        if (!optionsContainer) {
            console.error('Vocabulary options container not found!');
            return;
        }
        
        // Ensure exactly 4 options
        if (options.length !== 4) {
            console.warn(`Expected 4 options, got ${options.length}`);
        }
        
        // Clear and reset container
        optionsContainer.innerHTML = '';
        optionsContainer.className = 'options-grid'; // Reset class
        
        // Apply vertical stacked layout like character recognition
        optionsContainer.style.display = 'flex';
        optionsContainer.style.flexDirection = 'column';
        optionsContainer.style.alignItems = 'center';
        optionsContainer.style.gap = '15px';
        optionsContainer.style.maxWidth = '500px';
        optionsContainer.style.margin = '0 auto';
        optionsContainer.style.padding = '20px';
        
        console.log('Vocab options to display:', options.map(opt => ({ text: opt.text, correct: opt.correct })));
        
        options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option vocab-option';
            optionElement.textContent = option.text;
            optionElement.dataset.correct = option.correct;
            
            // Apply consistent styling like character recognition
            optionElement.style.width = '100%';
            optionElement.style.minHeight = '60px';
            optionElement.style.display = 'flex';
            optionElement.style.alignItems = 'center';
            optionElement.style.justifyContent = 'center';
            optionElement.style.textAlign = 'center';
            optionElement.style.fontSize = '1.2rem';
            optionElement.style.fontWeight = '500';
            optionElement.style.border = '2px solid #e2e8f0';
            optionElement.style.borderRadius = '12px';
            optionElement.style.background = 'linear-gradient(135deg, #ffffff, #f7fafc)';
            optionElement.style.cursor = 'pointer';
            optionElement.style.transition = 'all 0.2s ease';
            optionElement.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            
            // Add hover effect
            optionElement.addEventListener('mouseenter', () => {
                if (optionElement.style.pointerEvents !== 'none') {
                    optionElement.style.transform = 'translateY(-2px)';
                    optionElement.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.2)';
                    optionElement.style.borderColor = '#667eea';
                }
            });
            
            optionElement.addEventListener('mouseleave', () => {
                if (optionElement.style.pointerEvents !== 'none') {
                    optionElement.style.transform = 'translateY(0)';
                    optionElement.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                    optionElement.style.borderColor = '#e2e8f0';
                }
            });
            
            optionElement.addEventListener('click', () => {
                this.handleVocabOptionClick(optionElement, correctAnswer);
            });
            
            optionsContainer.appendChild(optionElement);
            console.log(`Added option ${index + 1}: "${option.text}" (correct: ${option.correct})`);
        });
        
        console.log(`Vocabulary options displayed: ${options.length} total`);
    }
    
    handleVocabOptionClick(optionElement, correctAnswer) {
        // Disable all options
        const allOptions = optionElement.parentNode.querySelectorAll('.option');
        allOptions.forEach(opt => {
            opt.style.pointerEvents = 'none';
            opt.style.cursor = 'default';
            opt.style.transform = 'translateY(0)';
        });
        
        const isCorrect = optionElement.dataset.correct === 'true';
        
        if (isCorrect) {
            // Mark correct answer
            optionElement.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
            optionElement.style.color = 'white';
            optionElement.style.borderColor = '#38a169';
            optionElement.style.boxShadow = '0 4px 12px rgba(72, 187, 120, 0.3)';
            
            this.handleCorrectAnswer();
        } else {
            // Mark selected wrong answer
            optionElement.style.background = 'linear-gradient(135deg, #f56565, #e53e3e)';
            optionElement.style.color = 'white';
            optionElement.style.borderColor = '#e53e3e';
            optionElement.style.boxShadow = '0 4px 12px rgba(245, 101, 101, 0.3)';
            
            // Highlight correct answer
            allOptions.forEach(opt => {
                if (opt.dataset.correct === 'true') {
                    opt.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
                    opt.style.color = 'white';
                    opt.style.borderColor = '#38a169';
                    opt.style.boxShadow = '0 4px 12px rgba(72, 187, 120, 0.3)';
                }
            });
            
            this.handleIncorrectAnswer();
        }
        
        // Auto-advance after showing result
        setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    }

    showStrokeOrderQuestion(question) {
        this.currentStrokeQuestion = question;
        this.currentStrokeIndex = 0;
        this.isDrawing = false;
        this.drawnStrokes = [];
        this.currentPath = [];
        
        const strokeArea = document.getElementById('stroke-area');
        
        // Create tracing interface
        strokeArea.innerHTML = `
            <div class="stroke-tracing-container">
                <div class="character-info">
                    <h3>Trace: <span class="target-char">${question.character}</span></h3>
                    <p><strong>Meaning:</strong> ${question.meaning} | <strong>Pronunciation:</strong> ${this.getPronunciation(question)}</p>
                    <div class="stroke-progress">
                        Stroke <span id="current-stroke-num">1</span> of ${question.strokeCount}
                        <div class="progress-bar-stroke">
                            <div class="progress-fill" style="width: ${(0/question.strokeCount)*100}%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="tracing-area">
                    <canvas id="tracing-canvas" width="400" height="400"></canvas>
                    <div class="stroke-guide" id="stroke-guide">
                        <div class="guide-instruction">
                            Draw stroke 1: <span class="stroke-symbol">${question.strokes[0]}</span>
                        </div>
                    </div>
                </div>
                
                <div class="tracing-controls">
                    <button id="clear-stroke" class="trace-btn clear-btn">🗑️ Clear Stroke</button>
                    <button id="skip-stroke" class="trace-btn skip-btn">⏭️ Skip Stroke</button>
                    <button id="show-guide" class="trace-btn guide-btn">👁️ Show Guide</button>
                    <button id="restart-char" class="trace-btn restart-btn">🔄 Restart</button>
                </div>
                
                <div class="tracing-feedback" id="tracing-feedback">
                    <div class="feedback-text">✏️ Draw ONE stroke at a time! Follow the green START → red END guides. The grid lines help with positioning.</div>
                </div>
            </div>
        `;
        
        // Initialize canvas and controls
        this.initializeTracingCanvas();
        this.setupTracingControls();
        
        // Reset any drawing state from previous characters
        this.isDrawing = false;
        this.currentPath = [];
        
        // Draw character guide with a small delay to ensure canvas is ready
        setTimeout(() => {
            this.drawCharacterGuide();
        }, 100);
    }
    
    initializeTracingCanvas() {
        this.canvas = document.getElementById('tracing-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvasRect = this.canvas.getBoundingClientRect();
        
        // Set canvas properties
        this.ctx.lineWidth = 8;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.strokeStyle = '#667eea';
        
        // Mouse events
        this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        this.canvas.addEventListener('mousemove', (e) => this.draw(e));
        this.canvas.addEventListener('mouseup', () => this.stopDrawing());
        this.canvas.addEventListener('mouseout', () => this.stopDrawing());
        this.canvas.addEventListener('mouseleave', () => this.stopDrawing()); // Additional safety
        
        // Touch events for mobile
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            this.canvas.dispatchEvent(mouseEvent);
        });
        
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            this.canvas.dispatchEvent(mouseEvent);
        });
        
        this.canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.stopDrawing();
        });
        
        this.canvas.addEventListener('touchcancel', (e) => {
            e.preventDefault();
            this.stopDrawing();
        });
    }
    
    setupTracingControls() {
        document.getElementById('clear-stroke').addEventListener('click', () => this.clearCurrentStroke());
        document.getElementById('skip-stroke').addEventListener('click', () => this.skipCurrentStroke());
        document.getElementById('show-guide').addEventListener('click', () => this.toggleGuide());
        document.getElementById('restart-char').addEventListener('click', () => this.restartCharacter());
    }
    
    startDrawing(e) {
        this.isDrawing = true;
        this.currentPath = [];
        const pos = this.getMousePos(e);
        this.currentPath.push(pos);
        
        this.ctx.beginPath();
        this.ctx.moveTo(pos.x, pos.y);
    }
    
    draw(e) {
        if (!this.isDrawing) return;
        
        const pos = this.getMousePos(e);
        this.currentPath.push(pos);
        
        this.ctx.lineTo(pos.x, pos.y);
        this.ctx.stroke();
    }
    
    stopDrawing() {
        if (!this.isDrawing) return;
        this.isDrawing = false;
        
        // End the current path to prevent any lingering drawing
        this.ctx.closePath();
        
        // Only analyze if we have a meaningful path
        if (this.currentPath.length > 0) {
            this.analyzeStroke();
        }
    }
    
    getMousePos(e) {
        this.canvasRect = this.canvas.getBoundingClientRect();
        return {
            x: e.clientX - this.canvasRect.left,
            y: e.clientY - this.canvasRect.top
        };
    }
    
    analyzeStroke() {
        if (this.currentPath.length < 3) {
            this.showTracingFeedback(false, "🎨 Try drawing a small line on the canvas!");
            return;
        }
        
        // Accept any drawing attempt - focus on learning, not perfection!
        const stroke = this.currentStrokeQuestion.strokes[this.currentStrokeIndex];
        const isValidStroke = this.validateStroke(stroke, this.currentPath);
        
        if (isValidStroke) {
            this.drawnStrokes.push({
                stroke: stroke,
                path: [...this.currentPath]
            });
            this.currentStrokeIndex++;
            this.updateProgress();
            
            if (this.currentStrokeIndex >= this.currentStrokeQuestion.strokes.length) {
                this.completeCharacter();
            } else {
                const encouragingMessages = [
                    `🌟 Excellent! Now draw stroke ${this.currentStrokeIndex + 1}`,
                    `✨ Perfect! Next stroke: ${this.currentStrokeIndex + 1}`,
                    `🎉 Great job! Moving to stroke ${this.currentStrokeIndex + 1}`,
                    `👏 Well done! Stroke ${this.currentStrokeIndex + 1} next`,
                    `🎨 Beautiful! Now stroke ${this.currentStrokeIndex + 1}`
                ];
                const randomMessage = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
                
                this.showTracingFeedback(true, randomMessage);
                this.updateStrokeInstruction();
                
                // Clear the canvas and redraw everything to prepare for next stroke
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.drawCharacterGuide();
                
                // Redraw all completed strokes (including the one just finished)
                this.ctx.strokeStyle = '#48bb78'; // Green for completed strokes
                this.drawnStrokes.forEach(stroke => {
                    if (stroke.path.length > 0) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(stroke.path[0].x, stroke.path[0].y);
                        stroke.path.forEach(point => {
                            this.ctx.lineTo(point.x, point.y);
                        });
                        this.ctx.stroke();
                    }
                });
                
                // Reset stroke style for next stroke
                this.ctx.strokeStyle = '#667eea';
                
                // Show guides for the next stroke
                setTimeout(() => {
                    this.drawStrokeGuideLabels();
                }, 50);
            }
        } else {
            // Automatically clear the wrong stroke and encourage retry
            this.clearCurrentStroke(false); // Don't show default message
            
            // Give specific feedback about the expected stroke
            const stroke = this.currentStrokeQuestion.strokes[this.currentStrokeIndex];
            const strokeFeedback = this.getStrokeFeedback(stroke);
            
            this.showTracingFeedback(false, strokeFeedback);
            
            // Reset the current path for a fresh start
            this.currentPath = [];
            
            // Redraw the stroke guides to help with the retry
            setTimeout(() => {
                this.drawStrokeGuideLabels();
            }, 100);
        }
    }
    
    getStrokeFeedback(expectedStroke) {
        const strokeInstructions = {
            '一': '❌ Wrong direction! Draw a horizontal line from LEFT to RIGHT →',
            '丨': '❌ Wrong direction! Draw a vertical line from TOP to BOTTOM ↓', 
            '丿': '❌ Wrong direction! Draw a diagonal line from TOP-RIGHT to BOTTOM-LEFT ↙',
            '㇏': '❌ Wrong direction! Draw a diagonal line from TOP-LEFT to BOTTOM-RIGHT ↘',
            '丶': '❌ Wrong stroke! Draw a small DOT or very short stroke •',
            '㇔': '❌ Wrong shape! Draw a HOOK: horizontal line then turn down ⌐',
            '㇕': '❌ Wrong direction! Draw an UPWARD diagonal from BOTTOM-LEFT to TOP-RIGHT ↗',
            '㇖': '❌ Wrong shape! Draw a TURNING stroke with direction changes',
            '㇉': '❌ Wrong shape! Draw a vertical line with a hook at the bottom'
        };
        
        return strokeInstructions[expectedStroke] || 
               `❌ Try again! Draw the ${expectedStroke} stroke following the green START → red END guides.`;
    }
    
    validateStroke(expectedStroke, path) {
        if (path.length < 3) return false; // Need at least a small line
        
        const start = path[0];
        const end = path[path.length - 1];
        const distance = Math.sqrt(
            Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
        );
        
        // Must be at least 20 pixels long to be meaningful
        if (distance < 20) {
            return false;
        }
        
        // Check if stroke starts near the expected position (if guides are available)
        if (this.currentStrokeQuestion.strokeGuides && 
            this.currentStrokeIndex < this.currentStrokeQuestion.strokeGuides.length) {
            const guide = this.currentStrokeQuestion.strokeGuides[this.currentStrokeIndex];
            const startDistance = Math.sqrt(
                Math.pow(start.x - guide.start.x, 2) + Math.pow(start.y - guide.start.y, 2)
            );
            
            // Allow some tolerance for start position (60 pixels)
            if (startDistance > 60) {
                return false; // Started too far from the expected start point
            }
        }
        
        // Check if stroke direction matches expected stroke type
        const deltaX = end.x - start.x;
        const deltaY = end.y - start.y;
        const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
        
        // Validate stroke type and direction
        switch (expectedStroke) {
            case '一': // Horizontal line (left to right)
                return Math.abs(deltaY) < 30 && deltaX > 20; // Mostly horizontal, left to right
                
            case '丨': // Vertical line (top to bottom) 
                return Math.abs(deltaX) < 30 && deltaY > 20; // Mostly vertical, top to bottom
                
            case '丿': // Left-falling diagonal (top-right to bottom-left)
                return deltaX < -20 && deltaY > 20; // Going left and down
                
            case '㇏': // Right-falling diagonal (top-left to bottom-right)
                return deltaX > 20 && deltaY > 20; // Going right and down
                
            case '丶': // Dot (very short stroke, any direction)
                return distance >= 5 && distance <= 50; // Small stroke
                
            case '㇔': // Hook (horizontal then vertical)
                return this.validateHookStroke(path);
                
            case '㇕': // Rising stroke (bottom-left to top-right)
                return deltaX > 20 && deltaY < -20; // Going right and up
                
            case '㇖': // Turning stroke (complex)
                return distance > 30; // More forgiving for complex strokes
                
            case '㇉': // Vertical with hook
                return deltaY > 20; // Mainly going down
                
            default:
                return distance > 15; // For unknown strokes, basic length check
        }
    }
    
    validateHookStroke(path) {
        // For hook strokes, check if there's a direction change
        if (path.length < 5) return false;
        
        const quarter = Math.floor(path.length / 4);
        const start = path[0];
        const middle = path[quarter * 2];
        const end = path[path.length - 1];
        
        // Should have both horizontal and vertical components
        const horizontalFirst = Math.abs(middle.x - start.x) > Math.abs(middle.y - start.y);
        const verticalSecond = Math.abs(end.y - middle.y) > Math.abs(end.x - middle.x);
        
        return horizontalFirst && verticalSecond;
    }
    
    getStrokeFeedback(expectedStroke) {
        const strokeInstructions = {
            '一': '❌ Wrong direction! Draw a horizontal line from LEFT to RIGHT →',
            '丨': '❌ Wrong direction! Draw a vertical line from TOP to BOTTOM ↓', 
            '丿': '❌ Wrong direction! Draw a diagonal line from TOP-RIGHT to BOTTOM-LEFT ↙',
            '㇏': '❌ Wrong direction! Draw a diagonal line from TOP-LEFT to BOTTOM-RIGHT ↘',
            '丶': '❌ Wrong stroke! Draw a small DOT or very short stroke •',
            '㇔': '❌ Wrong shape! Draw a HOOK: horizontal line then turn down ⌐',
            '㇕': '❌ Wrong direction! Draw an UPWARD diagonal from BOTTOM-LEFT to TOP-RIGHT ↗',
            '㇖': '❌ Wrong shape! Draw a TURNING stroke with direction changes',
            '㇉': '❌ Wrong shape! Draw a vertical line with a hook at the bottom'
        };
        
        return strokeInstructions[expectedStroke] || 
               `❌ Try again! Draw the ${expectedStroke} stroke following the green START → red END guides.`;
    }
    
    getStrokeName(stroke) {
        const strokeNames = {
            '一': 'horizontal line',
            '丨': 'vertical line', 
            '丿': 'left-falling stroke',
            '丶': 'dot',
            '㇔': 'hook',
            '㇕': 'rising stroke',
            '㇖': 'turning stroke',
            '㇉': 'vertical hook'
        };
        return strokeNames[stroke] || 'stroke';
    }
    
    updateProgress() {
        const progressFill = document.querySelector('.progress-fill');
        const currentStrokeNum = document.getElementById('current-stroke-num');
        
        progressFill.style.width = `${(this.currentStrokeIndex / this.currentStrokeQuestion.strokeCount) * 100}%`;
        currentStrokeNum.textContent = this.currentStrokeIndex + 1;
    }
    
    getStrokeFeedback(expectedStroke) {
        const strokeInstructions = {
            '一': '❌ Wrong direction! Draw a horizontal line from LEFT to RIGHT →',
            '丨': '❌ Wrong direction! Draw a vertical line from TOP to BOTTOM ↓', 
            '丿': '❌ Wrong direction! Draw a diagonal line from TOP-RIGHT to BOTTOM-LEFT ↙',
            '㇏': '❌ Wrong direction! Draw a diagonal line from TOP-LEFT to BOTTOM-RIGHT ↘',
            '丶': '❌ Wrong stroke! Draw a small DOT or very short stroke •',
            '㇔': '❌ Wrong shape! Draw a HOOK: horizontal line then turn down ⌐',
            '㇕': '❌ Wrong direction! Draw an UPWARD diagonal from BOTTOM-LEFT to TOP-RIGHT ↗',
            '㇖': '❌ Wrong shape! Draw a TURNING stroke with direction changes',
            '㇉': '❌ Wrong shape! Draw a vertical line with a hook at the bottom'
        };
        
        return strokeInstructions[expectedStroke] || 
               `❌ Try again! Draw the ${expectedStroke} stroke following the green START → red END guides.`;
    }

    updateStrokeInstruction() {
        if (this.currentStrokeIndex < this.currentStrokeQuestion.strokes.length) {
            const nextStroke = this.currentStrokeQuestion.strokes[this.currentStrokeIndex];
            document.querySelector('.guide-instruction').innerHTML = 
                `Draw stroke ${this.currentStrokeIndex + 1}: <span class="stroke-symbol">${nextStroke}</span>`;
        }
    }
    
    drawCharacterGuide() {
        // Only draw the character guide if explicitly enabled
        if (this.guideVisible) {
            this.ctx.save();
            this.ctx.font = '180px "Noto Sans TC", sans-serif';
            this.ctx.fillStyle = 'rgba(200, 200, 200, 0.15)'; // Much more subtle
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(this.currentStrokeQuestion.character, this.canvas.width/2, this.canvas.height/2);
            this.ctx.restore();
        }
        
        // Draw grid lines to help with stroke placement
        this.drawGuideGrid();
        
        // Draw start and end point labels for current stroke
        this.drawStrokeGuideLabels();
    }

    drawGuideGrid() {
        // Draw subtle grid lines to help with stroke placement
        this.ctx.save();
        this.ctx.strokeStyle = 'rgba(200, 200, 200, 0.2)';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([5, 5]);
        
        // Vertical center line
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 2, 50);
        this.ctx.lineTo(this.canvas.width / 2, this.canvas.height - 50);
        this.ctx.stroke();
        
        // Horizontal center line  
        this.ctx.beginPath();
        this.ctx.moveTo(50, this.canvas.height / 2);
        this.ctx.lineTo(this.canvas.width - 50, this.canvas.height / 2);
        this.ctx.stroke();
        
        this.ctx.restore();
    }
    
    drawStrokeGuideLabels() {
        if (!this.currentStrokeQuestion.strokeGuides || 
            this.currentStrokeIndex >= this.currentStrokeQuestion.strokeGuides.length) {
            // Show message when stroke guides are not available
            this.ctx.save();
            this.ctx.fillStyle = '#6b7280';
            this.ctx.font = '16px Arial';
            this.ctx.textAlign = 'center';
            
            // Safety check for stroke index
            if (this.currentStrokeIndex < this.currentStrokeQuestion.strokes.length) {
                this.ctx.fillText(
                    `Practice stroke ${this.currentStrokeIndex + 1}: ${this.currentStrokeQuestion.strokes[this.currentStrokeIndex]}`,
                    this.canvas.width / 2,
                    this.canvas.height - 30
                );
            } else {
                this.ctx.fillText(
                    `Practice strokes for ${this.currentStrokeQuestion.character}`,
                    this.canvas.width / 2,
                    this.canvas.height - 30
                );
            }
            
            this.ctx.restore();
            return;
        }
        
        const guide = this.currentStrokeQuestion.strokeGuides[this.currentStrokeIndex];
        
        this.ctx.save();
        
        // Draw start point - smaller and less intrusive
        this.ctx.fillStyle = '#22c55e'; // Green for start
        this.ctx.beginPath();
        this.ctx.arc(guide.start.x, guide.start.y, 12, 0, 2 * Math.PI);
        this.ctx.fill();
        
        // Add white border for visibility
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        
        // Draw "START" label
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 9px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('START', guide.start.x, guide.start.y);
        
        // Draw end point - smaller and less intrusive
        this.ctx.fillStyle = '#ef4444'; // Red for end
        this.ctx.beginPath();
        this.ctx.arc(guide.end.x, guide.end.y, 12, 0, 2 * Math.PI);
        this.ctx.fill();
        
        // Add white border for visibility
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        
        // Draw "END" label
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillText('END', guide.end.x, guide.end.y);
        
        // Draw arrow from start to end
        this.drawArrow(guide.start.x, guide.start.y, guide.end.x, guide.end.y);
        
        // Draw stroke description below
        this.ctx.fillStyle = '#374151';
        this.ctx.font = '16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(
            `Stroke ${this.currentStrokeIndex + 1}: ${guide.description}`,
            this.canvas.width / 2,
            this.canvas.height - 15
        );
        
        this.ctx.restore();
    }
    
    drawArrow(startX, startY, endX, endY) {
        const angle = Math.atan2(endY - startY, endX - startX);
        const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
        
        // Don't draw arrow if points are too close
        if (length < 20) return;
        
        this.ctx.save();
        this.ctx.strokeStyle = '#6366f1';
        this.ctx.fillStyle = '#6366f1';
        this.ctx.lineWidth = 3;
        
        // Draw line
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
        
        // Draw arrowhead
        const arrowLength = 15;
        const arrowAngle = Math.PI / 6;
        
        this.ctx.beginPath();
        this.ctx.moveTo(endX, endY);
        this.ctx.lineTo(
            endX - arrowLength * Math.cos(angle - arrowAngle),
            endY - arrowLength * Math.sin(angle - arrowAngle)
        );
        this.ctx.lineTo(
            endX - arrowLength * Math.cos(angle + arrowAngle),
            endY - arrowLength * Math.sin(angle + arrowAngle)
        );
        this.ctx.closePath();
        this.ctx.fill();
        
        this.ctx.restore();
    }
    
    showTracingFeedback(isCorrect, message) {
        const feedbackDiv = document.querySelector('.feedback-text');
        feedbackDiv.textContent = message;
        feedbackDiv.className = `feedback-text ${isCorrect ? 'success' : 'error'}`;
        
        setTimeout(() => {
            feedbackDiv.className = 'feedback-text';
        }, 2000);
    }
    
    clearCurrentStroke(showMessage = true) {
        // Reset drawing state to prevent any lingering paths
        this.isDrawing = false;
        this.currentPath = [];
        
        // Clear canvas completely
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Reset any ongoing path
        this.ctx.beginPath();
        
        // Redraw character guide
        this.drawCharacterGuide();
        
        // Redraw completed strokes only
        this.ctx.strokeStyle = '#48bb78'; // Green for completed strokes
        this.drawnStrokes.forEach(stroke => {
            if (stroke.path.length > 0) {
                this.ctx.beginPath();
                this.ctx.moveTo(stroke.path[0].x, stroke.path[0].y);
                stroke.path.forEach(point => {
                    this.ctx.lineTo(point.x, point.y);
                });
                this.ctx.stroke();
            }
        });
        
        // Reset stroke style for next drawing
        this.ctx.strokeStyle = '#667eea';
        this.ctx.lineWidth = 8;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        
        // Redraw stroke guides for current stroke
        this.drawStrokeGuideLabels();
        
        // Only show default message if requested
        if (showMessage) {
            this.showTracingFeedback(false, "Stroke cleared. Try drawing it again.");
        }
    }
    
    skipCurrentStroke() {
        // Mark current stroke as completed and move to next
        this.drawnStrokes.push({
            stroke: this.currentStrokeQuestion.strokes[this.currentStrokeIndex],
            path: [] // Empty path for skipped stroke
        });
        
        this.currentStrokeIndex++;
        this.updateProgress();
        
        if (this.currentStrokeIndex >= this.currentStrokeQuestion.strokes.length) {
            this.completeCharacter();
        } else {
            this.showTracingFeedback(false, `Skipped stroke. Now draw: ${this.currentStrokeQuestion.strokes[this.currentStrokeIndex]}`);
            this.updateStrokeInstruction();
        }
    }
    
    toggleGuide() {
        // Toggle character guide visibility
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.guideVisible) {
            this.guideVisible = false;
            document.getElementById('show-guide').textContent = '👁️ Show Guide';
        } else {
            this.guideVisible = true;
            this.drawCharacterGuide();
            document.getElementById('show-guide').textContent = '🙈 Hide Guide';
        }
        
        // Redraw completed strokes
        this.redrawCompletedStrokes();
    }
    
    restartCharacter() {
        this.currentStrokeIndex = 0;
        this.drawnStrokes = [];
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawCharacterGuide();
        this.updateProgress();
        this.updateStrokeInstruction();
        this.showTracingFeedback(false, "Character restarted. Begin with the first stroke.");
    }
    
    redrawCompletedStrokes() {
        this.ctx.strokeStyle = '#48bb78';
        this.drawnStrokes.forEach(stroke => {
            if (stroke.path.length > 0) {
                this.ctx.beginPath();
                this.ctx.moveTo(stroke.path[0].x, stroke.path[0].y);
                stroke.path.forEach(point => {
                    this.ctx.lineTo(point.x, point.y);
                });
                this.ctx.stroke();
            }
        });
        this.ctx.strokeStyle = '#667eea';
    }
    
    completeCharacter() {
        this.showTracingFeedback(true, `🎉 Excellent! You completed ${this.currentStrokeQuestion.character}!`);
        
        setTimeout(() => {
            this.handleCorrectAnswer();
            this.nextQuestion();
        }, 2000);
    }
    
    // Pronunciation system toggle methods
    togglePronunciationSystem() {
        this.pronunciationSystem = this.pronunciationSystem === 'zhuyin' ? 'pinyin' : 'zhuyin';
        localStorage.setItem('pronunciationSystem', this.pronunciationSystem);
        this.updatePronunciationToggle();
        
        // Show feedback
        const system = this.pronunciationSystem === 'zhuyin' ? 'Zhuyin (注音)' : 'Pinyin (拼音)';
        this.showSystemChangeNotification(`Switched to ${system}`);
    }
    
    updatePronunciationToggle() {
        const toggleBtn = document.getElementById('pronunciation-toggle');
        const toggleIcon = toggleBtn.querySelector('.toggle-icon');
        const toggleText = toggleBtn.querySelector('.toggle-text');
        
        if (this.pronunciationSystem === 'zhuyin') {
            toggleBtn.classList.remove('pinyin');
            toggleIcon.textContent = '注';
            toggleText.textContent = 'Zhuyin (注音)';
        } else {
            toggleBtn.classList.add('pinyin');
            toggleIcon.textContent = 'A';
            toggleText.textContent = 'Pinyin (拼音)';
        }
        
        // Update game card titles and descriptions
        this.updateGameCardTitles();
    }
    
    updateGameCardTitles() {
        const zhuyinCard = document.querySelector('.game-card[data-mode="zhuyin-practice"]');
        if (zhuyinCard) {
            const title = zhuyinCard.querySelector('h3');
            const description = zhuyinCard.querySelector('p');
            
            if (this.pronunciationSystem === 'pinyin') {
                title.textContent = 'Pinyin Practice';
                description.textContent = 'Practice pinyin pronunciation with plenty of time';
            } else {
                title.textContent = 'Zhuyin Practice';
                description.textContent = 'Practice zhuyin pronunciation with plenty of time';
            }
        }
    }
    
    showSystemChangeNotification(message) {
        // Remove existing notification
        const existing = document.getElementById('system-notification');
        if (existing) existing.remove();
        
        // Create notification
        const notification = document.createElement('div');
        notification.id = 'system-notification';
        notification.className = 'system-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${this.pronunciationSystem === 'zhuyin' ? '注' : 'A'}</span>
                <span class="notification-text">${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 2 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 2000);
    }
    
    // Get pronunciation based on current system
    getPronunciation(item) {
        if (this.pronunciationSystem === 'pinyin') {
            return item.pinyin || item.zhuyin; // Fallback to zhuyin if no pinyin
        }
        return item.zhuyin;
    }
    
    showSimilarCharactersQuestion(question) {
        this.currentSimilarCharacters = question;
        this.explanationShown = false;
        
        const charsComparison = document.getElementById('chars-comparison');
        const differencesExplanation = document.getElementById('differences-explanation');
        const quizSection = document.getElementById('quiz-section');
        
        // Show character comparison for reference during the quiz
        charsComparison.style.display = 'block';
        
        // Prepare character comparison display (without meanings to avoid giving away answers)
        let comparisonHtml = '<div class="characters-side-by-side">';
        comparisonHtml += '<h3 style="text-align: center; margin-bottom: 15px; color: #666;">Compare these similar characters:</h3>';
        
        question.pair.forEach(char => {
            const pronunciation = this.pronunciationSystem === 'pinyin' 
                ? question.pronunciations[char].pinyin 
                : question.pronunciations[char].zhuyin;
                
            comparisonHtml += `
                <div class="character-card">
                    <div class="char-display">${char}</div>
                    <div class="char-pronunciation">${pronunciation}</div>
                </div>
            `;
        });
        
        comparisonHtml += '</div>';
        charsComparison.innerHTML = comparisonHtml;
        
        // Initially hide the explanation (this will show detailed meanings after answering)
        differencesExplanation.style.display = 'none';
        
        // Generate quiz question
        this.generateSimilarCharacterQuiz(question);
    }
    
    generateSimilarCharacterQuiz(question) {
        const quizSection = document.getElementById('quiz-section');
        
        // Pick random character from the pair
        const randomIndex = Math.floor(Math.random() * question.pair.length);
        const targetChar = question.pair[randomIndex];
        const pronunciation = this.pronunciationSystem === 'pinyin' 
            ? question.pronunciations[targetChar].pinyin 
            : question.pronunciations[targetChar].zhuyin;
        
        // Create multiple choice with all characters in the pair + distractors
        const correctAnswer = targetChar;
        const wrongOptions = question.pair.filter(char => char !== targetChar);
        
        // Add some other similar characters as distractors
        const otherOptions = ['大', '太', '犬', '夫', '天'];
        const additionalWrong = otherOptions.filter(char => !question.pair.includes(char)).slice(0, 2);
        
        const allOptions = gameUtils.shuffleArray([correctAnswer, ...wrongOptions, ...additionalWrong]);
        
        let quizHtml = `
            <div class="quiz-question">
                <h2>📚 Similar Characters Quiz</h2>
                <p style="margin-bottom: 20px; color: #666; font-size: 1.1rem;">
                    Choose the correct character from the similar-looking options below:
                </p>
                <h3>Which character means "${question.meanings[targetChar]}" and is pronounced "${pronunciation}"?</h3>
                <div class="quiz-options" style="display: flex; flex-direction: column; align-items: center; gap: 15px; max-width: 400px; margin: 0 auto;">
        `;
        
        allOptions.forEach(option => {
            quizHtml += `
                <button class="quiz-option" data-answer="${option}" onclick="game.checkSimilarCharAnswer('${option}', '${correctAnswer}')" style="width: 100%; text-align: center;">
                    ${option}
                </button>
            `;
        });
        
        quizHtml += `
                </div>
                <div class="quiz-feedback" id="quiz-feedback"></div>
            </div>
        `;
        
        quizSection.innerHTML = quizHtml;
    }
    
    checkSimilarCharAnswer(selected, correct) {
        const feedbackDiv = document.getElementById('quiz-feedback');
        const options = document.querySelectorAll('.quiz-option');
        const charsComparison = document.getElementById('chars-comparison');
        const differencesExplanation = document.getElementById('differences-explanation');
        
        // Disable all options
        options.forEach(option => option.disabled = true);
        
        if (selected === correct) {
            feedbackDiv.innerHTML = '<div class="correct-feedback">✅ Correct! Well done!</div>';
            feedbackDiv.className = 'quiz-feedback correct';
            this.handleCorrectAnswer();
        } else {
            feedbackDiv.innerHTML = `<div class="incorrect-feedback">❌ Incorrect. The answer is ${correct}.</div>`;
            feedbackDiv.className = 'quiz-feedback incorrect';
            this.handleIncorrectAnswer();
        }
        
        // Update character comparison with full details including meanings
        const question = this.currentSimilarCharacters;
        let detailedComparisonHtml = '<div class="characters-side-by-side">';
        detailedComparisonHtml += '<h3 style="text-align: center; margin-bottom: 15px; color: #333;">Character Details:</h3>';
        
        question.pair.forEach(char => {
            const pronunciation = this.pronunciationSystem === 'pinyin' 
                ? question.pronunciations[char].pinyin 
                : question.pronunciations[char].zhuyin;
                
            detailedComparisonHtml += `
                <div class="character-card">
                    <div class="char-display">${char}</div>
                    <div class="char-pronunciation">${pronunciation}</div>
                    <div class="char-meaning">${question.meanings[char]}</div>
                </div>
            `;
        });
        
        detailedComparisonHtml += '</div>';
        charsComparison.innerHTML = detailedComparisonHtml;
        
        // Now show the character comparison and explanation for learning
        charsComparison.style.display = 'block';
        differencesExplanation.style.display = 'block';
        
        // Show the detailed explanation
        this.showExplanation();
        
        // Auto-advance after 4 seconds (longer to allow reading the explanation)
        setTimeout(() => {
            this.nextQuestion();
        }, 4000);
    }
    
    showExplanation() {
        if (!this.currentSimilarCharacters) return;
        
        const differencesExplanation = document.getElementById('differences-explanation');
        const question = this.currentSimilarCharacters;
        
        let explanationHtml = `
            <div class="explanation-content">
                <h3>Key Differences:</h3>
                <ul class="differences-list">
        `;
        
        question.differences.forEach(difference => {
            explanationHtml += `<li>${difference}</li>`;
        });
        
        explanationHtml += `
                </ul>
                <div class="memory-aid">
                    <h4>💡 Memory Aid:</h4>
                    <p>${question.mnemonics}</p>
                </div>
                <div class="examples-section">
                    <h4>📚 Examples:</h4>
                    <div class="examples-grid">
        `;
        
        question.pair.forEach(char => {
            explanationHtml += `
                <div class="example-card">
                    <h5>${char} (${question.meanings[char]}):</h5>
                    <ul>
            `;
            
            question.examples[char].forEach(example => {
                explanationHtml += `<li>${example}</li>`;
            });
            
            explanationHtml += `
                    </ul>
                </div>
            `;
        });
        
        explanationHtml += `
                    </div>
                </div>
            </div>
        `;
        
        differencesExplanation.innerHTML = explanationHtml;
        differencesExplanation.style.display = 'block';
        this.explanationShown = true;
        
        // Update button text
        document.getElementById('show-explanation-btn').textContent = '✅ Explanation Shown';
    }
    
    nextComparison() {
        if (this.explanationShown) {
            this.nextQuestion();
        } else {
            // Show a hint that they should view the explanation first
            const feedbackDiv = document.getElementById('quiz-feedback');
            feedbackDiv.innerHTML = '<div class="hint-feedback">💡 Try viewing the explanation first to learn the differences!</div>';
            feedbackDiv.className = 'quiz-feedback hint';
        }
    }

    showSentenceScrambleQuestion(question) {
        // Store current question for audio
        this.currentSentence = question;
        
        // Show English hint
        this.englishHint.textContent = question.english;
        
        // Hide zhuyin initially  
        this.zhuyinHint.classList.add('hidden');
        this.zhuyinHint.innerHTML = `<div class="zhuyin-hint-small">${question.zhuyin}</div>`;
        
        // Clear previous words
        this.wordsContainer.innerHTML = '';
        this.sentenceSlots.innerHTML = '';
        
        // Create scrambled word buttons
        const scrambledWords = gameUtils.shuffleArray([...question.words]);
        scrambledWords.forEach((word, index) => {
            const wordElement = document.createElement('div');
            wordElement.className = 'word-card';
            wordElement.textContent = word;
            wordElement.draggable = true;
            wordElement.dataset.word = word;
            wordElement.dataset.index = index;
            
            // Add click event for mobile
            wordElement.addEventListener('click', () => this.moveWordToSlot(wordElement));
            
            // Add drag events
            wordElement.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', word);
                e.dataTransfer.setData('application/json', JSON.stringify({
                    word: word,
                    sourceContainer: 'word-bank'
                }));
                wordElement.classList.add('dragging');
            });
            
            wordElement.addEventListener('dragend', () => {
                wordElement.classList.remove('dragging');
            });
            
            this.wordsContainer.appendChild(wordElement);
        });
        
        // Create sentence slots
        for (let i = 0; i < question.words.length; i++) {
            const slotElement = document.createElement('div');
            slotElement.className = 'sentence-slot';
            slotElement.dataset.position = i;
            
            // Add drop events
            slotElement.addEventListener('dragover', (e) => {
                e.preventDefault();
                slotElement.classList.add('drag-over');
            });
            
            slotElement.addEventListener('dragleave', () => {
                slotElement.classList.remove('drag-over');
            });
            
            slotElement.addEventListener('drop', (e) => {
                e.preventDefault();
                slotElement.classList.remove('drag-over');
                
                const data = JSON.parse(e.dataTransfer.getData('application/json'));
                const word = data.word;
                
                // Remove word from current slot if it exists
                const existingWord = slotElement.querySelector('.word-card');
                if (existingWord) {
                    this.returnWordToBank(existingWord);
                }
                
                // Move word to this slot
                const wordElement = document.querySelector(`[data-word="${word}"]`);
                if (wordElement) {
                    this.placeWordInSlot(wordElement, slotElement);
                }
            });
            
            // Add click event to return word to bank
            slotElement.addEventListener('click', () => {
                const wordElement = slotElement.querySelector('.word-card');
                if (wordElement) {
                    this.returnWordToBank(wordElement);
                }
            });
            
            this.sentenceSlots.appendChild(slotElement);
        }
    }

    moveWordToSlot(wordElement) {
        // Find first empty slot
        const emptySlot = this.sentenceSlots.querySelector('.sentence-slot:not(.filled)');
        if (emptySlot) {
            this.placeWordInSlot(wordElement, emptySlot);
        }
    }

    placeWordInSlot(wordElement, slotElement) {
        // Remove from word bank
        if (wordElement.parentNode === this.wordsContainer) {
            this.wordsContainer.removeChild(wordElement);
        } else {
            // Remove from previous slot
            const previousSlot = wordElement.parentNode;
            if (previousSlot.classList.contains('sentence-slot')) {
                previousSlot.classList.remove('filled');
                previousSlot.removeChild(wordElement);
            }
        }
        
        // Add to new slot
        slotElement.appendChild(wordElement);
        slotElement.classList.add('filled');
        wordElement.classList.add('in-slot');
    }

    returnWordToBank(wordElement) {
        const slot = wordElement.parentNode;
        if (slot.classList.contains('sentence-slot')) {
            slot.classList.remove('filled');
            slot.removeChild(wordElement);
        }
        
        wordElement.classList.remove('in-slot');
        this.wordsContainer.appendChild(wordElement);
    }

    checkSentenceOrder() {
        const slots = this.sentenceSlots.querySelectorAll('.sentence-slot');
        const userSentence = [];
        
        slots.forEach(slot => {
            const wordElement = slot.querySelector('.word-card');
            if (wordElement) {
                userSentence.push(wordElement.dataset.word);
            } else {
                userSentence.push(''); // Empty slot
            }
        });
        
        const correctSentence = this.currentSentence.words;
        const isCorrect = userSentence.length === correctSentence.length && 
                         userSentence.every((word, index) => word === correctSentence[index]);
        
        if (isCorrect && userSentence.every(word => word !== '')) {
            this.handleCorrectAnswer();
            // Play audio of correct sentence
            this.playAudio();
            // Highlight correct order
            slots.forEach(slot => {
                const wordElement = slot.querySelector('.word-card');
                if (wordElement) {
                    wordElement.classList.add('correct-order');
                }
            });
        } else {
            this.handleIncorrectAnswer();
            this.showFeedback(`Correct order: ${correctSentence.join(' ')}`, false);
        }
        
        this.checkSentenceBtn.disabled = true;
    }

    playAudio() {
        if (this.speechSynthesis && this.currentSentence) {
            // Cancel any ongoing speech
            this.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(this.currentSentence.sentence);
            
            // Try to use Chinese voice
            const voices = this.speechSynthesis.getVoices();
            const chineseVoice = voices.find(voice => 
                voice.lang.includes('zh') || voice.lang.includes('cmn')
            );
            
            if (chineseVoice) {
                utterance.voice = chineseVoice;
            }
            
            utterance.lang = 'zh-TW'; // Traditional Chinese
            utterance.rate = 0.8; // Slower for learning
            utterance.pitch = 1.0;
            
            this.speechSynthesis.speak(utterance);
        }
    }

    toggleZhuyin() {
        this.zhuyinHint.classList.toggle('hidden');
        const isHidden = this.zhuyinHint.classList.contains('hidden');
        this.showZhuyinBtn.textContent = isHidden ? '注音' : '隱藏注音';
    }

    addZhuyinSymbol(symbol) {
        if (this.zhuyinInput && this.currentMode === 'zhuyin-practice') {
            const currentValue = this.zhuyinInput.value;
            this.zhuyinInput.value = currentValue + symbol;
            
            // Add visual feedback to input
            this.zhuyinInput.style.borderColor = '#4299e1';
            setTimeout(() => {
                if (this.zhuyinInput) {
                    this.zhuyinInput.style.borderColor = '#e2e8f0';
                }
            }, 200);
        }
    }

    clearZhuyinInput() {
        if (this.zhuyinInput) {
            this.zhuyinInput.value = '';
            this.zhuyinInput.style.borderColor = '#e2e8f0';
            
            // Add visual feedback
            this.zhuyinInput.style.borderColor = '#f56565';
            setTimeout(() => {
                if (this.zhuyinInput) {
                    this.zhuyinInput.style.borderColor = '#e2e8f0';
                }
            }, 300);
        }
    }

    backspaceZhuyinInput() {
        if (this.zhuyinInput && this.zhuyinInput.value.length > 0) {
            // Remove the last character
            this.zhuyinInput.value = this.zhuyinInput.value.slice(0, -1);
            
            // Add visual feedback
            this.zhuyinInput.style.borderColor = '#ed8936';
            setTimeout(() => {
                if (this.zhuyinInput) {
                    this.zhuyinInput.style.borderColor = '#e2e8f0';
                }
            }, 200);
        }
    }

    handleOptionClick(optionElement) {
        // Disable all options
        const allOptions = optionElement.parentNode.querySelectorAll('.option');
        allOptions.forEach(opt => {
            opt.style.pointerEvents = 'none';
        });
        
        if (optionElement.dataset.correct === 'true') {
            optionElement.classList.add('correct');
            this.handleCorrectAnswer();
        } else {
            optionElement.classList.add('incorrect');
            // Show correct answer
            allOptions.forEach(opt => {
                if (opt.dataset.correct === 'true') {
                    opt.classList.add('correct');
                }
            });
            this.handleIncorrectAnswer();
        }
    }

    checkZhuyinAnswer() {
        const userInput = this.zhuyinInput.value.trim();
        const currentQuestion = this.questions[this.currentQuestion];
        
        // Get correct answer based on pronunciation system
        const correctAnswer = this.pronunciationSystem === 'pinyin' 
            ? currentQuestion.pinyin 
            : currentQuestion.zhuyin;
        
        // Use appropriate checking method
        const isCorrect = this.pronunciationSystem === 'pinyin'
            ? this.checkPinyinInput(userInput, correctAnswer)
            : gameUtils.checkZhuyin(userInput, correctAnswer);
        
        if (isCorrect) {
            this.handleCorrectAnswer();
            this.zhuyinInput.style.borderColor = '#38a169';
        } else {
            this.handleIncorrectAnswer();
            this.zhuyinInput.style.borderColor = '#e53e3e';
            const systemName = this.pronunciationSystem === 'pinyin' ? 'pinyin' : 'zhuyin';
            this.showFeedback(`Correct ${systemName}: ${correctAnswer}`, false);
        }
        
        this.zhuyinInput.disabled = true;
        this.submitZhuyinBtn.disabled = true;
    }
    
    checkPinyinInput(userInput, correctPinyin) {
        // Normalize both inputs for comparison
        const normalize = (str) => str.toLowerCase().replace(/\s+/g, ' ').trim();
        return normalize(userInput) === normalize(correctPinyin);
    }

    handleCorrectAnswer() {
        this.correctAnswers++;
        this.streak++;
        this.bestStreak = Math.max(this.bestStreak, this.streak);
        
        const baseScore = gameConfig.scorePerCorrect;
        const streakBonus = this.streak > 2 ? Math.floor(baseScore * gameConfig.bonusStreakMultiplier) : 0;
        const totalPoints = baseScore + streakBonus;
        this.score += totalPoints;
        
        // Encouraging messages with emojis
        const encouragingMessages = [
            `Amazing! +${totalPoints} points! 🌟 太棒了!`,
            `Perfect! +${totalPoints} points! 🎉 完美!`,
            `Excellent! +${totalPoints} points! 👏 優秀!`,
            `Well done! +${totalPoints} points! ✨ 做得好!`,
            `Great job! +${totalPoints} points! 🎊 很棒!`
        ];
        const randomMessage = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
        
        this.showFeedback(randomMessage, true);
        this.updateScoreDisplay();
        this.nextQuestionBtn.classList.remove('hidden');
    }

    handleIncorrectAnswer() {
        this.streak = 0;
        
        // Give participation points for trying!
        const participationPoints = 5;
        this.score += participationPoints;
        
        // Gentle, encouraging messages
        const encouragingMessages = [
            `Good try! +${participationPoints} points! 💪 加油!`,
            `Keep going! +${participationPoints} points! 📚 繼續努力!`,
            `No worries! +${participationPoints} points! 🌱 別擔心!`,
            `Nice attempt! +${participationPoints} points! 😊 不錯的嘗試!`,
            `You're learning! +${participationPoints} points! 🌈 你在學習!`
        ];
        const randomMessage = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
        
        this.showFeedback(randomMessage, false);
        this.updateScoreDisplay();
        this.nextQuestionBtn.classList.remove('hidden');
    }

    showFeedback(message, isCorrect) {
        this.feedbackElement.textContent = message;
        this.feedbackElement.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    }

    clearFeedback() {
        this.feedbackElement.textContent = '';
        this.feedbackElement.className = 'feedback';
        
        // Reset zhuyin input
        if (this.zhuyinInput) {
            this.zhuyinInput.disabled = false;
            this.zhuyinInput.style.borderColor = '#e2e8f0';
            this.zhuyinInput.readOnly = false;
            this.zhuyinInput.placeholder = '';
        }
        if (this.submitZhuyinBtn) {
            this.submitZhuyinBtn.disabled = false;
        }
        
        // Reset sentence scramble
        if (this.checkSentenceBtn) {
            this.checkSentenceBtn.disabled = false;
        }
        if (this.zhuyinHint) {
            this.zhuyinHint.classList.add('hidden');
        }
        if (this.showZhuyinBtn) {
            this.showZhuyinBtn.textContent = '注音';
        }
        
        // Remove correct-order highlighting
        const correctWords = document.querySelectorAll('.correct-order');
        correctWords.forEach(word => {
            word.classList.remove('correct-order');
        });
        
        // Reset similar characters display for next question
        const charsComparison = document.getElementById('chars-comparison');
        const differencesExplanation = document.getElementById('differences-explanation');
        if (charsComparison) charsComparison.style.display = 'none';
        if (differencesExplanation) differencesExplanation.style.display = 'none';
    }

    nextQuestion() {
        this.currentQuestion++;
        this.updateProgress();
        
        if (this.currentQuestion >= this.questions.length) {
            this.endGame();
        } else {
            this.showQuestion();
        }
    }

    updateProgress() {
        const percentage = (this.currentQuestion / this.questions.length) * 100;
        this.progressElement.style.width = `${percentage}%`;
    }

    updateScoreDisplay() {
        this.scoreElement.textContent = this.score;
        this.streakElement.textContent = this.streak;
    }

    endGame() {
        this.saveStats();
        this.showResults();
    }

    showResults() {
        this.hideAllScreens();
        this.resultsScreen.classList.remove('hidden');
        
        const accuracy = Math.round((this.correctAnswers / this.questions.length) * 100);
        
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('accuracy').textContent = `${accuracy}%`;
        document.getElementById('best-streak').textContent = this.bestStreak;
        
        this.showAchievements(accuracy);
    }

    showAchievements(accuracy) {
        const achievementsContainer = document.getElementById('achievements');
        achievementsContainer.innerHTML = '';
        
        const stats = {
            gamesCompleted: this.gameStats.gamesCompleted + 1,
            lastAccuracy: accuracy,
            bestStreak: this.bestStreak,
            characterRecognitionWins: this.currentMode === 'character-recognition' ? 
                this.gameStats.characterRecognitionWins + 1 : this.gameStats.characterRecognitionWins
        };
        
        const unlockedAchievements = gameConfig.achievements.filter(achievement => 
            achievement.condition(stats) && !this.gameStats.unlockedAchievements.includes(achievement.id)
        );
        
        if (unlockedAchievements.length > 0) {
            const achievementHeader = document.createElement('h3');
            achievementHeader.textContent = 'New Achievements Unlocked!';
            achievementHeader.style.color = '#4c51bf';
            achievementHeader.style.marginBottom = '15px';
            achievementsContainer.appendChild(achievementHeader);
            
            unlockedAchievements.forEach(achievement => {
                const achievementElement = document.createElement('div');
                achievementElement.innerHTML = `
                    <strong>${achievement.name}</strong><br>
                    <small>${achievement.description}</small>
                `;
                achievementElement.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
                achievementElement.style.color = 'white';
                achievementElement.style.padding = '10px 15px';
                achievementElement.style.borderRadius = '10px';
                achievementElement.style.marginBottom = '10px';
                achievementsContainer.appendChild(achievementElement);
                
                this.gameStats.unlockedAchievements.push(achievement.id);
            });
        }
    }

    saveStats() {
        this.gameStats.gamesCompleted++;
        this.gameStats.totalScore += this.score;
        this.gameStats.bestStreak = Math.max(this.gameStats.bestStreak, this.bestStreak);
        
        // Track accuracy for perfect game achievement
        const accuracy = Math.round((this.correctAnswers / this.questions.length) * 100);
        if (accuracy === 100) {
            this.gameStats.perfectGames = (this.gameStats.perfectGames || 0) + 1;
        }
        
        // Track wins per game mode
        switch (this.currentMode) {
            case 'character-recognition':
                this.gameStats.characterRecognitionWins = (this.gameStats.characterRecognitionWins || 0) + 1;
                break;
            case 'zhuyin-practice':
                this.gameStats.zhuyinWins = (this.gameStats.zhuyinWins || 0) + 1;
                break;
            case 'vocabulary-builder':
                this.gameStats.vocabularyWins = (this.gameStats.vocabularyWins || 0) + 1;
                break;
            case 'stroke-order':
                this.gameStats.strokeOrderWins = (this.gameStats.strokeOrderWins || 0) + 1;
                break;
            case 'sentence-scramble':
                this.gameStats.sentenceScrambleWins = (this.gameStats.sentenceScrambleWins || 0) + 1;
                break;
            case 'similar-characters':
                this.gameStats.similarCharactersWins = (this.gameStats.similarCharactersWins || 0) + 1;
                break;
        }
        
        // Check for new achievements
        this.checkNewAchievements();
        
        localStorage.setItem('chineseLearningGameStats', JSON.stringify(this.gameStats));
    }

    loadStats() {
        const saved = localStorage.getItem('chineseLearningGameStats');
        if (saved) {
            const stats = JSON.parse(saved);
            // Ensure all properties exist with defaults
            return {
                gamesCompleted: stats.gamesCompleted || 0,
                totalScore: stats.totalScore || 0,
                bestStreak: stats.bestStreak || 0,
                perfectGames: stats.perfectGames || 0,
                fastestGame: stats.fastestGame || 999,
                characterRecognitionWins: stats.characterRecognitionWins || 0,
                zhuyinWins: stats.zhuyinWins || 0,
                vocabularyWins: stats.vocabularyWins || 0,
                strokeOrderWins: stats.strokeOrderWins || 0,
                sentenceScrambleWins: stats.sentenceScrambleWins || 0,
                similarCharactersWins: stats.similarCharactersWins || 0,
                unlockedAchievements: stats.unlockedAchievements || [],
                achievementDates: stats.achievementDates || {}
            };
        }
        
        return {
            gamesCompleted: 0,
            totalScore: 0,
            bestStreak: 0,
            perfectGames: 0,
            fastestGame: 999,
            characterRecognitionWins: 0,
            zhuyinWins: 0,
            vocabularyWins: 0,
            strokeOrderWins: 0,
            sentenceScrambleWins: 0,
            similarCharactersWins: 0,
            unlockedAchievements: [],
            achievementDates: {}
        };
    }

    checkNewAchievements() {
        const allAchievements = [
            ...this.getProgressAchievements(),
            ...this.getPerformanceAchievements(),
            ...this.getMasteryAchievements()
        ];
        
        const newlyUnlocked = [];
        
        allAchievements.forEach(achievement => {
            // Skip if already unlocked
            if (this.gameStats.unlockedAchievements.includes(achievement.id)) {
                return;
            }
            
            // Check if condition is met
            if (achievement.condition && achievement.condition(this.gameStats)) {
                this.gameStats.unlockedAchievements.push(achievement.id);
                this.gameStats.achievementDates[achievement.id] = new Date().toLocaleDateString();
                newlyUnlocked.push(achievement);
            }
        });
        
        // Show achievement notifications for newly unlocked achievements
        if (newlyUnlocked.length > 0) {
            this.showAchievementNotifications(newlyUnlocked);
        }
        
        return newlyUnlocked;
    }

    showAchievementNotifications(achievements) {
        achievements.forEach((achievement, index) => {
            setTimeout(() => {
                this.createAchievementNotification(achievement);
            }, index * 500); // Stagger notifications
        });
    }

    createAchievementNotification(achievement) {
        // Remove any existing notification
        const existing = document.getElementById('achievement-notification');
        if (existing) existing.remove();
        
        // Create notification element
        const notification = document.createElement('div');
        notification.id = 'achievement-notification';
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-notification-content">
                <div class="achievement-notification-icon">${achievement.icon}</div>
                <div class="achievement-notification-text">
                    <div class="achievement-notification-title">🎉 Achievement Unlocked!</div>
                    <div class="achievement-notification-name">${achievement.name}</div>
                    <div class="achievement-notification-desc">${achievement.description}</div>
                </div>
                <button class="achievement-notification-close">×</button>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Add close functionality
        const closeBtn = notification.querySelector('.achievement-notification-close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.classList.add('fade-out');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
        
        // Add entrance animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
    }

    switchMenuSection(section) {
        // Remove active class from all tabs and sections
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.menu-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Reset similar characters display when switching menu sections
        this.resetSimilarCharactersDisplay();
        
        // Activate selected tab and section
        document.querySelector(`.nav-tab[data-section="${section}"]`).classList.add('active');
        
        if (section === 'achievements') {
            document.getElementById('achievements-menu').classList.add('active');
            this.populateAchievements();
        } else if (section === 'save-load') {
            document.getElementById('save-load-menu').classList.add('active');
            this.populateSaveLoadData();
        } else {
            document.getElementById('game-modes').classList.add('active');
        }
    }

    populateAchievements() {
        const stats = this.gameStats;
        
        // Update stats overview
        document.getElementById('total-games').textContent = stats.gamesCompleted || 0;
        document.getElementById('total-score').textContent = stats.totalScore || 0;
        document.getElementById('best-streak-stat').textContent = stats.bestStreak || 0;
        document.getElementById('achievements-unlocked').textContent = stats.unlockedAchievements?.length || 0;
        
        // Populate achievement categories
        this.populateAchievementCategory('progress-achievements', this.getProgressAchievements());
        this.populateAchievementCategory('performance-achievements', this.getPerformanceAchievements());
        this.populateAchievementCategory('mastery-achievements', this.getMasteryAchievements());
    }

    populateAchievementCategory(containerId, achievements) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        
        if (achievements.length === 0) {
            container.innerHTML = `
                <div class="achievements-empty">
                    <div class="achievements-empty-icon">🎯</div>
                    <h4>No achievements yet</h4>
                    <p>Play some games to unlock achievements!</p>
                </div>
            `;
            return;
        }
        
        achievements.forEach(achievement => {
            const isUnlocked = this.gameStats.unlockedAchievements?.includes(achievement.id);
            const unlockedDate = this.gameStats.achievementDates?.[achievement.id] || '';
            
            const achievementElement = document.createElement('div');
            achievementElement.className = `achievement-item ${isUnlocked ? 'unlocked' : 'locked'}`;
            
            achievementElement.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-content">
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-description">${achievement.description}</div>
                    ${isUnlocked && unlockedDate ? `<div class="achievement-date">Unlocked: ${unlockedDate}</div>` : ''}
                    ${!isUnlocked && achievement.progress !== undefined ? `
                        <div class="achievement-progress">
                            <div class="achievement-progress-fill" style="width: ${achievement.progress}%"></div>
                        </div>
                    ` : ''}
                </div>
            `;
            
            container.appendChild(achievementElement);
        });
    }

    getProgressAchievements() {
        const stats = this.gameStats;
        
        return [
            {
                id: 'first_win',
                name: 'First Steps',
                description: 'Complete your first game',
                icon: '🎯',
                condition: (stats) => stats.gamesCompleted >= 1,
                progress: Math.min(100, (stats.gamesCompleted / 1) * 100)
            },
            {
                id: 'games_5',
                name: 'Getting Started',
                description: 'Complete 5 games',
                icon: '🎮',
                condition: (stats) => stats.gamesCompleted >= 5,
                progress: Math.min(100, (stats.gamesCompleted / 5) * 100)
            },
            {
                id: 'games_10',
                name: 'Dedicated Learner',
                description: 'Complete 10 games',
                icon: '📚',
                condition: (stats) => stats.gamesCompleted >= 10,
                progress: Math.min(100, (stats.gamesCompleted / 10) * 100)
            },
            {
                id: 'games_25',
                name: 'Study Expert',
                description: 'Complete 25 games',
                icon: '🎓',
                condition: (stats) => stats.gamesCompleted >= 25,
                progress: Math.min(100, (stats.gamesCompleted / 25) * 100)
            },
            {
                id: 'games_50',
                name: 'Chinese Scholar',
                description: 'Complete 50 games',
                icon: '👨‍🎓',
                condition: (stats) => stats.gamesCompleted >= 50,
                progress: Math.min(100, (stats.gamesCompleted / 50) * 100)
            },
            {
                id: 'score_1000',
                name: 'Point Collector',
                description: 'Earn 1,000 total points',
                icon: '💎',
                condition: (stats) => stats.totalScore >= 1000,
                progress: Math.min(100, (stats.totalScore / 1000) * 100)
            }
        ];
    }

    getPerformanceAchievements() {
        const stats = this.gameStats;
        
        return [
            {
                id: 'perfect_score',
                name: 'Perfect Score',
                description: 'Get 100% accuracy in a game',
                icon: '💯',
                condition: (stats) => stats.perfectGames >= 1
            },
            {
                id: 'streak_5',
                name: 'On Fire',
                description: 'Get a streak of 5 correct answers',
                icon: '🔥',
                condition: (stats) => stats.bestStreak >= 5,
                progress: Math.min(100, (stats.bestStreak / 5) * 100)
            },
            {
                id: 'streak_10',
                name: 'Unstoppable',
                description: 'Get a streak of 10 correct answers',
                icon: '⚡',
                condition: (stats) => stats.bestStreak >= 10,
                progress: Math.min(100, (stats.bestStreak / 10) * 100)
            },
            {
                id: 'streak_15',
                name: 'Lightning Round',
                description: 'Get a streak of 15 correct answers',
                icon: '⭐',
                condition: (stats) => stats.bestStreak >= 15,
                progress: Math.min(100, (stats.bestStreak / 15) * 100)
            },
            {
                id: 'speed_demon',
                name: 'Speed Demon',
                description: 'Complete a game in under 2 minutes',
                icon: '💨',
                condition: (stats) => stats.fastestGame < 120
            }
        ];
    }

    getMasteryAchievements() {
        const stats = this.gameStats;
        
        return [
            {
                id: 'character_master',
                name: 'Character Master',
                description: 'Win 5 character recognition games',
                icon: '漢',
                condition: (stats) => stats.characterRecognitionWins >= 5,
                progress: Math.min(100, (stats.characterRecognitionWins / 5) * 100)
            },
            {
                id: 'zhuyin_expert',
                name: 'Zhuyin Expert',
                description: 'Win 5 zhuyin practice games',
                icon: '注',
                condition: (stats) => stats.zhuyinWins >= 5,
                progress: Math.min(100, (stats.zhuyinWins / 5) * 100)
            },
            {
                id: 'vocab_builder',
                name: 'Vocabulary Builder',
                description: 'Win 5 vocabulary games',
                icon: '詞',
                condition: (stats) => stats.vocabularyWins >= 5,
                progress: Math.min(100, (stats.vocabularyWins / 5) * 100)
            },
            {
                id: 'stroke_artist',
                name: 'Stroke Artist',
                description: 'Win 5 stroke order games',
                icon: '筆',
                condition: (stats) => stats.strokeOrderWins >= 5,
                progress: Math.min(100, (stats.strokeOrderWins / 5) * 100)
            },
            {
                id: 'sentence_solver',
                name: 'Sentence Solver',
                description: 'Win 5 sentence scramble games',
                icon: '句',
                condition: (stats) => stats.sentenceScrambleWins >= 5,
                progress: Math.min(100, (stats.sentenceScrambleWins / 5) * 100)
            },
            {
                id: 'character_detective',
                name: 'Character Detective',
                description: 'Win 5 similar characters games',
                icon: '🔍',
                condition: (stats) => stats.similarCharactersWins >= 5,
                progress: Math.min(100, (stats.similarCharactersWins / 5) * 100)
            },
            {
                id: 'all_rounder',
                name: 'All-Rounder',
                description: 'Win at least 3 games in each mode',
                icon: '🌟',
                condition: (stats) => {
                    return stats.characterRecognitionWins >= 3 &&
                           stats.zhuyinWins >= 3 &&
                           stats.vocabularyWins >= 3 &&
                           stats.strokeOrderWins >= 3 &&
                           stats.sentenceScrambleWins >= 3 &&
                           stats.similarCharactersWins >= 3;
                }
            }
        ];
    }

    // ==========================================
    // SAVE/LOAD FUNCTIONALITY
    // ==========================================

    populateSaveLoadData() {
        const stats = this.gameStats;
        
        // Update progress summary
        document.getElementById('save-games-completed').textContent = stats.gamesCompleted || 0;
        document.getElementById('save-total-score').textContent = stats.totalScore || 0;
        document.getElementById('save-best-streak').textContent = stats.bestStreak || 0;
        document.getElementById('save-achievements-count').textContent = stats.unlockedAchievements?.length || 0;
    }

    exportSaveData() {
        try {
            const exportBtn = document.getElementById('export-save-btn');
            const originalText = exportBtn.querySelector('.btn-text').textContent;
            
            // Show loading state
            exportBtn.classList.add('loading');
            exportBtn.querySelector('.btn-text').textContent = 'Generating Code';
            
            // Create save data object
            const saveData = {
                version: "1.0",
                exportDate: new Date().toISOString(),
                appName: "Learn Traditional Chinese",
                gameStats: this.gameStats,
                pronunciationSystem: this.pronunciationSystem
            };
            
            // Convert to JSON and encode as base64
            const dataStr = JSON.stringify(saveData);
            const saveCode = btoa(encodeURIComponent(dataStr));
            
            // Add prefix and format for readability
            const formattedSaveCode = 'CHINESE-LEARNING-' + saveCode.match(/.{1,80}/g).join('\n');
            
            // Display the save code
            const saveCodeDisplay = document.getElementById('save-code-display');
            const saveCodeText = document.getElementById('save-code-text');
            
            saveCodeText.value = formattedSaveCode;
            saveCodeDisplay.style.display = 'block';
            saveCodeDisplay.classList.add('generated');
            
            // Show success feedback
            this.showSaveLoadFeedback('success', '✅ Save code generated successfully! Copy it to save your progress.');
            
            // Reset button state
            setTimeout(() => {
                exportBtn.classList.remove('loading');
                exportBtn.querySelector('.btn-text').textContent = originalText;
            }, 1000);
            
            // Remove animation class after animation completes
            setTimeout(() => {
                saveCodeDisplay.classList.remove('generated');
            }, 500);
            
        } catch (error) {
            console.error('Export error:', error);
            this.showSaveLoadFeedback('error', '❌ Failed to generate save code. Please try again.');
            
            // Reset button state
            const exportBtn = document.getElementById('export-save-btn');
            exportBtn.classList.remove('loading');
            exportBtn.querySelector('.btn-text').textContent = 'Generate Save Code';
        }
    }

    importSaveData() {
        const importCodeText = document.getElementById('import-code-text');
        const saveCode = importCodeText.value.trim();
        
        if (!saveCode) {
            this.showSaveLoadFeedback('error', '❌ Please paste a save code first.');
            return;
        }
        
        const importBtn = document.getElementById('import-save-btn');
        const originalText = importBtn.querySelector('.btn-text').textContent;
        
        // Show loading state
        importBtn.classList.add('loading');
        importBtn.querySelector('.btn-text').textContent = 'Loading Progress';
        
        try {
            // Remove prefix and newlines
            let cleanCode = saveCode.replace(/^CHINESE-LEARNING-/, '').replace(/\n/g, '');
            
            // Decode base64 and parse JSON
            const decodedData = decodeURIComponent(atob(cleanCode));
            const saveData = JSON.parse(decodedData);
            
            // Validate save data structure
            if (!this.validateSaveData(saveData)) {
                throw new Error('Invalid save code format');
            }
            
            // Show confirmation dialog
            this.showImportConfirmation(saveData, () => {
                // User confirmed - proceed with import
                this.applySaveData(saveData);
                this.showSaveLoadFeedback('success', '✅ Progress loaded successfully!');
                
                // Refresh displays
                this.populateSaveLoadData();
                this.populateAchievements();
                
                // Clear the input
                importCodeText.value = '';
            });
            
        } catch (error) {
            console.error('Import error:', error);
            this.showSaveLoadFeedback('error', '❌ Invalid save code. Please check and try again.');
        } finally {
            // Reset button state
            importBtn.classList.remove('loading');
            importBtn.querySelector('.btn-text').textContent = originalText;
        }
    }

    validateSaveData(saveData) {
        // Check required fields
        if (!saveData || typeof saveData !== 'object') return false;
        if (!saveData.gameStats || typeof saveData.gameStats !== 'object') return false;
        
        // Check for required gameStats fields
        const requiredFields = ['gamesCompleted', 'totalScore', 'bestStreak'];
        for (const field of requiredFields) {
            if (typeof saveData.gameStats[field] !== 'number') return false;
        }
        
        return true;
    }

    showImportConfirmation(saveData, onConfirm) {
        const stats = saveData.gameStats;
        
        const modal = document.createElement('div');
        modal.className = 'import-confirmation-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <h3>⚠️ Confirm Import</h3>
                <p>This will replace your current progress with:</p>
                <div class="import-preview">
                    <div class="preview-item">
                        <span>Games Completed:</span>
                        <span>${stats.gamesCompleted || 0}</span>
                    </div>
                    <div class="preview-item">
                        <span>Total Score:</span>
                        <span>${stats.totalScore || 0}</span>
                    </div>
                    <div class="preview-item">
                        <span>Best Streak:</span>
                        <span>${stats.bestStreak || 0}</span>
                    </div>
                    <div class="preview-item">
                        <span>Achievements:</span>
                        <span>${stats.unlockedAchievements?.length || 0}</span>
                    </div>
                    ${saveData.exportDate ? `
                        <div class="preview-item">
                            <span>Backup Date:</span>
                            <span>${new Date(saveData.exportDate).toLocaleDateString()}</span>
                        </div>
                    ` : ''}
                </div>
                <p class="warning-text">⚠️ Your current progress will be lost! Make sure to export a backup first if you want to keep it.</p>
                <div class="modal-buttons">
                    <button class="modal-btn cancel-btn">Cancel</button>
                    <button class="modal-btn confirm-btn">Import Progress</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add event listeners
        modal.querySelector('.cancel-btn').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.querySelector('.confirm-btn').addEventListener('click', () => {
            modal.remove();
            onConfirm();
        });
        
        modal.querySelector('.modal-overlay').addEventListener('click', () => {
            modal.remove();
        });
        
        // Show modal with animation
        setTimeout(() => modal.classList.add('show'), 10);
    }

    applySaveData(saveData) {
        try {
            // Update game stats
            this.gameStats = {
                ...this.loadStats(), // Start with defaults
                ...saveData.gameStats  // Override with imported data
            };
            
            // Update pronunciation system if provided
            if (saveData.pronunciationSystem) {
                this.pronunciationSystem = saveData.pronunciationSystem;
                localStorage.setItem('pronunciationSystem', this.pronunciationSystem);
                this.updatePronunciationToggle();
            }
            
            // Save to localStorage
            localStorage.setItem('chineseLearningGameStats', JSON.stringify(this.gameStats));
            
            return true;
        } catch (error) {
            console.error('Error applying save data:', error);
            return false;
        }
    }

    resetProgress() {
        const modal = document.createElement('div');
        modal.className = 'reset-confirmation-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content danger-modal">
                <h3>🗑️ Reset All Progress</h3>
                <p class="danger-message">Are you absolutely sure you want to delete ALL progress?</p>
                <div class="reset-warning">
                    <div class="warning-icon">⚠️</div>
                    <div class="warning-text">
                        <strong>This action cannot be undone!</strong><br>
                        You will lose:
                        <ul>
                            <li>All game statistics</li>
                            <li>All achievements</li>
                            <li>Best scores and streaks</li>
                        </ul>
                        <strong>Consider exporting a backup first!</strong>
                    </div>
                </div>
                <div class="modal-buttons">
                    <button class="modal-btn cancel-btn">Cancel</button>
                    <button class="modal-btn danger-btn">Yes, Delete Everything</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add event listeners
        modal.querySelector('.cancel-btn').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.querySelector('.danger-btn').addEventListener('click', () => {
            // Perform reset
            localStorage.removeItem('chineseLearningGameStats');
            this.gameStats = this.loadStats(); // Reset to defaults
            
            // Show success message
            this.showSaveLoadFeedback('success', '✅ All progress has been reset!');
            
            // Refresh displays
            this.populateSaveLoadData();
            this.populateAchievements();
            this.updateScoreDisplay();
            
            modal.remove();
        });
        
        modal.querySelector('.modal-overlay').addEventListener('click', () => {
            modal.remove();
        });
        
        // Show modal with animation
        setTimeout(() => modal.classList.add('show'), 10);
    }

    showSaveLoadFeedback(type, message) {
        const feedbackElement = document.getElementById('import-feedback');
        if (!feedbackElement) return;
        
        feedbackElement.className = `import-feedback ${type}`;
        feedbackElement.textContent = message;
        
        // Auto-clear after 5 seconds
        setTimeout(() => {
            if (feedbackElement.textContent === message) {
                feedbackElement.textContent = '';
                feedbackElement.className = 'import-feedback';
            }
        }, 5000);
    }

    copyToClipboard() {
        const saveCodeText = document.getElementById('save-code-text');
        const copyBtn = document.getElementById('copy-save-code');
        
        if (!saveCodeText.value) {
            this.showSaveLoadFeedback('error', '❌ No save code to copy. Generate one first!');
            return;
        }
        
        try {
            // Select and copy the text
            saveCodeText.select();
            saveCodeText.setSelectionRange(0, 99999); // For mobile devices
            
            // Modern clipboard API
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(saveCodeText.value).then(() => {
                    this.showCopySuccess(copyBtn);
                }).catch(() => {
                    // Fallback to legacy method
                    this.legacyCopy(saveCodeText, copyBtn);
                });
            } else {
                // Legacy copy method
                this.legacyCopy(saveCodeText, copyBtn);
            }
            
        } catch (error) {
            console.error('Copy error:', error);
            this.showSaveLoadFeedback('error', '❌ Failed to copy. Please copy manually.');
        }
    }
    
    legacyCopy(textElement, button) {
        try {
            textElement.focus();
            textElement.select();
            const successful = document.execCommand('copy');
            
            if (successful) {
                this.showCopySuccess(button);
            } else {
                this.showSaveLoadFeedback('error', '❌ Copy failed. Please copy manually.');
            }
        } catch (error) {
            this.showSaveLoadFeedback('error', '❌ Copy failed. Please copy manually.');
        }
    }
    
    showCopySuccess(button) {
        // Visual feedback for successful copy
        button.classList.add('copied');
        const originalText = button.querySelector('.btn-text').textContent;
        
        button.querySelector('.btn-text').textContent = 'Copied!';
        
        this.showSaveLoadFeedback('success', '📋 Save code copied to clipboard!');
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.classList.remove('copied');
            button.querySelector('.btn-text').textContent = originalText;
        }, 2000);
    }

    resetSimilarCharactersDisplay() {
        // Only reset if elements exist (avoid errors during initialization)
        const charsComparison = document.getElementById('chars-comparison');
        const differencesExplanation = document.getElementById('differences-explanation');
        const quizSection = document.getElementById('quiz-section');
        
        if (charsComparison) {
            charsComparison.style.display = 'none';
            charsComparison.innerHTML = '';
        }
        
        if (differencesExplanation) {
            differencesExplanation.style.display = 'none';
            differencesExplanation.innerHTML = '';
        }
        
        if (quizSection) {
            quizSection.innerHTML = '';
        }
        
        // Reset current similar characters state
        this.currentSimilarCharacters = null;
        this.explanationShown = false;
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.game = new ChineseLearningGame();
});

// Add some fun animations and effects
document.addEventListener('DOMContentLoaded', () => {
    // Add floating animation to game cards
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.animation = 'fadeInUp 0.6s ease forwards';
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .game-card {
            opacity: 0;
        }
        
        .option:active {
            transform: scale(0.95);
        }
        
        .correct {
            animation: pulse 0.6s ease;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}); 