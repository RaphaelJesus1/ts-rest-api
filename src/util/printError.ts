const printError = (message: string, colorCode?: string) => {
  const color = colorCode || "\x1b[36m"; // cyan
  console.log(`${color}%s\x1b[0m`, message);
};

export { printError };
