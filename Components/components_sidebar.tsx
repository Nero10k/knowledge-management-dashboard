import Link from "next/link"
import { Bell, Search, Sparkles, Clock, BookOpen, Users, Download, LayoutTemplate, Share2, Archive } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function Sidebar() {
  return (
    <div className="w-64 border-r bg-gray-50/40 p-4 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
          <span className="text-rose-500 text-sm">SL</span>
        </div>
        <span className="font-medium">SLMobbin</span>
        <Bell className="w-4 h-4 ml-auto text-gray-500" />
      </div>
      
      <div className="flex gap-2 mb-6">
        <Button variant="outline" className="w-full justify-start gap-2">
          <Search className="w-4 h-4" />
          Search
        </Button>
        <Button variant="secondary" className="w-full justify-start gap-2">
          <Sparkles className="w-4 h-4" />
          Ask
        </Button>
      </div>

      <nav className="space-y-1 mb-6">
        <Link href="#" className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
          <Clock className="w-4 h-4" />
          Updates
        </Link>
        <Link href="#" className="flex items-center gap-2 px-2 py-1.5 text-gray-600 bg-gray-100 rounded-md">
          <BookOpen className="w-4 h-4" />
          Knowledge Management
        </Link>
      </nav>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 px-2 mb-2">CHANNELS</h3>
        <nav className="space-y-1">
          <Link href="#" className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
            <span className="w-4 h-4">🔒</span>
            My private channel
          </Link>
          <Link href="#" className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
            <span className="w-4 h-4">💫</span>
            General [example channel]
          </Link>
          <Link href="#" className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
            <span className="w-4 h-4">📝</span>
            Design
          </Link>
          <Link href="#" className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
            <span className="w-4 h-4">📝</span>
            Design Process
          </Link>
        </nav>
      </div>

      <nav className="space-y-1 mb-auto">
        <Link href="#" className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
          <Users className="w-4 h-4" />
          Add people
        </Link>
        <Link href="#" className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
          <Download className="w-4 h-4" />
          Import
        </Link>
        <Link href="#" className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
          <LayoutTemplate className="w-4 h-4" />
          Templates
        </Link>
        <Link href="#" className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
          <Share2 className="w-4 h-4" />
          Shared with me
        </Link>
        <Link href="#" className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
          <Archive className="w-4 h-4" />
          Archive
        </Link>
      </nav>

      <div className="mt-4 space-y-4">
        <div className="bg-blue-50 p-3 rounded-lg space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-blue-600 font-medium">Set up: 71% completed</span>
          </div>
          <Progress value={71} className="h-1" />
        </div>
        <div className="text-sm space-y-1">
          <p>Your free trial ends in 14 days</p>
          <Link href="#" className="text-blue-600 hover:underline">
            See plans
          </Link>
        </div>
      </div>
    </div>
  )
}

