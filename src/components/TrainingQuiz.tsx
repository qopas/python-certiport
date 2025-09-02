// src/components/TrainingQuiz.tsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Flag, RotateCcw } from 'lucide-react';
import { Question } from '@/lib/types';
import { TrainingResult } from '@/lib/quiz-mode-types';

interface TrainingQuizProps {
  questions: Question[];
  onComplete: (results: any) => void;
  onBackToDashboard: () => void;
}

const TrainingQuiz: React.FC<TrainingQuizProps> = ({ 
  questions, 
  onComplete, 
  onBackToDashboard 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | string[] | { [key: string]: string } | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showExplanation, setShowExplanation] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  const currentQuestion = questions[currentQuestionIndex];
  
  useEffect(() => {
    // Reset explanation and answer state when moving to new question
    setShowExplanation(false);
    setHasAnswered(answers[currentQuestionIndex] !== null);
    setQuestionStartTime(Date.now());
  }, [currentQuestionIndex, answers]);

  const handleAnswerChange = (answer: string | string[] | { [key: string]: string }) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
    setHasAnswered(true);
  };

  const handleSubmitAnswer = () => {
    if (!hasAnswered) return;
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Complete training session
      const results = calculateResults();
      onComplete(results);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRetryQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = null;
    setAnswers(newAnswers);
    setHasAnswered(false);
    setShowExplanation(false);
  };

  const toggleFlag = () => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(currentQuestionIndex)) {
      newFlagged.delete(currentQuestionIndex);
    } else {
      newFlagged.add(currentQuestionIndex);
    }
    setFlaggedQuestions(newFlagged);
  };

  const calculateResults = () => {
    let score = 0;
    const questionResults: TrainingResult[] = questions.map((question, index) => {
      const userAnswer = answers[index];
      const isCorrect = compareAnswers(userAnswer, question.answer, question.type);
      
      if (isCorrect) score++;

      return {
        questionId: question.id,
        domain: question.domain,
        question: question.question,
        userAnswer,
        correctAnswer: question.answer,
        isCorrect,
        explanation: question.explanation
      };
    });

    return {
      mode: 'training',
      score,
      totalQuestions: questions.length,
      percentage: Math.round((score / questions.length) * 100),
      questionResults,
      isFlagged: Array.from(flaggedQuestions)
    };
  };

  const compareAnswers = (
    userAnswer: string | string[] | { [key: string]: string } | null, 
    correctAnswer: string | string[] | { [key: string]: string }, 
    questionType: string
  ): boolean => {
    if (questionType === 'ordering') {
      if (!Array.isArray(userAnswer) || !Array.isArray(correctAnswer)) return false;
      return JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
    }
    
    if (questionType === 'fill_in_blank') {
      if (typeof userAnswer !== 'object' || typeof correctAnswer !== 'object') return false;
      if (!userAnswer || !correctAnswer) return false;
      const userKeys = Object.keys(userAnswer);
      const correctKeys = Object.keys(correctAnswer);
      if (userKeys.length !== correctKeys.length) return false;
      return userKeys.every(key => (userAnswer as any)[key] === (correctAnswer as any)[key]);
    }
    
    if (questionType === 'multiple_response' || questionType === 'multiple_select') {
      if (!Array.isArray(userAnswer) || !Array.isArray(correctAnswer)) return false;
      return userAnswer.length === correctAnswer.length && 
             userAnswer.every(ans => correctAnswer.includes(ans));
    }
    
    return userAnswer === correctAnswer;
  };

  const renderAnswerInput = () => {
    const userAnswer = answers[currentQuestionIndex];

    switch (currentQuestion.type) {
      case 'multiple_choice':
      case 'true_false':
        return (
          <div className="space-y-3">
            {(currentQuestion.options as string[]).map((option: string, index: number) => (
              <label 
                key={index} 
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all
                  ${userAnswer === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
                  ${showExplanation ? 
                    option === currentQuestion.answer ? 'border-green-500 bg-green-50' :
                    userAnswer === option && userAnswer !== currentQuestion.answer ? 'border-red-500 bg-red-50' :
                    'border-gray-200'
                    : ''
                  }
                `}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={userAnswer === option}
                  onChange={(e) => !showExplanation && handleAnswerChange(e.target.value)}
                  className="mr-3"
                  disabled={showExplanation}
                />
                <span className="flex-1">{option}</span>
                {showExplanation && option === currentQuestion.answer && (
                  <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                )}
                {showExplanation && userAnswer === option && userAnswer !== currentQuestion.answer && (
                  <XCircle className="w-5 h-5 text-red-500 ml-2" />
                )}
              </label>
            ))}
          </div>
        );

      case 'multiple_response':
        return (
          <div className="space-y-3">
            {(currentQuestion.options as string[]).map((option: string, index: number) => {
              const isSelected = Array.isArray(userAnswer) && userAnswer.includes(option);
              const isCorrectOption = Array.isArray(currentQuestion.answer) && currentQuestion.answer.includes(option);
              
              return (
                <label 
                  key={index} 
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all
                    ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
                    ${showExplanation ? 
                      isCorrectOption ? 'border-green-500 bg-green-50' :
                      isSelected && !isCorrectOption ? 'border-red-500 bg-red-50' :
                      'border-gray-200'
                      : ''
                    }
                  `}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={(e) => {
                      if (showExplanation) return;
                      
                      const currentAnswers = Array.isArray(userAnswer) ? userAnswer : [];
                      let newAnswers: string[];
                      
                      if (e.target.checked) {
                        newAnswers = [...currentAnswers, option];
                      } else {
                        newAnswers = currentAnswers.filter((ans: string) => ans !== option);
                      }
                      
                      handleAnswerChange(newAnswers);
                    }}
                    className="mr-3"
                    disabled={showExplanation}
                  />
                  <span className="flex-1">{option}</span>
                  {showExplanation && isCorrectOption && (
                    <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                  )}
                  {showExplanation && isSelected && !isCorrectOption && (
                    <XCircle className="w-5 h-5 text-red-500 ml-2" />
                  )}
                </label>
              );
            })}
          </div>
        );

      case 'fill_in_blank':
        const fillOptions = currentQuestion.options as { [key: string]: string[] };
        const fillAnswer = userAnswer as { [key: string]: string } || {};
        
        return (
          <div className="space-y-4">
            {Object.keys(fillOptions).map((key) => (
              <div key={key} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {key.replace(/_/g, ' ')}
                </label>
                <select
                  value={fillAnswer[key] || ''}
                  onChange={(e) => {
                    if (showExplanation) return;
                    const newAnswer = { ...fillAnswer, [key]: e.target.value };
                    handleAnswerChange(newAnswer);
                  }}
                  className={`w-full p-3 border-2 rounded-lg ${
                    showExplanation ? 
                      fillAnswer[key] === (currentQuestion.answer as any)[key] ? 'border-green-500 bg-green-50' :
                      fillAnswer[key] ? 'border-red-500 bg-red-50' : 'border-gray-200'
                      : 'border-gray-200'
                  }`}
                  disabled={showExplanation}
                >
                  <option value="">Select an option...</option>
                  {fillOptions[key].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {showExplanation && (
                  <div className="flex items-center text-sm">
                    {fillAnswer[key] === (currentQuestion.answer as any)[key] ? (
                      <><CheckCircle className="w-4 h-4 text-green-500 mr-1" /> Correct</>
                    ) : (
                      <><XCircle className="w-4 h-4 text-red-500 mr-1" /> Correct answer: {(currentQuestion.answer as any)[key]}</>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      default:
        return (
          <div className="text-gray-500 text-center py-8">
            Question type {currentQuestion.type} not yet implemented in training mode
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <button
              onClick={onBackToDashboard}
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </button>
            
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Training Mode
              </span>
              <span className="text-gray-600">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Question Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-2">
                  Domain: {currentQuestion.domain}
                </div>
                <div 
                  className="text-lg font-medium text-gray-900"
                  dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
                />
              </div>
              
              <button
                onClick={toggleFlag}
                className={`ml-4 p-2 rounded-lg transition-colors ${
                  flaggedQuestions.has(currentQuestionIndex)
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                <Flag className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Answer Section */}
          <div className="p-6">
            {renderAnswerInput()}
            
            {/* Submit Button */}
            {!showExplanation && (
              <div className="mt-6">
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!hasAnswered}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
                >
                  Check Answer
                </button>
              </div>
            )}

            {/* Explanation Section */}
            {showExplanation && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-3">
                  {compareAnswers(answers[currentQuestionIndex], currentQuestion.answer, currentQuestion.type) ? (
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 mr-2" />
                  )}
                  <h3 className="text-lg font-semibold">
                    {compareAnswers(answers[currentQuestionIndex], currentQuestion.answer, currentQuestion.type) 
                      ? 'Correct!' 
                      : 'Incorrect'
                    }
                  </h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-700">{currentQuestion.explanation}</p>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={handleRetryQuestion}
                    className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Again
                  </button>
                  
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    {currentQuestionIndex === questions.length - 1 ? 'Finish Training' : 'Next Question'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrevQuestion}
            disabled={currentQuestionIndex === 0}
            className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </button>

          <div className="text-center text-sm text-gray-500">
            {flaggedQuestions.size > 0 && (
              <p>{flaggedQuestions.size} question{flaggedQuestions.size !== 1 ? 's' : ''} flagged for review</p>
            )}
          </div>

          <div></div> {/* Spacer for flexbox alignment */}
        </div>
      </div>
    </div>
  );
};

export default TrainingQuiz;