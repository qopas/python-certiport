// src/components/TrainingQuiz.tsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Flag, RotateCcw, GripVertical } from 'lucide-react';
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

  const handleAnswer = (answer: string | string[] | { [key: string]: string }) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
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
    
    if (questionType === 'true_false' && typeof correctAnswer === 'object' && !Array.isArray(correctAnswer)) {
      // Multi-statement true/false question
      if (typeof userAnswer !== 'object' || !userAnswer) return false;
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
    
    // Handle simple true_false and multiple_choice the same way
    return userAnswer === correctAnswer;
  };

  const renderAnswerInput = () => {
    const userAnswer = answers[currentQuestionIndex];

    switch (currentQuestion.type) {
      case 'multiple_choice':
        return (
          <div className="space-y-3">
            {(currentQuestion.options as string[]).map((option: string, index: number) => (
              <label 
                key={index} 
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all
                  ${userAnswer === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
                  ${showExplanation ? 
                    option === currentQuestion.answer ? 'border-green-500 bg-green-50' :
                    userAnswer === option && userAnswer !== currentQuestion.answer ? 
                    'border-red-500 bg-red-50' : '' : ''}
                `}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={userAnswer === option}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  disabled={showExplanation}
                  className="mr-3 w-4 h-4"
                />
                <span 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: option }} 
                />
              </label>
            ))}
          </div>
        );

      case 'true_false':
        
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['True', 'False'].map((option: string) => (
                <label 
                  key={option} 
                  className={`flex items-center justify-center p-6 border-2 rounded-lg cursor-pointer transition-all
                    ${userAnswer === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
                    ${showExplanation ? 
                      option === currentQuestion.answer ? 'border-green-500 bg-green-50' :
                      userAnswer === option && userAnswer !== currentQuestion.answer ? 
                      'border-red-500 bg-red-50' : '' : ''}
                  `}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={option}
                    checked={userAnswer === option}
                    onChange={(e) => handleAnswerChange(e.target.value)}
                    disabled={showExplanation}
                    className="mr-3 w-5 h-5"
                  />
                  <span className="text-lg font-semibold text-gray-700">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        );

      case 'multiple_response':
      case 'multiple_select':
        return (
          <div className="space-y-3">
            {(currentQuestion.options as string[]).map((option: string, index: number) => {
              const currentAnswers = (userAnswer as string[]) || [];
              const isSelected = currentAnswers.includes(option);
              
              return (
                <label 
                  key={index} 
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all
                    ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
                    ${showExplanation ? 
                      Array.isArray(currentQuestion.answer) && (currentQuestion.answer as string[]).includes(option) ? 
                      'border-green-500 bg-green-50' :
                      isSelected && Array.isArray(currentQuestion.answer) && 
                      !(currentQuestion.answer as string[]).includes(option) ? 
                      'border-red-500 bg-red-50' : '' : ''}
                  `}
                >
                  <input
                    type="checkbox"
                    value={option}
                    checked={isSelected}
                    onChange={(e) => {
                      const currentAnswers = (userAnswer as string[]) || [];
                      if (e.target.checked) {
                        handleAnswerChange([...currentAnswers, option]);
                      } else {
                        handleAnswerChange(currentAnswers.filter(a => a !== option));
                      }
                    }}
                    disabled={showExplanation}
                    className="mr-3 w-4 h-4"
                  />
                  <span 
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: option }} 
                  />
                </label>
              );
            })}
          </div>
        );

      case 'fill_in_blank':
        const isMultipleDropdowns = currentQuestion.options && 
          typeof currentQuestion.options === 'object' && 
          !Array.isArray(currentQuestion.options);
        
        if (isMultipleDropdowns) {
          const optionsObj = currentQuestion.options as { [key: string]: string[] };
          const answerObj = (userAnswer as { [key: string]: string }) || {};
          
          return (
            <div className="space-y-4">
              {Object.entries(optionsObj).map(([key, options]) => (
                <div key={key} className="flex flex-col space-y-2">
                  <label className="font-medium text-gray-700 capitalize">
                    {key.replace(/_/g, ' ')}:
                  </label>
                  <select
                    value={answerObj[key] || ''}
                    onChange={(e) => {
                      const newAnswer = { ...answerObj, [key]: e.target.value };
                      handleAnswerChange(newAnswer);
                    }}
                    disabled={showExplanation}
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    {options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          );
        } else {
          // Single dropdown
          return (
            <div className="space-y-4">
              <select
                value={userAnswer as string || ''}
                onChange={(e) => handleAnswerChange(e.target.value)}
                disabled={showExplanation}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                {(currentQuestion.options as string[]).map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        }

      case 'ordering':
        const orderingAnswer = (userAnswer as string[]) || [];
        const availableOptions = (currentQuestion.options as string[]).filter(
          option => !orderingAnswer.includes(option)
        );
        
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-3">Available Options:</h4>
              <div className="space-y-2">
                {availableOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!showExplanation) {
                        handleAnswerChange([...orderingAnswer, option]);
                      }
                    }}
                    disabled={showExplanation}
                    className="block w-full text-left p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:cursor-not-allowed"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-3">Your Order:</h4>
              <div className="space-y-2">
                {orderingAnswer.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white border border-blue-300 rounded-lg"
                  >
                    <span className="flex items-center">
                      <GripVertical className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="font-medium text-blue-600 mr-2">{index + 1}.</span>
                      {option}
                    </span>
                    {!showExplanation && (
                      <button
                        onClick={() => {
                          const newAnswer = orderingAnswer.filter((_, i) => i !== index);
                          handleAnswerChange(newAnswer);
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                {orderingAnswer.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    Click options above to add them in order
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return <div>Unsupported question type</div>;
    }
  };

  if (!currentQuestion) {
    return <div>No questions available</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Training Mode</h1>
            <button
              onClick={onBackToDashboard}
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </button>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Domain:</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {currentQuestion.domain}
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                {currentQuestion.type.replace('_', ' ')}
              </span>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h2 
                className="text-lg font-medium text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
              />
            </div>
            <button
              onClick={toggleFlag}
              className={`ml-4 p-2 rounded-lg transition-colors ${
                flaggedQuestions.has(currentQuestionIndex)
                  ? 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                  : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
              }`}
            >
              <Flag className="w-5 h-5" />
            </button>
          </div>

          {/* Answer Options */}
          {renderAnswerInput()}

          {/* Submit Button */}
          {!showExplanation && (
            <div className="mt-6">
              <button
                onClick={handleSubmitAnswer}
                disabled={!hasAnswered}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            </div>
          )}

          {/* Explanation */}
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