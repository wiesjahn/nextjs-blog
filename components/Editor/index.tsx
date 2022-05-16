import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false
});

export default function MyEditor () {
  return (
    <MdEditor
      style={{ height: "800px", margin: 20, borderColor:'black' }}
      renderHTML={(text) => <ReactMarkdown source={text} />}
    />
  );
}
