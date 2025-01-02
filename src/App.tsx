import { useEffect, useState } from 'react';
import './App.scss'
import { Grid2 as Grid, Typography, Button } from '@mui/material';
import ActionButtons from './components/actionButtons';
import NoHoverBox from './components/noHoverBox';
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import DEFAULT_TEXT from './components/defaultText';

const textAreaGridStyling = { height: "75vh", width: "95%", margin: "10px auto 15px auto" };

function App() {
  const [markdownText, setMarkdownText] = useState<string>(DEFAULT_TEXT);
  const [history, setHistory] = useState<string[]>([]);

  const saveHistory = () => {
    setHistory((prev) => {
      if (prev[prev.length-1] !== markdownText) {
        return [...prev, markdownText];
      }
      return prev;
    })
  };

  const buttons = [
    <Button key="clear" 
      onClick={() => {
        saveHistory();
        setMarkdownText("");
      }}
    >
      Clear
    </Button>,
    <Button key="refresh" 
      onClick={() => {
        saveHistory();
        setMarkdownText(DEFAULT_TEXT);
      }}
    >
      Refresh
    </Button>,
    <Button key="undo" disabled={history.length === 0} 
      onClick={() => {
        const previousState = history[history.length - 1];
        setHistory((prev) => prev.slice(0, -1));
        setMarkdownText(previousState);
      }}
    >
      Undo
    </Button>,
    <Button key="nullBtn" disabled={true}>TBD</Button>,
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
          <textarea 
            id="editor" 
            onChange={(e) => {
              setMarkdownText(e.target.value);
              saveHistory();
            }} 
            value={markdownText} 
          />
        </Grid>

        <Grid size={{ md: 12, lg: 6 }} sx={textAreaGridStyling}>
          <NoHoverBox header="Preview" colorTheme="secondary" />
          <div id="preview">
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>{markdownText}</ReactMarkdown>
          </div>
        </Grid>

      </Grid>
    </div>

  )
}

export default App
