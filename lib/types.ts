export interface TranslatedEssay {
  type: 'translated'
  slug: string
  title: string
  koreanTitle: string
  date: string
  author: string
  paragraphs: Array<{
    english: string
    korean: string
  }>
  viewCount?: number
}

export interface KoreanOnlyEssay {
  type: 'korean-only'
  slug: string
  title: string
  date: string
  author: string
  content: string[]
  viewCount?: number
}

export type Essay = TranslatedEssay | KoreanOnlyEssay

export interface ReadingProgress {
  essaySlug: string
  paragraphIndex: number
  timestamp: number
}

export interface ReadingSettings {
  fontSize: 'small' | 'medium' | 'large'
  showEnglish?: boolean
  showKorean?: boolean
}