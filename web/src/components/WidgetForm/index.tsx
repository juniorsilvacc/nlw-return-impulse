import { useState } from "react";

import BugURL from '../../assets/bug.svg';
import IdeaURL from '../../assets/idea.svg';
import OtherURL from '../../assets/thought.svg';
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: BugURL,
      alt: 'Bug'
    }
  },
  IDEA: {
    title: 'Ideia',
     image: {
      source: IdeaURL,
      alt: 'Ideia'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: OtherURL,
      alt: 'Outro'
    }
  }
}

export type FeedBackType = keyof typeof feedbackTypes;

export default function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null)

  function handleRestarFeedback() {
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
          <FeedbackContentStep
            feedbackType={feedbackType}
            onFeedRestartRequested={handleRestarFeedback}
          />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com amor pela <a className="underline underline-offset-2" href="https://rockeseat.com.br">Rockeseat</a>
      </footer>
    </div>
  )
}
