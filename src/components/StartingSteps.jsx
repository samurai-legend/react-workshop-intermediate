import { Code, Paper, Stack, Text } from "@mantine/core";

const codeForCreatingReactApp = `
npx create-react-app react-practice

cd react-practice
npm start
`;

const codeForInstallingPackages = `
npm i prop-types sass react-router-dom
`;
const codeForExtensions = `
Name: Live Share
Id: ms-vsliveshare.vsliveshare
Description: Real-time collaborative development from the comfort of your favorite tools.
Version: 1.0.5828
Publisher: Microsoft
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare

Name: Path Intellisense
Id: christian-kohler.path-intellisense
Description: Visual Studio Code plugin that autocompletes filenames
Version: 2.8.4
Publisher: Christian Kohler
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense

Name: Prettier - Code formatter
Id: esbenp.prettier-vscode
Description: Code formatter using prettier
Version: 9.10.4
Publisher: Prettier
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Name: Auto Close Tag
Id: formulahendry.auto-close-tag
Description: Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text
Version: 0.5.14
Publisher: Jun Han
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag


Name: Auto Rename Tag
Id: formulahendry.auto-rename-tag
Description: Auto rename paired HTML/XML tag
Version: 0.1.10
Publisher: Jun Han
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag

Name: ESLint
Id: dbaeumer.vscode-eslint
Description: Integrates ESLint JavaScript into VS Code.
Version: 2.4.0
Publisher: Microsoft
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Name: Git History
Id: donjayamanne.githistory
Description: View git log, file history, compare branches or commits
Version: 0.6.19
Publisher: Don Jayamanne
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory

Name: GitLens — Git supercharged
Id: eamodio.gitlens
Description: Supercharge Git within VS Code — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands, and so much more
Version: 13.2.0
Publisher: GitKraken
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

Name: IntelliCode
Id: VisualStudioExptTeam.vscodeintellicode
Description: AI-assisted development
Version: 1.2.30
Publisher: Microsoft
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode
`;

const StartingSteps = () => {
  return (
    <Stack p={40}>
      <Paper withBorder shadow="sm" p={10}>
        <Text my={10}>Create A React App</Text>
        <Code block>{codeForCreatingReactApp}</Code>
      </Paper>
      <Paper withBorder shadow="sm" p={10}>
        <Text my={10}>Install Required Packages</Text>
        <Code block>{codeForInstallingPackages}</Code>
      </Paper>
      <Paper withBorder shadow="sm" p={10}>
        <Text my={10}>Install Helpful vscode extensions</Text>
        <Code block>{codeForExtensions}</Code>
      </Paper>
    </Stack>
  );
};

export default StartingSteps;
