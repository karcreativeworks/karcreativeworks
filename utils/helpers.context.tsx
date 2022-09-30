import {
  Context,
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";

/* A helper function for creating variable Contexts */
export function createCtx<A>(defaultValue: A) {
  type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = createContext({
    state: defaultValue,
    update: defaultUpdate,
  });
  const CtProvider = ctx.Provider;
  const Provider = (props: PropsWithChildren<{}>) => {
    const [state, update] = useState(defaultValue);
    return <CtProvider value={{ state, update }} {...props} />;
  };
  return [ctx, Provider] as [typeof ctx, typeof Provider];
}

/* A helper function to Generate a Context Type of a said State Type */
export type CustomContextType<A> = Context<{
  state: A;
  update: Dispatch<SetStateAction<A>>;
}>;

// ALL APP STATE - PROVIDER, CONTEXT, PAYLOAD DISPATCHER, STATE

/* App State Type */
export interface AppStateType {
  loading: boolean;
  darkHeader: boolean;
}

/* Create a AppStateType Provider & Context which can be used through out the app */
export const [appCtx, AppProvider] = createCtx<AppStateType>({
  loading: false,
  darkHeader: false,
});

/* Use this hook to acces & update values of AppState */
export const useAppContext = (ctx: CustomContextType<AppStateType>) => {
  const {
    state: { loading, darkHeader },
    update: updateApp,
  } = useContext(ctx);

  /*
  update AppState
  */
  const sendPayload = useCallback(
    (param: keyof AppStateType, value: any) => {
      updateApp((s) => {
        let _s = { ...s };
        if (param in _s) _s[param] = value;
        return _s;
      });
    },
    [updateApp]
  );

  return {
    loading,
    darkHeader,
    sendPayload,
  };
};
