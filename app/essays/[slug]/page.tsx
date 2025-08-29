'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getEssayBySlug } from '@/lib/essays'
import { ReadingSettings } from '@/lib/types'

interface PageProps {
  params: {
    slug: string
  }
}

export default function EssayPage({ params }: PageProps) {
  const essay = getEssayBySlug(params.slug)
  
  if (!essay) {
    notFound()
  }

  const [currentParagraph, setCurrentParagraph] = useState(0)
  const [settings, setSettings] = useState<ReadingSettings>({
    fontSize: 'medium',
    showEnglish: true,
    showKorean: true,
  })

  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress-${params.slug}`)
    if (savedProgress) {
      setCurrentParagraph(parseInt(savedProgress))
    }

    const savedSettings = localStorage.getItem('reading-settings')
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }
  }, [params.slug])

  useEffect(() => {
    localStorage.setItem(`progress-${params.slug}`, currentParagraph.toString())
  }, [currentParagraph, params.slug])

  useEffect(() => {
    localStorage.setItem('reading-settings', JSON.stringify(settings))
  }, [settings])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (essay.type === 'translated') {
        if (e.key === 'ArrowLeft' && currentParagraph > 0) {
          setCurrentParagraph(prev => prev - 1)
        } else if (e.key === 'ArrowRight' && currentParagraph < essay.paragraphs.length - 1) {
          setCurrentParagraph(prev => prev + 1)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentParagraph, essay])

  const getFontSizeClass = () => {
    switch (settings.fontSize) {
      case 'small': return 'text-sm'
      case 'large': return 'text-lg'
      default: return 'text-base'
    }
  }

  if (essay.type === 'korean-only') {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-gray-200 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            목록으로
          </Link>

          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {essay.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-400">
              <span>{essay.date}</span>
              <span>•</span>
              <span>{essay.author}</span>
            </div>
          </header>

          <div className="flex justify-end mb-6 gap-2">
            <button
              onClick={() => setSettings(prev => ({ ...prev, fontSize: 'small' }))}
              className={`px-3 py-1 rounded ${settings.fontSize === 'small' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              작게
            </button>
            <button
              onClick={() => setSettings(prev => ({ ...prev, fontSize: 'medium' }))}
              className={`px-3 py-1 rounded ${settings.fontSize === 'medium' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              보통
            </button>
            <button
              onClick={() => setSettings(prev => ({ ...prev, fontSize: 'large' }))}
              className={`px-3 py-1 rounded ${settings.fontSize === 'large' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              크게
            </button>
          </div>

          <article className={`prose prose-invert max-w-none ${getFontSizeClass()}`}>
            <div className="space-y-6 text-gray-200 leading-relaxed">
              {essay.content}
            </div>
          </article>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-gray-200 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          목록으로
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            {essay.koreanTitle}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 italic mb-4">
            {essay.title}
          </h2>
          <div className="flex items-center gap-4 text-gray-500">
            <span>{essay.date}</span>
            <span>•</span>
            <span>{essay.author}</span>
          </div>
        </header>

        <div className="mb-8 p-4 bg-gray-900 rounded-lg border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">
              진행률: {currentParagraph + 1} / {essay.paragraphs.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setSettings(prev => ({ ...prev, showEnglish: !prev.showEnglish }))}
                className={`px-3 py-1 rounded text-sm ${settings.showEnglish ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              >
                English
              </button>
              <button
                onClick={() => setSettings(prev => ({ ...prev, showKorean: !prev.showKorean }))}
                className={`px-3 py-1 rounded text-sm ${settings.showKorean ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              >
                한글
              </button>
            </div>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all"
              style={{ width: `${((currentParagraph + 1) / essay.paragraphs.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex justify-end mb-6 gap-2">
          <button
            onClick={() => setSettings(prev => ({ ...prev, fontSize: 'small' }))}
            className={`px-3 py-1 rounded ${settings.fontSize === 'small' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          >
            작게
          </button>
          <button
            onClick={() => setSettings(prev => ({ ...prev, fontSize: 'medium' }))}
            className={`px-3 py-1 rounded ${settings.fontSize === 'medium' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          >
            보통
          </button>
          <button
            onClick={() => setSettings(prev => ({ ...prev, fontSize: 'large' }))}
            className={`px-3 py-1 rounded ${settings.fontSize === 'large' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          >
            크게
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {settings.showEnglish && (
            <div className={`p-6 bg-gray-900 rounded-lg border border-gray-800 ${!settings.showKorean ? 'md:col-span-2' : ''}`}>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">English</h3>
              <p className={`text-gray-200 leading-relaxed ${getFontSizeClass()}`}>
                {essay.paragraphs[currentParagraph].english}
              </p>
            </div>
          )}
          
          {settings.showKorean && (
            <div className={`p-6 bg-gray-900 rounded-lg border border-gray-800 ${!settings.showEnglish ? 'md:col-span-2' : ''}`}>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">한글</h3>
              <p className={`text-gray-200 leading-relaxed ${getFontSizeClass()}`}>
                {essay.paragraphs[currentParagraph].korean}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentParagraph(prev => Math.max(0, prev - 1))}
            disabled={currentParagraph === 0}
            className="px-6 py-3 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            이전
          </button>

          <span className="text-gray-400">
            {currentParagraph + 1} / {essay.paragraphs.length}
          </span>

          <button
            onClick={() => setCurrentParagraph(prev => Math.min(essay.paragraphs.length - 1, prev + 1))}
            disabled={currentParagraph === essay.paragraphs.length - 1}
            className="px-6 py-3 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
          >
            다음
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          💡 팁: 키보드 좌/우 화살표로도 이동할 수 있습니다
        </div>
      </div>
    </div>
  )
}