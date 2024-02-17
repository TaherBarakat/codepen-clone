import { useEffect, useState } from "react";
import Editor from "./Editor";
import "./App.css";
function App() {
     const [html, setHtml] = useState("");
     const [css, setCss] = useState("");
     const [js, setJs] = useState("");
     const [srcDoc, setSrcDoc] = useState("");

     useEffect(() => {
          const time = setTimeout(() => {
               setSrcDoc(`  <html>
     <body>${html} </body>
     <style>${css}</style>
     <script>${js}</script>
     </html>`);
          }, 500);

          return () => clearTimeout(time);
     }, [html, css, js]);

     return (
          <>
               <div className="pane top-pane">
                    <Editor
                         language="xml"
                         displayName="HTML"
                         value={html}
                         onChange={setHtml}
                    />
                    <Editor
                         language="css"
                         displayName="CSS"
                         value={css}
                         onChange={setCss}
                    />
                    <Editor
                         language="js"
                         displayName="JS"
                         value={js}
                         onChange={setJs}
                    />
               </div>
               <div className="pane">
                    <iframe
                         srcDoc={srcDoc}
                         title="output"
                         sandbox="allow-script"
                         frameBorder="0"
                         width="100%"
                         height="100%"
                    />
               </div>
          </>
     );
}

export default App;
