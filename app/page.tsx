'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { getAllEssays, getTranslatedEssays, getKoreanOnlyEssays } from '@/lib/essays'
import { Essay } from '@/lib/types'

type FilterType = 'all' | 'translated' | 'korean-only'

function HomePageContent() {
  const searchParams = useSearchParams()
  const initialFilter = (searchParams.get('filter') as FilterType) || 'all'
  const [filter, setFilter] = useState<FilterType>(initialFilter)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const filterParam = searchParams.get('filter') as FilterType
    if (filterParam && ['all', 'translated', 'korean-only'].includes(filterParam)) {
      setFilter(filterParam)
    } else if (!filterParam) {
      setFilter('all')
    }
  }, [searchParams])

  const getFilteredEssays = (): Essay[] => {
    let essays: Essay[] = []
    
    switch (filter) {
      case 'translated':
        essays = getTranslatedEssays()
        break
      case 'korean-only':
        essays = getKoreanOnlyEssays()
        break
      default:
        essays = getAllEssays()
    }

    if (searchQuery) {
      essays = essays.filter(essay => {
        const searchLower = searchQuery.toLowerCase()
        const title = essay.type === 'translated' 
          ? essay.koreanTitle.toLowerCase() + ' ' + essay.title.toLowerCase()
          : essay.title.toLowerCase()
        return title.includes(searchLower)
      })
    }

    return essays
  }

  const essays = getFilteredEssays()

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            📚 Essay Collection
          </h1>
          <p className="text-gray-400">스타트업과 창업에 대한 통찰</p>
        </header>

        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="에세이 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100 placeholder-gray-500"
            />
            <svg
              className="absolute right-3 top-3.5 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          {essays.map((essay) => (
            <Link
              key={essay.slug}
              href={essay.type === 'translated' ? `/translated/${essay.slug}` : `/korean/${essay.slug}`}
              className="block p-6 bg-gray-900 border-2 border-gray-800 rounded-xl hover:border-blue-500 hover:bg-gray-850 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2 text-white">
                    {essay.type === 'translated' ? essay.koreanTitle : essay.title}
                  </h2>
                  {essay.type === 'translated' && (
                    <p className="text-gray-400 italic mb-2">{essay.title}</p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{essay.date}</span>
                    <span>•</span>
                    <span>{essay.author}</span>
                    {essay.type === 'translated' && (
                      <>
                        <span>•</span>
                        <span className="text-blue-400">🇺🇸/🇰🇷 번역</span>
                      </>
                    )}
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {essays.length === 0 && searchQuery && (
          <div className="text-center py-12 text-gray-500">
            검색 결과가 없습니다.
          </div>
        )}
      </div>
    </div>
  )
}

function HomePageFallback() {
  const essays = getAllEssays()
  
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            📚 Essay Collection
          </h1>
          <p className="text-gray-400">스타트업과 창업에 대한 통찰</p>
        </header>

        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="에세이 검색..."
              disabled
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 opacity-50"
            />
            <svg
              className="absolute right-3 top-3.5 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          {essays.map((essay) => (
            <Link
              key={essay.slug}
              href={essay.type === 'translated' ? `/translated/${essay.slug}` : `/korean/${essay.slug}`}
              className="block p-6 bg-gray-900 border-2 border-gray-800 rounded-xl hover:border-blue-500 hover:bg-gray-850 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2 text-white">
                    {essay.type === 'translated' ? essay.koreanTitle : essay.title}
                  </h2>
                  {essay.type === 'translated' && (
                    <p className="text-gray-400 italic mb-2">{essay.title}</p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{essay.date}</span>
                    <span>•</span>
                    <span>{essay.author}</span>
                    {essay.type === 'translated' && (
                      <>
                        <span>•</span>
                        <span className="text-blue-400">🇺🇸/🇰🇷 번역</span>
                      </>
                    )}
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={<HomePageFallback />}>
      <HomePageContent />
    </Suspense>
  )
}