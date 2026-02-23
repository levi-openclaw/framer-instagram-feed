import { AppState } from './App'

interface HomeScreenProps {
  state: AppState
  connect: () => void
  disconnect: () => void
}

export function HomeScreen({ state, connect, disconnect }: HomeScreenProps) {
  return (
    <div className="home-screen">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">📸</span>
          <h1>Instagram Feed</h1>
        </div>
        <p className="tagline">Display your Instagram posts on your site</p>
      </header>

      {state.connected ? (
        <div className="connected-section">
          <div className="account-card">
            <img src={state.avatar} alt={state.username} className="avatar" />
            <div className="account-info">
              <div className="username">@{state.username}</div>
              <div className="posts-count">{state.posts.length} posts</div>
            </div>
            <button className="disconnect-btn" onClick={disconnect}>
              Disconnect
            </button>
          </div>

          <div className="stats">
            <div className="stat-card">
              <div className="stat-value">{state.posts.length}</div>
              <div className="stat-label">Total Posts</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{state.selectedPosts.length}</div>
              <div className="stat-label">Selected</div>
            </div>
          </div>

          <div className="actions">
            <button 
              className="primary-btn" 
              onClick={() => state.step === 'home' ? null : null}
            >
              Select Posts
            </button>
          </div>
        </div>
      ) : (
        <div className="connect-section">
          <div className="hero-graphic">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="ig-post"></div>
                <div className="ig-post"></div>
                <div className="ig-post"></div>
              </div>
            </div>
          </div>

          <div className="features">
            <h2>What You Can Do</h2>
            <ul>
              <li>📱 Connect your Instagram account</li>
              <li>🖼️ Select posts to display</li>
              <li>🎨 Customize the look & feel</li>
              <li>📐 Choose grid layouts</li>
              <li>✨ Add hover effects</li>
            </ul>
          </div>

          <div className="actions">
            <button className="primary-btn" onClick={connect}>
              Connect Instagram
            </button>
          </div>

          <p className="disclaimer">
            We only read your public posts. No posting access.
          </p>
        </div>
      )}
    </div>
  )
}
