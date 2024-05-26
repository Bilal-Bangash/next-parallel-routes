import { delay } from '@/lib/util'

async function DefaultTeam() {
  await delay(3000)
  return (
    <div className="h-96 flex-1 rounded-xl bg-blue-800 p-10 text-white">
      <h1 className="text-3xl font-bold">Default Main Page</h1>
    </div>
  )
}

export default DefaultTeam
