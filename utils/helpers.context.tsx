import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

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
  return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
}

export const [pageLoaderCtx, PageLoaderProvider] = createCtx(false);
