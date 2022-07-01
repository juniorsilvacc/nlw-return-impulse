import { FeedBackType, feedbackTypes } from "..";
import CloseWidgetButton from "../../CloseWidgetButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (type: FeedBackType) => void;
}

export default function FeedbackTypeStep({onFeedbackTypeChange}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseWidgetButton/>
      </header>
      
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 py-5 w-24 rounded-lg flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:boder-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChange(key as FeedBackType)}
              type="button"
            >
              <img src={ value.image.source } alt={ value.image.alt } className="mb-1" />
              <span>{ value.title }</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
