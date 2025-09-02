import React from 'react';
import { CheckCircle, XCircle, Flag, BookOpen, RotateCcw, Home } from 'lucide-react';
import { TrainingResult } from '@/lib/quiz-mode-types';

interface TrainingResultsProps {
  results: {
    mode: string;
    score: number;
    totalQuestions: number;
    percentage: number;
    questionResults: TrainingResult[];
    isFlagged?: number[];
  };
  onRetakeTraining: () => void;
  onBackToDashboard: () => void;
}

const TrainingResults: React.FC<TrainingResultsProps> = ({
  results,
  onRetakeTraining,
  onBackToDashboard
}) => {
  const { score, totalQuestions, percentage, questionResults, isFlagged = [] } = results;
  
  const correctAnswers = questionResults.filter(q => q.isCorrect);
  const incorrectAnswers = questionResults.filter(q => !q.isCorrect);
  const flaggedQuestions = questionResults.filter((_, index) => isFlagged.includes(index));

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPerformanceBg = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-50 border-green-200';
    if (percentage >= 60) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  const formatAnswer = (answer: string | string[] | { [key: string]: string } | null) => {
    if (!answer) return 'No answer';
    if (Array.isArray(answer)) return answer.join(', ');
    if (typeof answer === 'object') return Object.values(answer).join(', ');
    return answer.toString();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-green-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Training Complete!</h1>
          </div>
          <p className="text-gray-600">
            Here is how you performed in training mode. Remember, these results are not recorded.
          </p>
        </div>

        {/* Performance Summary */}
        <div className={`bg-white rounded-xl shadow-sm p-8 mb-8 border-2 ${getPerformanceBg(percentage)}`}>
          <div className="text-center">
            <div className={`text-6xl font-bold mb-4 ${getPerformanceColor(percentage)}`}>
              {percentage}%
            </div>
            <div className="text-xl text-gray-700 mb-2">
              {score} out of {totalQuestions} questions correct
            </div>
            <div className="text-gray-500">
              {percentage >= 80 ? 'Excellent work! 🎉' : 
               percentage >= 60 ? 'Good effort! Keep practicing 📚' : 
               'Keep studying - you\'ll improve! 💪'}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{correctAnswers.length}</div>
              <div className="text-gray-600">Correct</div>
            </div>
            
            <div className="text-center">
              <XCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">{incorrectAnswers.length}</div>
              <div className="text-gray-600">Incorrect</div>
            </div>
            
            <div className="text-center">
              <Flag className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-600">{flaggedQuestions.length}</div>
              <div className="text-gray-600">Flagged</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={onRetakeTraining}
            className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Practice Again
          </button>
          
          <button
            onClick={onBackToDashboard}
            className="flex items-center justify-center bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 font-medium"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
        </div>

        {/* Detailed Results */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Incorrect Answers */}
          {incorrectAnswers.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-red-600 flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Questions to Review ({incorrectAnswers.length})
                </h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {incorrectAnswers.map((question, index) => (
                    <div key={question.questionId} className="border-l-4 border-red-500 pl-4">
                      <div className="text-sm text-gray-500 mb-1">Domain: {question.domain}</div>
                      <div 
                        className="font-medium text-gray-900 mb-2"
                        dangerouslySetInnerHTML={{ __html: question.question }}
                      />
                      <div className="text-sm mb-2">
                        <span className="text-red-600 font-medium">Your answer: </span>
                        <span className="text-gray-700">
                          {formatAnswer(question.userAnswer)}
                        </span>
                      </div>
                      <div className="text-sm mb-3">
                        <span className="text-green-600 font-medium">Correct answer: </span>
                        <span className="text-gray-700">
                          {formatAnswer(question.correctAnswer)}
                        </span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
                        <strong>Explanation:</strong> {question.explanation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Flagged Questions */}
          {flaggedQuestions.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-yellow-600 flex items-center">
                  <Flag className="w-5 h-5 mr-2" />
                  Flagged Questions ({flaggedQuestions.length})
                </h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {flaggedQuestions.map((question, index) => (
                    <div key={question.questionId} className="border-l-4 border-yellow-500 pl-4">
                      <div className="text-sm text-gray-500 mb-1">Domain: {question.domain}</div>
                      <div 
                        className="font-medium text-gray-900 mb-2"
                        dangerouslySetInnerHTML={{ __html: question.question }}
                      />
                      <div className="flex items-center mb-2">
                        {question.isCorrect ? (
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500 mr-2" />
                        )}
                        <span className={question.isCorrect ? 'text-green-600' : 'text-red-600'}>
                          {question.isCorrect ? 'Answered Correctly' : 'Needs Review'}
                        </span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
                        <strong>Explanation:</strong> {question.explanation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Training Tips */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Training Tips</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
            <div>
              • Focus on the domains where you got questions wrong
            </div>
            <div>
              • Review the explanations for incorrect answers
            </div>
            <div>
              • Practice frequently to improve retention
            </div>
            <div>
              • When ready, try the testing mode for a timed experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingResults;