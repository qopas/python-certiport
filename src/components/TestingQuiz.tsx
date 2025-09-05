// src/components/TestingQuiz.tsx
"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, CheckCircle, XCircle, Trophy, ArrowLeft, Flag, FlagOff, GripVertical } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Question, QuestionResult } from '@/lib/types';
import QuizStorageManager from '@/lib/quiz-storage-enchanched';

interface TestingQuizProps {
  questions: Question[];
  onComplete: (results: any) => void;
  onBackToDashboard: () => void;
}

const TestingQuiz: React.FC<TestingQuizProps> = ({ 
  questions, 
  onComplete, 
  onBackToDashboard 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | string[] | { [key: string]: string } | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(50 * 60); // 50 minutes in seconds
  const [startTime] = useState(new Date());
  const [stage, setStage] = useState<'quiz' | 'results'>('quiz');
  const [results, setResults] = useState<any>(null);
  
  const router = useRouter();

  const updateLocalStorage = useCallback(async (updates: any) => {
    QuizStorageManager.saveTestingProgress(
      `testing-${Date.now()}`,
      updates.currentQuestionIndex ?? currentQuestionIndex,
      updates.answers ?? answers,
      Array.from(updates.flaggedQuestions ?? flaggedQuestions),
      updates.timeRemaining ?? timeRemaining
    );
  }, [currentQuestionIndex, answers, flaggedQuestions, timeRemaining]);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          submitQuiz();
          return 0;
        }
        const newTime = prev - 1;
        updateLocalStorage({ timeRemaining: newTime });
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [updateLocalStorage]);

  const handleAnswer = (answer: string | string[] | { [key: string]: string }) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
    updateLocalStorage({ answers: newAnswers });
  };

  const toggleFlag = () => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(currentQuestionIndex)) {
      newFlagged.delete(currentQuestionIndex);
    } else {
      newFlagged.add(currentQuestionIndex);
    }
    setFlaggedQuestions(newFlagged);
    updateLocalStorage({ flaggedQuestions: newFlagged });
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    updateLocalStorage({ currentQuestionIndex: index });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const newIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(newIndex);
      updateLocalStorage({ currentQuestionIndex: newIndex });
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      const newIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(newIndex);
      updateLocalStorage({ currentQuestionIndex: newIndex });
    }
  };

  // Enhanced answer comparison for all question types
  const compareAnswers = (userAnswer: any, correctAnswer: any, questionType: string) => {
    if (questionType === 'ordering') {
      if (!Array.isArray(userAnswer) || !Array.isArray(correctAnswer)) return false;
      return JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
    }
    
    if (questionType === 'fill_in_blank') {
      if (typeof userAnswer !== 'object' || typeof correctAnswer !== 'object') return false;
      const userKeys = Object.keys(userAnswer || {});
      const correctKeys = Object.keys(correctAnswer || {});
      if (userKeys.length !== correctKeys.length) return false;
      return userKeys.every(key => userAnswer[key] === correctAnswer[key]);
    }
    
    if (questionType === 'true_false' && typeof correctAnswer === 'object' && !Array.isArray(correctAnswer)) {
      // Multi-statement true/false question
      if (typeof userAnswer !== 'object' || !userAnswer) return false;
      const userKeys = Object.keys(userAnswer);
      const correctKeys = Object.keys(correctAnswer);
      if (userKeys.length !== correctKeys.length) return false;
      return userKeys.every(key => userAnswer[key] === correctAnswer[key]);
    }
    
    if (questionType === 'multiple_response' || questionType === 'multiple_select') {
      if (!Array.isArray(userAnswer) || !Array.isArray(correctAnswer)) return false;
      return userAnswer.length === correctAnswer.length && 
             userAnswer.every(ans => correctAnswer.includes(ans));
    }
    
    return userAnswer === correctAnswer;
  };

  const submitQuiz = async () => {
    if (!startTime) return;

    const endTime = new Date();
    const totalTime = Math.round((endTime.getTime() - startTime.getTime()) / 1000);
    
    let score = 0;
    const questionDetails: QuestionResult[] = questions.map((question, index) => {
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

    const percentage = Math.round((score / questions.length) * 100);

    try {
      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: `testing-${Date.now()}`,
          mode: 'testing',
          answers,
          questions,
          score,
          percentage,
          totalTime,
          questionDetails,
          startedAt: startTime.toISOString()
        })
      });
      
      if (response.ok) {
        QuizStorageManager.clearSession('testing');
        console.log('Quiz submitted and localStorage cleared');
      }

      const submissionData = {
        score,
        percentage,
        totalTime,
        questionDetails,
        totalQuestions: questions.length
      };

      setResults(submissionData);
      setStage('results');
    } catch (error) {
      console.error('Error submitting quiz:', error);
      setResults({
        score,
        percentage,
        totalTime,
        questionDetails,
        totalQuestions: questions.length
      });
      setStage('results');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getQuestionStatus = (index: number) => {
    const isAnswered = answers[index] !== null && answers[index] !== undefined && 
                      (typeof answers[index] === 'string' ? answers[index] !== '' : 
                       Array.isArray(answers[index]) ? (answers[index] as any[]).length > 0 :
                       typeof answers[index] === 'object' ? Object.keys(answers[index] || {}).length > 0 : false);
    const isCurrent = index === currentQuestionIndex;
    const isFlagged = flaggedQuestions.has(index);

    if (isCurrent) return 'current';
    if (isFlagged) return 'flagged';
    if (isAnswered) return 'answered';
    return 'unanswered';
  };

  const getQuestionStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'bg-blue-500 text-white border-blue-600';
      case 'answered':
        return 'bg-green-500 text-white border-green-600';
      case 'flagged':
        return 'bg-orange-500 text-white border-orange-600';
      case 'unanswered':
        return 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  // Render question content based on type
  const renderQuestionContent = (question: Question) => {
    const currentAnswer = answers[currentQuestionIndex];

    switch (question.type) {
      case 'multiple_choice':
        return (
          <div className="space-y-3">
            {Array.isArray(question.options) && question.options.map((option, index) => {
              const isSelected = currentAnswer === option;
              return (
                <label
                  key={index}
                  className={`flex items-start p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    isSelected 
                      ? 'border-indigo-400 bg-indigo-50 shadow-sm' 
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={option}
                    checked={isSelected}
                    onChange={(e) => handleAnswer(e.target.value)}
                    className="mr-3 mt-1 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                  />
                  <span 
                    className="text-sm sm:text-base text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: option }} 
                  />
                </label>
              );
            })}
          </div>
        );

      case 'true_false':
        // Check if it's a multi-statement true/false question
        if (typeof question.options === 'object' && !Array.isArray(question.options)) {
          const statementsObj = question.options as { [key: string]: string };
          const answerObj = (currentAnswer as { [key: string]: string }) || {};
          
          return (
            <div className="space-y-6">
              {Object.entries(statementsObj).map(([key, statement]) => (
               <div className="flex justify-between items-start">
  <div className="flex-1 pr-4"> {/* Statement takes available space, with padding-right */}
    <p className="text-gray-800 font-medium" dangerouslySetInnerHTML={{ __html: statement }} />
  </div>
  
  <div className="flex gap-3 flex-shrink-0"> {/* Buttons stay compact on the right */}
    {['True', 'False'].map((option) => (
      <label 
        key={`${key}-${option}`}
        className={`flex items-center cursor-pointer p-2 rounded-lg border-2 transition-all
          ${answerObj[key] === option ? 'border-indigo-400 bg-indigo-50' : 'border-gray-300 hover:border-gray-400'}
        `}
      >
        <input
          type="radio"
          name={`statement-${currentQuestionIndex}-${key}`}
          value={option}
          checked={answerObj[key] === option}
          onChange={(e) => {
            const newAnswer = { ...answerObj, [key]: e.target.value };
            handleAnswer(newAnswer);
          }}
          className="mr-2 w-4 h-4"
        />
        <span className="font-semibold text-gray-700 text-sm">
          {option}
        </span>
      </label>
    ))}
  </div>
</div>
              ))}
            </div>
          );
        } else {
          // Simple true/false question with two options
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['True', 'False'].map((option) => {
                  const isSelected = currentAnswer === option;
                  return (
                    <label
                      key={option}
                      className={`flex items-center justify-center p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        isSelected 
                          ? 'border-indigo-400 bg-indigo-50 shadow-sm' 
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestionIndex}`}
                        value={option}
                        checked={isSelected}
                        onChange={(e) => handleAnswer(e.target.value)}
                        className="mr-3 w-5 h-5"
                      />
                      <span className="text-lg font-semibold text-gray-700">
                        {option}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        }

      case 'multiple_select':
      case 'multiple_response':
        return (
          <div className="space-y-3">
            {Array.isArray(question.options) && question.options.map((option, index) => {
              const currentAnswers = (currentAnswer as string[]) || [];
              const isSelected = currentAnswers.includes(option);
              
              return (
                <label
                  key={index}
                  className={`flex items-start p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    isSelected 
                      ? 'border-indigo-400 bg-indigo-50 shadow-sm' 
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    value={option}
                    checked={isSelected}
                    onChange={(e) => {
                      const currentAnswers = (currentAnswer as string[]) || [];
                      if (e.target.checked) {
                        handleAnswer([...currentAnswers, option]);
                      } else {
                        handleAnswer(currentAnswers.filter(a => a !== option));
                      }
                    }}
                    className="mr-3 mt-1 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                  />
                  <span 
                    className="text-sm sm:text-base text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: option }} 
                  />
                </label>
              );
            })}
          </div>
        );

      case 'fill_in_blank':
        // Check if options is an object (for multiple dropdowns) or array (for single dropdown)
        const isMultipleDropdowns = question.options && typeof question.options === 'object' && !Array.isArray(question.options);
        
        if (isMultipleDropdowns) {
          // Multiple dropdowns format - render the HTML structure directly
          const optionsObj = question.options as { [key: string]: string[] };
          const answerObj = (currentAnswer as { [key: string]: string }) || {};
          
          // Split question by code blocks and text
          const beforeCodeMatch = question.question.match(/^(.*?)<div[^>]*class[^>]*bg-gray-800[^>]*>/);
          const codeBlockMatch = question.question.match(/<div[^>]*class[^>]*bg-gray-800[^>]*>([\s\S]*?)<\/div>/);
          const afterCodeMatch = question.question.match(/<\/div>([\s\S]*)$/);
          
          const beforeCode = beforeCodeMatch ? beforeCodeMatch[1] : '';
          const codeContent = codeBlockMatch ? codeBlockMatch[1] : '';
          const afterCode = afterCodeMatch ? afterCodeMatch[1] : '';
          
          // Parse the code content and replace ____ with dropdowns
          const keys = Object.keys(optionsObj);
          let keyIndex = 0;
          
          const renderCodeWithDropdowns = () => {
            const codeParts = codeContent.split('____');
            const elements = [];
            
            for (let i = 0; i < codeParts.length; i++) {
              if (codeParts[i]) {
                elements.push(
                  <span key={`code-${i}`} dangerouslySetInnerHTML={{ __html: codeParts[i] }} />
                );
              }
              
              if (i < codeParts.length - 1 && keyIndex < keys.length) {
                const key = keys[keyIndex++];
                elements.push(
                  <Select 
                    key={`dropdown-${key}`}
                    value={answerObj[key] || ''} 
                    onValueChange={(value) => {
                      const newAnswer = { ...answerObj, [key]: value };
                      handleAnswer(newAnswer);
                    }}
                  >
                    <SelectTrigger 
                      className="inline-flex w-auto min-w-36 mx-1 h-6 text-sm bg-gray-100 border border-gray-300 rounded px-2"
                      style={{ 
                        display: 'inline-flex', 
                        verticalAlign: 'baseline',
                        fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        fontSize: '14px'
                      }}
                    >
                      <SelectValue placeholder="____" />
                    </SelectTrigger>
                    <SelectContent>
                      {optionsObj[key].map((option, optionIndex) => (
                        <SelectItem key={optionIndex} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              }
            }
            
            return elements;
          };
          
          return (
            <div className="space-y-4">
              {beforeCode && (
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: beforeCode }} 
                />
              )}
              
              {codeContent && (
                <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm overflow-x-auto">
                  {renderCodeWithDropdowns()}
                </div>
              )}
              
              {afterCode && (
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: afterCode }} 
                />
              )}
            </div>
          );
        } else {
          // Single dropdown case
          return (
            <div className="space-y-4">
              <select
                value={currentAnswer as string || ''}
                onChange={(e) => handleAnswer(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select an option</option>
                {Array.isArray(question.options) && question.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        }

      case 'ordering':
        const orderingAnswer = (currentAnswer as string[]) || [];
        const availableOptions = Array.isArray(question.options) ? 
          question.options.filter(option => !orderingAnswer.includes(option)) : [];
        
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-3">Available Options:</h4>
              <div className="space-y-2">
                {availableOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer([...orderingAnswer, option])}
                    className="block w-full text-left p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-3">Your Order:</h4>
              <div className="space-y-2">
                {orderingAnswer.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white border border-indigo-300 rounded-lg"
                  >
                    <span className="flex items-center">
                      <GripVertical className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="font-medium text-indigo-600 mr-2">{index + 1}.</span>
                      {option}
                    </span>
                    <button
                      onClick={() => {
                        const newAnswer = orderingAnswer.filter((_, i) => i !== index);
                        handleAnswer(newAnswer);
                      }}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
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
        return <div>Unsupported question type: {question.type}</div>;
    }
  };

  // Results display
  if (stage === 'results') {
    if (!results) return <div>Loading results...</div>;

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <Trophy className="w-16 h-16 text-yellow-500" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800">Quiz Complete!</CardTitle>
              <p className="text-gray-600">Here are your results</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{results.score}</div>
                  <div className="text-gray-600">Correct Answers</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{results.percentage}%</div>
                  <div className="text-gray-600">Score</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">{formatTime(results.totalTime)}</div>
                  <div className="text-gray-600">Time Taken</div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <Button onClick={onBackToDashboard} variant="outline">
                  Back to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Main quiz interface
  if (!questions.length || !questions[currentQuestionIndex]) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = answers.filter(answer => {
    if (answer === null || answer === undefined) return false;
    if (typeof answer === 'string') return answer !== '';
    if (Array.isArray(answer)) return answer.length > 0;
    if (typeof answer === 'object') return Object.keys(answer).length > 0;
    return false;
  }).length;
  const flaggedCount = flaggedQuestions.size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto p-3 sm:p-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
          <Button 
            onClick={onBackToDashboard} 
            variant="outline" 
            size="sm"
            className="bg-white/80 backdrop-blur-sm border-gray-300 hover:bg-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
          
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="text-center">
              <div className="text-xs sm:text-sm font-medium text-gray-600">Progress</div>
              <div className="text-sm sm:text-base font-bold text-gray-800">{answeredCount}/{questions.length}</div>
            </div>
            <div className="text-center">
              <div className="text-xs sm:text-sm font-medium text-gray-600">Flagged</div>
              <div className="text-sm sm:text-base font-bold text-orange-600">{flaggedCount}</div>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base font-semibold bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-200">
              <Clock className={`w-4 h-4 ${timeRemaining < 300 ? 'text-red-500' : 'text-blue-500'}`} />
              <span className={timeRemaining < 300 ? 'text-red-500' : 'text-gray-700'}>
                {formatTime(timeRemaining)}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Question Navigation Panel */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="sticky top-4 shadow-md border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg font-bold text-gray-800">Navigation</CardTitle>
                <div className="text-xs sm:text-sm text-gray-600">
                  Tap to jump to question
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-6 sm:grid-cols-5 gap-1.5 sm:gap-2">
                  {questions.map((_, index) => {
                    const status = getQuestionStatus(index);
                    const colorClass = getQuestionStatusColor(status);
                    
                    return (
                      <button
                        key={index}
                        onClick={() => goToQuestion(index)}
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 border-2 ${colorClass} transform hover:scale-105`}
                        title={`Question ${index + 1} - ${status}`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
                
                {/* Legend */}
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 rounded bg-orange-500"></div>
                    <span>Flagged</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 rounded bg-gray-200"></div>
                    <span>Unanswered</span>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-xs text-gray-600 space-y-1">
                    <div>Total: {questions.length}</div>
                    <div>Answered: {answeredCount}</div>
                    <div>Remaining: {questions.length - answeredCount}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Header */}
            <div className="flex justify-between items-start mb-4">
              <Badge variant="outline" className="bg-white/80">
                {currentQuestion.domain}
              </Badge>
              
              <Button
                onClick={toggleFlag}
                variant="outline"
                size="sm"
                className={`${
                  flaggedQuestions.has(currentQuestionIndex)
                    ? 'bg-orange-50 text-orange-700 border-orange-300 hover:bg-orange-100'
                    : 'bg-white/80 hover:bg-gray-50'
                }`}
              >
                {flaggedQuestions.has(currentQuestionIndex) ? (
                  <Flag className="w-4 h-4 mr-1 fill-current" />
                ) : (
                  <FlagOff className="w-4 h-4 mr-1" />
                )}
                <span className="hidden sm:inline">
                  {flaggedQuestions.has(currentQuestionIndex) ? 'Flagged' : 'Flag'}
                </span>
              </Button>
            </div>

            {/* Question Card */}
            <Card className="mb-4 shadow-md border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6">
                {/* For fill_in_blank questions, don't show the question text separately */}
                {currentQuestion?.type !== 'fill_in_blank' && (
                  <h2 
                    className="text-lg sm:text-xl font-bold text-gray-800 mb-4 leading-relaxed" 
                    dangerouslySetInnerHTML={{ __html: currentQuestion?.question || '' }}
                  />
                )}
                
                {currentQuestion && renderQuestionContent(currentQuestion)}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <Button 
                onClick={prevQuestion} 
                disabled={currentQuestionIndex === 0}
                variant="outline"
                className="bg-white/80 hover:bg-white px-4 py-2 w-full sm:w-auto"
              >
                Previous
              </Button>
              
              <div className="text-center text-xs sm:text-sm text-gray-600 px-2">
                {currentQuestionIndex === questions.length - 1 ? (
                  <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full border border-yellow-200">
                    Ready to Submit?
                  </span>
                ) : (
                  <span className="hidden sm:inline">
                    {questions.length - currentQuestionIndex - 1} remaining
                  </span>
                )}
              </div>
              
              <div className="flex space-x-2">
                {currentQuestionIndex === questions.length - 1 ? (
                  <Button 
                    onClick={submitQuiz} 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 shadow-lg w-full sm:w-auto"
                  >
                    Submit Quiz
                  </Button>
                ) : (
                  <Button 
                    onClick={nextQuestion}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-2 w-full sm:w-auto"
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingQuiz;