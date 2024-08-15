import { createContext, ReactNode, useContext, useReducer } from "react";

interface InitialState {
  questions: string | any[];
  index: number;
  points: number;
  answer: number | null;
  isLoading: boolean;
  streak: number;
  highscore: number;
  secondsRemaining: number | null;
  status: "ready" | "active" | "error" | "finished" | "loading";
}

interface TestContextType extends InitialState {
  startTest: () => void;
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
  points: 0,
  highscore: 0,
  streak: 0,
  secondsRemaining: null,
};

const SECS_PER_QUESTIONS = 30;

function reducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
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

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
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
      return initialState;
  }
}

function TestProvider({ children }: { children: ReactNode }) {
  const [
    {
      questions,
      status,
      index,
      answer,
      points,
      highscore,
      isLoading,
      streak,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  async function startTest() {
    dispatch({ type: "loading" });
  }

  return (
    <TestContext.Provider
      value={{
        questions,
        isLoading,
        startTest,
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
