import { useState } from "react";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [documentName, setDocumentName] = useState("");
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Project Documentation",
      edited: "Today",
    },
    {
      id: 2,
      name: "Technical Specification",
      edited: "Yesterday",
    },
  ]);

  const createDocument = () => {
    if (documentName.trim() === "") {
      return;
    }

    const newDocument = {
      id: Date.now(),
      name: documentName,
      edited: "Just now",
    };

    setDocuments([...documents, newDocument]);
    setDocumentName("");
    setShowForm(false);
  };

  return (
    <div className="app">

      <header className="header">
        <div>
          <div className="logo">SyncDoc</div>
          <div className="subtitle">
            Collaborative Document Engine
          </div>
        </div>

        <button
          className="new-button"
          onClick={() => setShowForm(true)}
        >
          + New Document
        </button>
      </header>

      <main className="main">

        <h1 className="page-title">
          My Documents
        </h1>

        {showForm && (
          <div className="create-form">
            <h2>Create New Document</h2>

            <input
              type="text"
              placeholder="Enter document name"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
            />

            <div className="form-buttons">
              <button
                className="create-button"
                onClick={createDocument}
              >
                Create
              </button>

              <button
                className="cancel-button"
                onClick={() => {
                  setShowForm(false);
                  setDocumentName("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="documents">

          {documents.map((document) => (
            <div className="document-card" key={document.id}>
              <div className="document-icon">📄</div>

              <h3>{document.name}</h3>

              <p>Last edited: {document.edited}</p>
            </div>
          ))}

        </div>

      </main>

    </div>
  );
}

export default App;
