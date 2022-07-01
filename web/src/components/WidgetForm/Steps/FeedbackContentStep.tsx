import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedBackType, feedbackTypes } from '..';
import CloseWidgetButton from '../../CloseWidgetButton';
import ScreenshotButton from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedBackType;
  onFeedRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export default function FeedbackContentStep({ feedbackType, onFeedRestartRequested, onFeedbackSent }: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const feedbackTypesInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();


    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button type="button" className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100" onClick={onFeedRestartRequested}>
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={ feedbackTypesInfo.image.source } alt={ feedbackTypesInfo.image.alt } className="w-6 h-6" />
          {feedbackTypesInfo.title}
        </span>
        <CloseWidgetButton/>
      </header>
      
      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhe o que está acontecendo..."
          onChange={e => setComment(e.target.value)}
        />

        <footer className="flex mt-2 gap-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={comment.length === 0}
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}
