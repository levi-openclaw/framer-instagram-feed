import { useState } from 'react'
import { HomeScreen } from './screens/HomeScreen'
import { SelectScreen } from './screens/SelectScreen'
import { CustomizeScreen } from './screens/CustomizeScreen'
import { PreviewScreen } from './screens/PreviewScreen'

export type InstagramPost = {
  id: string
  caption: string
  mediaUrl: string
  thumbnailUrl: string
  permalink: string
  timestamp: string
  likes: number
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
}

export type FeedSettings = {
  columns: 2 | 3 | 4
  gap: number
  borderRadius: number
  showCaption: boolean
  showLikes: boolean
  hoverEffect: 'none' | 'zoom' | 'overlay'
  layout: 'grid' | 'masonry'
}

export type AppState = {
  connected: boolean
  username: string
  avatar: string
  posts: InstagramPost[]
  selectedPosts: string[]
  settings: FeedSettings
  step: 'home' | 'select' | 'customize' | 'preview'
}

const DEFAULT_SETTINGS: FeedSettings = {
  columns: 3,
  gap: 8,
  borderRadius: 8,
  showCaption: false,
  showLikes: true,
  hoverEffect: 'zoom',
  layout: 'grid',
}

// Mock posts for demo
const MOCK_POSTS: InstagramPost[] = [
  { id: '1', caption: 'Beautiful sunset 🌅', mediaUrl: 'https://picsum.photos/400/400?random=1', thumbnailUrl: 'https://picsum.photos/200/200?random=1', permalink: '#', timestamp: '2024-01-15', likes: 234, mediaType: 'IMAGE' },
  { id: '2', caption: 'Morning coffee ☕', mediaUrl: 'https://picsum.photos/400/400?random=2', thumbnailUrl: 'https://picsum.photos/200/200?random=2', permalink: '#', timestamp: '2024-01-14', likes: 189, mediaType: 'IMAGE' },
  { id: '3', caption: 'Design inspiration', mediaUrl: 'https://picsum.photos/400/400?random=3', thumbnailUrl: 'https://picsum.photos/200/200?random=3', permalink: '#', timestamp: '2024-01-13', likes: 456, mediaType: 'IMAGE' },
  { id: '4', caption: 'Workspace vibes', mediaUrl: 'https://picsum.photos/400/400?random=4', thumbnailUrl: 'https://picsum.photos/200/200?random=4', permalink: '#', timestamp: '2024-01-12', likes: 321, mediaType: 'IMAGE' },
  { id: '5', caption: 'Travel mode ✈️', mediaUrl: 'https://picsum.photos/400/400?random=5', thumbnailUrl: 'https://picsum.photos/200/200?random=5', permalink: '#', timestamp: '2024-01-11', likes: 567, mediaType: 'IMAGE' },
  { id: '6', caption: 'Weekend vibes', mediaUrl: 'https://picsum.photos/400/400?random=6', thumbnailUrl: 'https://picsum.photos/200/200?random=6', permalink: '#', timestamp: '2024-01-10', likes: 432, mediaType: 'IMAGE' },
  { id: '7', caption: 'New project', mediaUrl: 'https://picsum.photos/400/400?random=7', thumbnailUrl: 'https://picsum.photos/200/200?random=7', permalink: '#', timestamp: '2024-01-09', likes: 278, mediaType: 'IMAGE' },
  { id: '8', caption: 'Creative flow', mediaUrl: 'https://picsum.photos/400/400?random=8', thumbnailUrl: 'https://picsum.photos/200/200?random=8', permalink: '#', timestamp: '2024-01-08', likes: 345, mediaType: 'IMAGE' },
  { id: '9', caption: 'Minimalist setup', mediaUrl: 'https://picsum.photos/400/400?random=9', thumbnailUrl: 'https://picsum.photos/200/200?random=9', permalink: '#', timestamp: '2024-01-07', likes: 456, mediaType: 'IMAGE' },
  { id: '10', caption: 'Nature walk', mediaUrl: 'https://picsum.photos/400/400?random=10', thumbnailUrl: 'https://picsum.photos/200/200?random=10', permalink: '#', timestamp: '2024-01-06', likes: 234, mediaType: 'IMAGE' },
  { id: '11', caption: 'Coffee shop work', mediaUrl: 'https://picsum.photos/400/400?random=11', thumbnailUrl: 'https://picsum.photos/200/200?random=11', permalink: '#', timestamp: '2024-01-05', likes: 189, mediaType: 'IMAGE' },
  { id: '12', caption: 'Evening read', mediaUrl: 'https://picsum.photos/400/400?random=12', thumbnailUrl: 'https://picsum.photos/200/200?random=12', permalink: '#', timestamp: '2024-01-04', likes: 167, mediaType: 'IMAGE' },
]

export function App() {
  const [state, setState] = useState<AppState>({
    connected: false,
    username: '',
    avatar: '',
    posts: [],
    selectedPosts: [],
    settings: DEFAULT_SETTINGS,
    step: 'home',
  })

  const connect = () => {
    // Simulate OAuth flow
    setState({
      ...state,
      connected: true,
      username: 'demo_user',
      avatar: 'https://picsum.photos/100/100?random=100',
      posts: MOCK_POSTS,
      selectedPosts: MOCK_POSTS.slice(0, 6).map(p => p.id),
      step: 'select',
    })
  }

  const disconnect = () => {
    setState({
      ...state,
      connected: false,
      username: '',
      avatar: '',
      posts: [],
      selectedPosts: [],
      step: 'home',
    })
  }

  const renderScreen = () => {
    switch (state.step) {
      case 'home':
        return <HomeScreen state={state} connect={connect} disconnect={disconnect} />
      case 'select':
        return <SelectScreen state={state} setState={setState} />
      case 'customize':
        return <CustomizeScreen state={state} setState={setState} />
      case 'preview':
        return <PreviewScreen state={state} setState={setState} />
      default:
        return <HomeScreen state={state} connect={connect} disconnect={disconnect} />
    }
  }

  return (
    <div className="app">
      {renderScreen()}
    </div>
  )
}
