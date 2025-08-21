import { Redis } from '@upstash/redis';
import { QuizSubmission } from './types';

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function saveQuizResult(submission: QuizSubmission): Promise<void> {
  try {
    await redis.set(`quiz:${submission.id}`, JSON.stringify(submission));
    await redis.zadd('quiz:submissions', { score: Date.now(), member: submission.id });
  } catch (error) {
    console.error('Error saving quiz result:', error);
    throw error;
  }
}

export async function getAllResults(): Promise<QuizSubmission[]> {
  try {
    const submissionIds = await redis.zrange('quiz:submissions', 0, -1, { rev: true });
    if (!submissionIds.length) return [];
    
    const results = await Promise.all(
      submissionIds.map(async (id) => {
        const data = await redis.get(`quiz:${id}`);
        return typeof data === 'string' ? JSON.parse(data) : data;
      })
    );
    return results.filter(Boolean) as QuizSubmission[];
  } catch (error) {
    console.error('Error fetching results:', error);
    return [];
  }
}

export async function clearAllResults(): Promise<void> {
  try {
    const submissionIds = await redis.zrange('quiz:submissions', 0, -1);
    if (submissionIds.length > 0) {
      await Promise.all([
        ...submissionIds.map(id => redis.del(`quiz:${id}`)),
        redis.del('quiz:submissions')
      ]);
    }
  } catch (error) {
    console.error('Error clearing results:', error);
    throw error;
  }
}