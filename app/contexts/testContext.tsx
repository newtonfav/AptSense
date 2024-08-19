import {
  act,
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useMemo,
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
  solution: string;
  isAnswered: boolean;
  timerIsPaused: boolean;
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
  submitAnswer: (
    selectedOption: number,
    index: number,
    solution: string
  ) => void;
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
  answer: null,
  numQuestions: 0,
  timerIsPaused: false,
  isFlipped: false,
  maxPoints: 0,
  isAnswered: false,
  solution: "",
  points: 0,
  highscore: 0,
  error: "",
  streak: 0,
  secondsRemaining: null,
};

const SECS_PER_QUESTIONS = 60;

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
        isAnswered: false,
        timerIsPaused: false,
        isFlipped: false,
        secondsRemaining: SECS_PER_QUESTIONS,
      };

    case "question/newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload.selectedOption,
        points:
          action.payload.selectedOption === question.correctOption
            ? state.points + question.points
            : state.points,
        isAnswered: true,
        timerIsPaused: true,
        solution: action.payload.solution,
      };

    case "question/newOption":
      return { ...state, answer: action.payload };

    case "question/feedback":
      return { ...state, isFlipped: true };

    case "question/next":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        isAnswered: false,
        timerIsPaused: false,
        isFlipped: false,
        secondsRemaining: SECS_PER_QUESTIONS,
      };

    case "question/prev":
      return {
        ...state,
        index: state.index - 1,
        answer: null,
        isAnswered: true,
      };

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
        maxPoints: action.payload.reduce(
          (acc: number, cur: { points: any }) => acc + cur.points,
          0
        ),
        numQuestions: action.payload.length,
        questions: action.payload,
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
      solution,
      maxPoints,
      isAnswered,
      isFlipped,
      timerIsPaused,
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

  function submitAnswer(
    selectedOption: number,
    index: number,
    solution: string
  ) {
    const currentQuestion = questions[index];

    if (currentQuestion.correctOption === selectedOption) {
      setIsCorrect(true);
    }

    dispatch({
      type: "question/newAnswer",
      payload: { selectedOption, solution },
    });
  }

  function showFeedback() {
    dispatch({ type: "question/feedback" });
  }

  const value = useMemo(
    () => ({
      questions,
      dispatch,
      isLoading,
      error,
      startTest,
      numQuestions,
      submitAnswer,
      solution,
      status,
      index,
      answer,
      isCorrect,
      timerIsPaused,
      isAnswered,
      showFeedback,
      isFlipped,
      points,
      maxPoints,
      highscore,
      streak,
      secondsRemaining,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [secondsRemaining, dispatch, status, isAnswered, index, isFlipped]
  );

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
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
