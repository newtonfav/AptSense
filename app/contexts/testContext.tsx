import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";

interface InitialState {
  questions: any[];
  index: number;
  points: number;
  answer: number | null;
  isLoading: boolean;
  error: string;
  maxPoints: number;
  isFlipped: boolean;
  isAnswered: boolean;
  streak: number;
  highscore: number;
  numQuestions: number;
  secondsRemaining: number | null;
  status: "ready" | "active" | "error" | "finished" | "loading";
}

interface TestContextType extends InitialState {
  startTest: (data: any[]) => void;
  dispatch: Dispatch<Action>;
  isAnswered: boolean;
  isCorrect: boolean;
  submitAnswer: (selectedOption: number, index: number) => void;
  showFeedback: () => void;
  isFlipped: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

const TestContext = createContext<TestContextType | null>(null);

const initialState: InitialState = {
  questions: [],
  isLoading: false,
  status: "loading", //ready, active, error, finished, loading
  index: 0,
  answer: 0,
  numQuestions: 0,
  isFlipped: false,
  maxPoints: 0,
  isAnswered: false,
  points: 0,
  highscore: 0,
  error: "",
  streak: 0,
  secondsRemaining: null,
};

const SECS_PER_QUESTIONS = 30;

function reducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "question/loaded":
      return {
        ...state,
        questions: action.payload,
        numQuestions: action.payload.length,
        status: "ready",
        maxPoints: action.payload.reduce(
          (acc: number, cur: { points: any }) => acc + cur.points,
          0
        ),
      };

    case "rejected":
      return {
        ...state,
        status: "error",
        isLoading: false,
        error: action.payload,
      };

    case "question/start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTIONS,
      };

    case "question/newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
        isAnswered: true,
      };

    case "question/feedback":
      return { ...state, isFlipped: true };

    case "question/next":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        isAnswered: false,
        isFlipped: false,
      };

    case "question/prev":
      return { ...state, index: state.index - 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "restart":
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
        isAnswered: false,
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining
          ? state.secondsRemaining - 1
          : null,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      return state;
  }
}

function TestProvider({ children }: { children: ReactNode }) {
  const [
    {
      questions,
      status,
      index,
      error,
      answer,
      maxPoints,
      isAnswered,
      isFlipped,
      points,
      highscore,
      numQuestions,
      isLoading,
      streak,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [isCorrect, setIsCorrect] = useState(false);

  function startTest(data: any) {
    dispatch({ type: "question/loaded", payload: data });
  }

  function submitAnswer(selectedOption: number, index: number) {
    const currentQuestion = questions[index];

    if (currentQuestion.correctOption === selectedOption) {
      setIsCorrect(true);
    }
    dispatch({ type: "question/newAnswer", payload: selectedOption });
  }

  function showFeedback() {
    dispatch({ type: "question/feedback" });
  }

  return (
    <TestContext.Provider
      value={{
        questions,
        dispatch,
        isLoading,
        error,
        startTest,
        numQuestions,
        submitAnswer,
        status,
        index,
        answer,
        isCorrect,
        isAnswered,
        showFeedback,
        isFlipped,
        points,
        maxPoints,
        highscore,
        streak,
        secondsRemaining,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

function useTest() {
  const context = useContext(TestContext);
  if (context === undefined)
    throw new Error(
      "TestContext is being used outside the TestProvider component"
    );

  return context as NonNullable<typeof context>;
}

export { TestProvider, useTest };
