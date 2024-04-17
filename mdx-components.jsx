function H1(props) {
  return (
    <h1
      className="flex justify-center font-bold text-5xl my-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
      {...props}
    />
  );
}

export function useMDXComponents(components) {
  return { h1: H1, ...components };
}
