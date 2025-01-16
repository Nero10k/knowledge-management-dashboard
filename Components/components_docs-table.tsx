import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const documents = [
  {
    icon: "👋",
    name: "Getting started",
    status: "Not verified",
    owner: "Samlee",
    subdocs: 0,
    views: 4,
    lastActivity: "12 hours ago"
  },
  {
    icon: "📝",
    name: "Design Process",
    status: "Not verified",
    owner: "Samlee",
    subdocs: 1,
    views: 3,
    lastActivity: "37 minutes ago"
  },
  {
    icon: "🚀",
    name: "General [example channel]",
    status: "Not verified",
    owner: "Samlee",
    subdocs: 19,
    views: 3,
    lastActivity: "12 hours ago"
  },
  // Add more documents as needed
]

export function DocsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>DOC</TableHead>
          <TableHead>STATUS</TableHead>
          <TableHead>OWNER</TableHead>
          <TableHead>SUBDOCS</TableHead>
          <TableHead>VIEWS</TableHead>
          <TableHead>LAST ACTIVITY</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {documents.map((doc, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <span>{doc.icon}</span>
                {doc.name}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                {doc.status}
              </div>
            </TableCell>
            <TableCell>{doc.owner}</TableCell>
            <TableCell>{doc.subdocs}</TableCell>
            <TableCell>{doc.views}</TableCell>
            <TableCell>{doc.lastActivity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

