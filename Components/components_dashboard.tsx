import { ChevronLeft, ChevronRight, Filter, Clock, AlertCircle, AlertTriangle, CircleSlash, BookOpen } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DocsTable } from "@/components/docs-table"

export function Dashboard() {
  return (
    <div className="flex-1 overflow-auto">
      <header className="border-b p-4">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            <h1 className="text-xl font-semibold">Knowledge Management</h1>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-medium text-gray-500">MY QUICK FILTERS</h2>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500">Outdated</span>
              </div>
              <p className="text-2xl font-semibold">0</p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-gray-500" />
                <span className="text-gray-500">Verification expired</span>
              </div>
              <p className="text-2xl font-semibold">0</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500">Verification requested</span>
              </div>
              <p className="text-2xl font-semibold">0</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <CircleSlash className="w-4 h-4 text-blue-500" />
                <span className="text-blue-500">Empty</span>
              </div>
              <p className="text-2xl font-semibold">0</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500">FILTERS</h3>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="text-sm">
              "All my un-verified public docs"
            </Button>
            <span className="text-sm text-gray-500">or</span>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Add filters
            </Button>
          </div>
        </div>

        <DocsTable />
      </div>
    </div>
  )
}

