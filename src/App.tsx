import { useEffect, useState } from 'react';
import './App.scss'
import { Grid2 as Grid, Typography, Button } from '@mui/material';
import ActionButtons from './components/actionButtons';
import NoHoverBox from './components/noHoverBox';

const textAreaGridStyling = { height: "75vh", width: "95%", margin: "10px auto 15px auto" };

function App() {
  const [markdownText, setMarkdownText] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);
  const [ convertedText, setConvertedText ] = useState(markdownText);

  const buttons = [
    <Button key="clear">Clear</Button>,
    <Button key="nullBtn1" disabled>TBD1</Button>,
    <Button key="nullBtn2" disabled>TBD2</Button>,
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center", marginTop: "5px" }}>
            Markdown Reviewer
          </Typography>
        </Grid>

        <Grid size={12} sx={{ textAlign: "center" }}>
          <ActionButtons buttons={buttons} colorTheme="success"/>
        </Grid>

        <Grid size={{ md: 12, lg: 6 }} sx={textAreaGridStyling}>
          <NoHoverBox header="Editor" />
          <textarea id="editor">{markdownText}</textarea>
        </Grid>

        <Grid size={{ md: 12, lg: 6 }} sx={textAreaGridStyling}>
          <NoHoverBox header="Preview" colorTheme="secondary" />
          <textarea id="preview">{convertedText}</textarea>
        </Grid>

      </Grid>
    </div>

  )
}

export default App
