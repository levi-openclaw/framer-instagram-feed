import { AppState, FeedSettings } from '../App'

interface CustomizeScreenProps {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

export function CustomizeScreen({ state, setState }: CustomizeScreenProps) {
  const updateSetting = <K extends keyof FeedSettings>(key: K, value: FeedSettings[K]) => {
    setState({
      ...state,
      settings: { ...state.settings, [key]: value }
    })
  }

  return (
    <div className="customize-screen">
      <header className="customize-header">
        <button className="back-btn" onClick={() => setState({ ...state, step: 'select' })}>
          ← Back
        </button>
        <h2>Customize</h2>
      </header>

      <div className="options-list">
        {/* Layout */}
        <div className="option-group">
          <h3>Layout</h3>
          
          <div className="option-row">
            <label>Columns</label>
            <div className="column-selector">
              {[2, 3, 4].map(col => (
                <button
                  key={col}
                  className={state.settings.columns === col ? 'active' : ''}
                  onClick={() => updateSetting('columns', col as 2 | 3 | 4)}
                >
                  {col}
                </button>
              ))}
            </div>
          </div>

          <div className="option-row">
            <label>Gap</label>
            <input
              type="range"
              min="0"
              max="24"
              value={state.settings.gap}
              onChange={(e) => updateSetting('gap', parseInt(e.target.value))}
            />
            <span>{state.settings.gap}px</span>
          </div>

          <div className="option-row">
            <label>Border Radius</label>
            <input
              type="range"
              min="0"
              max="24"
              value={state.settings.borderRadius}
              onChange={(e) => updateSetting('borderRadius', parseInt(e.target.value))}
            />
            <span>{state.settings.borderRadius}px</span>
          </div>

          <div className="option-row">
            <label>Layout Style</label>
            <select
              value={state.settings.layout}
              onChange={(e) => updateSetting('layout', e.target.value as 'grid' | 'masonry')}
            >
              <option value="grid">Grid</option>
              <option value="masonry">Masonry</option>
            </select>
          </div>
        </div>

        {/* Content */}
        <div className="option-group">
          <h3>Content</h3>
          
          <div className="option-row toggle">
            <label>Show Captions</label>
            <button
              className={`toggle-btn ${state.settings.showCaption ? 'on' : ''}`}
              onClick={() => updateSetting('showCaption', !state.settings.showCaption)}
            >
              <span className="toggle-thumb"></span>
            </button>
          </div>

          <div className="option-row toggle">
            <label>Show Likes</label>
            <button
              className={`toggle-btn ${state.settings.showLikes ? 'on' : ''}`}
              onClick={() => updateSetting('showLikes', !state.settings.showLikes)}
            >
              <span className="toggle-thumb"></span>
            </button>
          </div>
        </div>

        {/* Effects */}
        <div className="option-group">
          <h3>Hover Effect</h3>
          
          <div className="effect-options">
            {[
              { value: 'none', label: 'None' },
              { value: 'zoom', label: 'Zoom' },
              { value: 'overlay', label: 'Overlay' },
            ].map(effect => (
              <button
                key={effect.value}
                className={`effect-btn ${state.settings.hoverEffect === effect.value ? 'active' : ''}`}
                onClick={() => updateSetting('hoverEffect', effect.value as 'none' | 'zoom' | 'overlay')}
              >
                {effect.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="customize-actions">
        <button 
          className="primary-btn"
          onClick={() => setState({ ...state, step: 'preview' })}
        >
          Preview Feed
        </button>
      </div>
    </div>
  )
}
