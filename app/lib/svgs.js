import path from "path";

export const svgList = [
  {
    id: "html",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: "css",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: "tailwind",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: "bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    id: "javascript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: "typescript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: "react",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: "next",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: "dotnet",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    id: "json",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
  },
  {
    id: "c",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    id: "csharp",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    id: "java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    id: "python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: "bash",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  },
  {
    id: "mysql",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    id: "docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    id: "aws",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    id: "azure",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
  },
  {
    id: "git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: "postman",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    id: "figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    id: "angular",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    id: "node",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: "powershell",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg",
  },
  {
    id: "asm",
    src: "data:image/png;base64,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",
  },
  {
    id: "matlab",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  },
  {
    id: "firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
  },
  {
    id: "swagger",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  },
  {
    id: "elixir",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg",
  },
  {
    id: "r",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  },
  {
    id: "mongodb",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  },
];

export const firstListImages = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
];

export const secondListImages = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
];

export const thirdListImages = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elixir/elixir-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg",
];