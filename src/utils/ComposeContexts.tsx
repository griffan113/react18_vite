import React from "react";

type ComposeContextsProps = {
  children: React.ReactNode;
  with: Array<React.ElementType>;
};

export const ComposeContexts: React.FC<ComposeContextsProps> = ({
  with: Providers,
  children,
}) => (
  <>
    {Providers.reduce(
      (AccProvider, Provider) => (
        <Provider>{AccProvider}</Provider>
      ),
      children
    )}
  </>
);
