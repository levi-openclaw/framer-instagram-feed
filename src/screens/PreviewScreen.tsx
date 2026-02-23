import { AppState } from '../App'

interface PreviewScreenProps {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

export function PreviewScreen({ state, setState }: PreviewScreenProps) {
  const selectedPosts = state.posts.filter(p => state.selectedPosts.includes(p.id))
  
  const formatNumber = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k'
    return num.toString()
  }

  return (
    <div className="preview-screen">
      <header className="preview-header">
        <button className="back-btn" onClick={() => setState({ ...state, step: 'customize' })}>
          ← Back
        </button>
        <h2>Preview</h2>
        <button className="export-btn">Copy Code</button>
      </header>

      <div className="preview-container">
        <div 
          className="feed-preview"
          style={{
            gridTemplateColumns: `repeat(${state.settings.columns}, 1fr)`,
            gap: `${state.settings.gap}px`,
          }}
        >
          {selectedPosts.map(post => (
            <div 
              key={post.id} 
              className={`feed-item hover-${state.settings.hoverEffect}`}
              style={{ borderRadius: `${state.settings.borderRadius}px` }}
            >
              <img src={post.mediaUrl} alt={post.caption} />
              <div className="feed-overlay">
                {state.settings.showLikes && (
                  <span className="feed-likes">❤️ {formatNumber(post.likes)}</span>
                )}
              </div>
              {state.settings.showCaption && (
                <div className="feed-caption">{post.caption}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="preview-summary">
        <h3>Feed Summary</h3>
        <div className="summary-grid">
          <div className="summary-item">
            <span className="summary-label">Posts</span>
            <span className="summary-value">{selectedPosts.length}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Columns</span>
            <span className="summary-value">{state.settings.columns}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Layout</span>
            <span className="summary-value">{state.settings.layout}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Captions</span>
            <span className="summary-value">{state.settings.showCaption ? 'Yes' : 'No'}</span>
          </div>
        </div>
      </div>

      <div className="final-actions">
        <button className="primary-btn full-width">
          Add to Framer Site
        </button>
      </div>
    </div>
  )
}
