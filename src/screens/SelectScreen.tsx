import { AppState, InstagramPost } from '../App'

interface SelectScreenProps {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

export function SelectScreen({ state, setState }: SelectScreenProps) {
  const togglePost = (postId: string) => {
    const selected = state.selectedPosts.includes(postId)
      ? state.selectedPosts.filter(id => id !== postId)
      : [...state.selectedPosts, postId]
    setState({ ...state, selectedPosts: selected })
  }

  const selectAll = () => {
    setState({ ...state, selectedPosts: state.posts.map(p => p.id) })
  }

  const deselectAll = () => {
    setState({ ...state, selectedPosts: [] })
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k'
    return num.toString()
  }

  return (
    <div className="select-screen">
      <header className="select-header">
        <button className="back-btn" onClick={() => setState({ ...state, step: 'home' })}>
          ← Back
        </button>
        <h2>Select Posts</h2>
        <span className="selected-count">{state.selectedPosts.length} selected</span>
      </header>

      <div className="select-toolbar">
        <button onClick={selectAll}>Select All</button>
        <button onClick={deselectAll}>Deselect All</button>
      </div>

      <div className="posts-grid">
        {state.posts.map(post => {
          const isSelected = state.selectedPosts.includes(post.id)
          return (
            <div
              key={post.id}
              className={`post-card ${isSelected ? 'selected' : ''}`}
              onClick={() => togglePost(post.id)}
            >
              <img src={post.thumbnailUrl} alt={post.caption} />
              <div className="post-overlay">
                <span className="likes">❤️ {formatNumber(post.likes)}</span>
              </div>
              {isSelected && <div className="check-badge">✓</div>}
            </div>
          )
        })}
      </div>

      <div className="select-actions">
        <button 
          className="primary-btn"
          onClick={() => setState({ ...state, step: 'customize' })}
          disabled={state.selectedPosts.length === 0}
        >
          Continue ({state.selectedPosts.length} posts)
        </button>
      </div>
    </div>
  )
}
