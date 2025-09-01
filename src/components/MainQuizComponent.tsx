// src/components/MainQuizComponent.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import QuizModeSelection from './QuizModeSelection';
import TrainingQuiz from './TrainingQuiz';
import TrainingResults from './TrainingResult';
import QuizStorageManager from '@/lib/quiz-storage-enchanched';
import { Question } from '@/lib/types';

type QuizStage = 'mode-selection' | 'quiz' | 'results';
type QuizMode = 'training' | 'testing';

const MainQuizComponent: React.FC = () => {
  const router = useRouter();
  const [stage, setStage] = useState<QuizStage>('mode-selection');
  const [selectedMode, setSelectedMode] = useState<QuizMode | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
useEffect(() => {
    if (stage === 'quiz' && selectedMode === 'testing') {
      router.push('/quiz?mode=testing');
    }
  }, [stage, selectedMode, router]);
  // Check for existing sessions on component mount
  useEffect(() => {
    // Check if there's an existing training session
    const trainingSession = QuizStorageManager.loadSession('training');
    if (trainingSession) {
      console.log('Resuming existing training session');
      setSelectedMode('training');
      setQuestions(trainingSession.questions);
      setStage('quiz');
      return;
    }

    // Check if there's an existing testing session
    const testingSession = QuizStorageManager.loadSession('testing');
    if (testingSession) {
      console.log('Resuming existing testing session');
      setSelectedMode('testing');
      setQuestions(testingSession.questions);
      setStage('quiz');
      return;
    }
  }, []);

  const handleModeSelect = async (mode: QuizMode) => {
    setIsLoading(true);
    setError(null);

    try {
      // Clear any existing session for this mode
      QuizStorageManager.clearSession(mode);

      console.log(`Starting new ${mode} session`);

      const response = await fetch('/api/quiz/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mode }),
      });

      if (!response.ok) {
        throw new Error(`Failed to start ${mode} mode`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || `Failed to start ${mode} mode`);
      }

      console.log(`${mode} mode started successfully:`, {
        sessionId: data.sessionId,
        questionsCount: data.questions?.length,
        timeLimit: data.timeLimit
      });

      // Create and save session
      const session = {
        sessionId: data.sessionId,
        mode,
        questions: data.questions,
        currentQuestionIndex: 0,
        answers: new Array(data.questions.length).fill(null),
        flaggedQuestions: [],
        timeRemaining: data.timeLimit,
        startTime: new Date(),
        config: data.config
      };

      QuizStorageManager.saveSession(session);

      setSelectedMode(mode);
      setQuestions(data.questions);
      setStage('quiz');

    } catch (err) {
      console.error(`Error starting ${mode} mode:`, err);
      setError(err instanceof Error ? err.message : `Failed to start ${mode} mode`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuizComplete = async (quizResults: any) => {
    console.log('Quiz completed:', quizResults);

    if (selectedMode === 'training') {
      // Training mode - just show results, don't submit to API
      setResults(quizResults);
      setStage('results');
      QuizStorageManager.clearSession('training');
    } else if (selectedMode === 'testing') {
      // Testing mode - submit results and redirect to regular quiz page
      // This would typically redirect to your existing testing quiz component
      router.push('/quiz?mode=testing');
    }
  };

  const handleRetakeTraining = () => {
    setStage('mode-selection');
    setSelectedMode(null);
    setQuestions([]);
    setResults(null);
    setError(null);
    QuizStorageManager.clearSession('training');
  };

  const handleBackToDashboard = () => {
    // Clear any sessions when going back to dashboard
    if (selectedMode) {
      QuizStorageManager.clearSession(selectedMode);
    }
    router.push('/dashboard');
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            {selectedMode ? `Starting ${selectedMode} mode...` : 'Loading...'}
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded mb-4">
            <h3 className="font-bold">Error</h3>
            <p>{error}</p>
          </div>
          <button
            onClick={() => {
              setError(null);
              setStage('mode-selection');
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Render current stage
  switch (stage) {
    case 'mode-selection':
      return <QuizModeSelection onModeSelect={handleModeSelect} />;

    case 'quiz':
      if (selectedMode === 'training') {
        return (
          <TrainingQuiz
            questions={questions}
            onComplete={handleQuizComplete}
            onBackToDashboard={handleBackToDashboard}
          />
        );
      } else {
    
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Redirecting to testing mode...</p>
            </div>
          </div>
        );
      }

    case 'results':
      if (selectedMode === 'training') {
        return (
          <TrainingResults
            results={results}
            onRetakeTraining={handleRetakeTraining}
            onBackToDashboard={handleBackToDashboard}
          />
        );
      }
      break;

    default:
      return <QuizModeSelection onModeSelect={handleModeSelect} />;
  }

  return <QuizModeSelection onModeSelect={handleModeSelect} />;
};

export default MainQuizComponent;