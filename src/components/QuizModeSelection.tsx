// src/components/QuizModeSelection.tsx
import React from 'react';
import { Clock, BookOpen, Trophy, ArrowRight } from 'lucide-react';

interface QuizModeSelectionProps {
  onModeSelect: (mode: 'training' | 'testing') => void;
}

const QuizModeSelection: React.FC<QuizModeSelectionProps> = ({ onModeSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Quiz Mode
          </h1>
          <p className="text-xl text-gray-600">
            Select the mode that best fits your learning goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Training Mode Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Training Mode
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>Immediate feedback:</strong> Get the correct answer and explanation after each question
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>No time pressure:</strong> Take as much time as you need
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>Not recorded:</strong> Results are not saved or tracked
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>Learn as you go:</strong> Perfect for studying and improving
                </p>
              </div>
            </div>
            
            <button
              onClick={() => onModeSelect('training')}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Start Training</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Testing Mode Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
              <Trophy className="w-8 h-8 text-blue-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Testing Mode
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>Timed exam:</strong> 50 minutes to complete all questions
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>No immediate feedback:</strong> See results only at the end
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>Results saved:</strong> Performance is recorded and tracked
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>Real exam conditions:</strong> Test your knowledge under pressure
                </p>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center space-x-2 text-yellow-700">
                <Clock className="w-5 h-5" />
                <p className="text-sm font-medium">
                  Once started, the timer cannot be paused
                </p>
              </div>
            </div>
            
            <button
              onClick={() => onModeSelect('testing')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Start Test</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Choose training mode to practice and learn, or testing mode to evaluate your knowledge
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizModeSelection;