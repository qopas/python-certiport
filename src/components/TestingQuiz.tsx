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
    if (stage === 'quiz' && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            submitQuiz();
            return 0;
          }
          updateLocalStorage({ timeRemaining: newTime });
          return newTime;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [stage, timeRemaining, updateLocalStorage]);

  // Auto-save effect
  useEffect(() => {
    if (stage === 'quiz') {
      const autoSave = setInterval(() => {
        updateLocalStorage({
          currentQuestionIndex,
          answers,
          timeRemaining,
          flaggedQuestions: Array.from(flaggedQuestions)
        });
      }, 5000);
      return () => clearInterval(autoSave);
    }
  }, [stage, currentQuestionIndex, answers, timeRemaining, flaggedQuestions, updateLocalStorage]);

  const handleAnswer = (answer: string | string[] | { [key: string]: string }) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
    updateLocalStorage({ answers: newAnswers });
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    updateLocalStorage({ currentQuestionIndex: index });
  };

  const toggleFlag = (questionIndex: number) => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(questionIndex)) {
      newFlagged.delete(questionIndex);
    } else {
      newFlagged.add(questionIndex);
    }
    setFlaggedQuestions(newFlagged);
    updateLocalStorage({ flaggedQuestions: Array.from(newFlagged) });
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

  // Fixed renderQuestionContent function for fill_in_blank questions (EXACT COPY from your original)
  const renderQuestionContent = (question: Question) => {
    const currentAnswer = answers[currentQuestionIndex];

    switch (question.type) {
      case 'multiple_choice':
      case 'true_false':
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

      case 'multiple_select':
      case 'multiple_response':
        return (
          <div className="space-y-3">
            <p className="text-sm text-gray-600 mb-3">Select all that apply:</p>
            {Array.isArray(question.options) && question.options.map((option, index) => {
              const isSelected = Array.isArray(currentAnswer) && currentAnswer.includes(option);
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
                      <SelectValue placeholder="Choose One..." />
                    </SelectTrigger>
                    <SelectContent>
                      {optionsObj[key].map((option) => (
                        <SelectItem key={option} value={option}>
                          <span dangerouslySetInnerHTML={{ __html: option }} />
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
              {/* Render question parts separately */}
              <div>
                <div dangerouslySetInnerHTML={{ __html: beforeCode }} />
                
                <div className="bg-gray-800 text-green-400 p-3 rounded font-mono mt-2" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>
                  {renderCodeWithDropdowns()}
                </div>
                
                <div dangerouslySetInnerHTML={{ __html: afterCode }} />
              </div>
            </div>
          );
        } else {
          // Single dropdown format (array of options)
          const optionsArray = question.options as string[];
          const selectedAnswer = currentAnswer as string || '';
          
          return (
            <div className="space-y-4">
              <h2 
                className="text-lg sm:text-xl font-bold text-gray-800 mb-4 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: question.question }} 
              />
              <p className="text-sm text-gray-600 mb-4">Select the correct option:</p>
              <Select 
                value={selectedAnswer} 
                onValueChange={(value) => handleAnswer(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose an option..." />
                </SelectTrigger>
                <SelectContent>
                  {optionsArray && optionsArray.map((option) => (
                    <SelectItem key={option} value={option}>
                      <span dangerouslySetInnerHTML={{ __html: option }} />
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          );
        }

      case 'ordering':
        const sourcePool = question.options as string[];
        const correctAnswer = question.answer as string[];
        const userArrangement = (currentAnswer as string[]) || [];
        
        const handleDragStart = (e: React.DragEvent, item: string, fromPool: boolean) => {
          e.dataTransfer.setData('text/plain', JSON.stringify({ item, fromPool }));
        };

        const handleDragOver = (e: React.DragEvent) => {
          e.preventDefault();
        };

        const handleDropInArrangement = (e: React.DragEvent, index?: number) => {
          e.preventDefault();
          const data = JSON.parse(e.dataTransfer.getData('text/plain'));
          const { item, fromPool } = data;
          
          const newArrangement = [...userArrangement];
          
          if (fromPool) {
            // Adding from pool - insert at specific index or at end
            if (typeof index === 'number') {
              newArrangement.splice(index, 0, item);
            } else {
              newArrangement.push(item);
            }
          } else {
            // Reordering within arrangement
            const currentIndex = newArrangement.indexOf(item);
            if (currentIndex !== -1) {
              newArrangement.splice(currentIndex, 1);
              if (typeof index === 'number') {
                newArrangement.splice(index, 0, item);
              } else {
                newArrangement.push(item);
              }
            }
          }
          
          handleAnswer(newArrangement);
        };

        const handleDropInPool = (e: React.DragEvent) => {
          e.preventDefault();
          const data = JSON.parse(e.dataTransfer.getData('text/plain'));
          const { item, fromPool } = data;
          
          if (!fromPool) {
            // Remove from arrangement
            const newArrangement = userArrangement.filter(arrItem => arrItem !== item);
            handleAnswer(newArrangement);
          }
        };

        const unusedItems = sourcePool.filter(item => !userArrangement.includes(item));

        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">
              Drag items from the right side to the left side to arrange them in the correct order. Not all items need to be used.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Answer Area - Left Side */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-[300px]">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Arrangement Area:</h4>
                <div
                  className="space-y-2"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDropInArrangement(e)}
                >
                  {userArrangement.length === 0 ? (
                    <div className="text-center text-gray-400 py-12">
                      Drag items here to arrange them in order
                    </div>
                  ) : (
                    userArrangement.map((item, index) => (
                      <div
                        key={`arranged-${item}-${index}`}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item, false)}
                        className="flex items-center justify-between p-3 bg-indigo-50 border border-indigo-200 rounded-lg cursor-move hover:bg-indigo-100 transition-colors"
                      >
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-indigo-700 mr-2 min-w-[20px]">{index + 1}.</span>
                          <GripVertical className="w-4 h-4 mr-2 text-indigo-400" />
                          <span className="text-sm" dangerouslySetInnerHTML={{ __html: item }} />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Source Pool - Right Side */}
              <div className="border border-gray-200 rounded-lg p-4 min-h-[300px]">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Available Options:</h4>
                <div
                  className="space-y-2"
                  onDragOver={handleDragOver}
                  onDrop={handleDropInPool}
                >
                  {unusedItems.length === 0 ? (
                    <div className="text-center text-gray-400 py-12">
                      All items have been used
                    </div>
                  ) : (
                    unusedItems.map((item, index) => (
                      <div
                        key={`pool-${item}-${index}`}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item, true)}
                        className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-move hover:bg-gray-100 transition-colors"
                      >
                        <GripVertical className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm" dangerouslySetInnerHTML={{ __html: item }} />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {userArrangement.length > 0 && (
              <div className="text-xs text-gray-500 text-center">
                Tip: Drag items back to Available Options to remove them from your arrangement
              </div>
            )}
          </div>
        );

      default:
        return <div className="text-red-500">Unknown question type: {question.type}</div>;
    }
  };

  if (stage === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-3 sm:p-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-t-lg p-4 sm:p-6">
              <div className="flex justify-center mb-3">
                <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-300" />
              </div>
              <CardTitle className="text-2xl sm:text-4xl mb-2">Quiz Complete!</CardTitle>
              <p className="text-lg sm:text-xl opacity-90">
                You scored {results.score} out of {results.totalQuestions} ({results.percentage}%)
              </p>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-base text-blue-800 mb-1">Score</h3>
                  <p className="text-2xl font-bold text-blue-900">{results.percentage}%</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl border border-green-200">
                  <h3 className="font-bold text-base text-green-800 mb-1">Correct</h3>
                  <p className="text-2xl font-bold text-green-900">{results.score}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl border border-purple-200">
                  <h3 className="font-bold text-base text-purple-800 mb-1">Time</h3>
                  <p className="text-2xl font-bold text-purple-900">{formatTime(results.totalTime)}</p>
                </div>
              </div>
              <div className="text-center">
                <Button 
                  onClick={onBackToDashboard} 
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 text-base w-full sm:w-auto"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
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
                    <div className="w-3 h-3 rounded bg-blue-500"></div>
                    <span>Current</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 rounded bg-green-500"></div>
                    <span>Answered</span>
                  </div>
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
                    <div>Answered: {answeredCount}/{questions.length}</div>
                    <div>Remaining: {questions.length - answeredCount}</div>
                    <div>Flagged: {flaggedCount}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Question Counter and Flag */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="bg-white/80 backdrop-blur-sm px-2 py-1 text-xs sm:text-sm">
                  Q{currentQuestionIndex + 1}/{questions.length}
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                  {currentQuestion?.domain}
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs">
                  {currentQuestion?.type === 'multiple_select' ? 'Multi Select' : 
                   currentQuestion?.type === 'multiple_response' ? 'Multi Response' :
                   currentQuestion?.type === 'true_false' ? 'True/False' :
                   currentQuestion?.type === 'fill_in_blank' ? 'Fill Blanks' :
                   currentQuestion?.type === 'ordering' ? 'Ordering' : 'Multiple Choice'}
                </Badge>
              </div>
              
              <Button
                onClick={() => toggleFlag(currentQuestionIndex)}
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