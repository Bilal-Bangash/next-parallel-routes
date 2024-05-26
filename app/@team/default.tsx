import { delay } from '@/lib/util'

async function DefaultTeam() {
  await delay(1000)
  return (
    <div className="h-96 flex-1 rounded-xl bg-red-800 p-10 text-white">
      <h1 className="text-3xl font-bold">Default Team</h1>
    </div>
  )
}

export default DefaultTeam
