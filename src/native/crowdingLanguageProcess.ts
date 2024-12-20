import axios from 'axios';
import deasync from 'deasync';

const projectId = '717569';

interface LanguageProgressResponse {
  data: Array<{
    data: {
      words: {
        total: number;
        translated: number;
      };
      phrases: {
        total: number;
        translated: number;
      };
    };
  }>;
  pagination: {
    offset: number;
    limit: number;
  };
}

export function fetchLanguageProgressSync(languageId: string): number | null {
  let result: LanguageProgressResponse | null = null;
  let error: any = null;
  let done = false;

  axios
    .get<LanguageProgressResponse>(
      `https://api.crowdin.com/api/v2/projects/${projectId}/languages/${languageId}/progress`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CROWDIN_API_TOKEN}`,
        },
      }
    )
    .then((response) => {
      result = response.data;
      done = true;
    })
    .catch((err) => {
      error = err;
      done = true;
    });

  deasync.loopWhile(() => !done);

  if (error) {
    throw error;
  }

  if (result && result.data && result.data.length > 0) {
    const languageData = result.data[0].data;

    // Ensure the data is available before calculating
    if (languageData) {
      const wordsProgress = (languageData.words.translated / languageData.words.total) * 100;
      const phrasesProgress = (languageData.phrases.translated / languageData.phrases.total) * 100;

      const averageProgress = (wordsProgress + phrasesProgress) / 2;  // Average the progress
      return averageProgress;  // Return the average progress percentage
    }
  }

  return null;  // Return null if no valid data is found
}
