import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

interface InitialState {
  questions: any[];
  index: number;
  points: number;
  answer: number | null;
  isLoading: boolean;
  error: string;
  streak: number;
  highscore: number;
  numQuestions: number;
  secondsRemaining: number | null;
  status: "ready" | "active" | "error" | "finished" | "loading";
}

interface TestContextType extends InitialState {
  startTest: (data: any[]) => void;
  dispatch: Dispatch<Action>;
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

    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "question/next":
      return { ...state, index: state.index + 1, answer: null };

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
      return { ...initialState, status: "ready", questions: state.questions };

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
      points,
      highscore,
      numQuestions,
      isLoading,
      streak,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function startTest(data: any) {
    dispatch({ type: "question/loaded", payload: data });
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
        status,
        index,
        answer,
        points,
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
